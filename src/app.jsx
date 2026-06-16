/* global React, ReactDOM */
const { useState, useEffect, useRef, useCallback } = React;

/* ───────────────── Toast system ───────────────── */
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

/* ───────────────── Navbar ───────────────── */
function Navbar({ onStub, onExplore, active, setActive }) {
  const links = [
    { l: "Foundations", href: "UX4G Foundations.html" },
    { l: "Fundamentals", href: "UX4G Fundamentals.html" },
    { l: "Components", href: "UX4G Components.html" },
    { l: "Patterns", href: "UX4G Patterns.html" },
    { l: "Made by You", href: "UX4G Made by You.html" },
  ];
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  return (
    <SiteNavbar />
  );
}

/* ───────────────── Hero (Animated) ─────────────────
   Each snippet is a miniature of a real UX4G component or pattern
   — kept token-aligned (var(--primary), var(--success), etc.) and
   visually consistent: 8px input radius, 999px chip radius,
   1px var(--gray-200) borders, body type 11–12px, eyebrow mono 10px. */
const SNIPPETS = [
  // 1 — Status chip trio (Chip component, status variant)
  `<div style="display:flex;flex-wrap:wrap;gap:6px;">
    <span style="display:inline-flex;align-items:center;gap:6px;padding:4px 10px;border-radius:999px;font-size:11px;font-weight:500;color:var(--success);background:#EBF6EF;border:1px solid #B9DDC5;"><span style="width:6px;height:6px;border-radius:50%;background:var(--success);"></span>Verified</span>
    <span style="display:inline-flex;align-items:center;gap:6px;padding:4px 10px;border-radius:999px;font-size:11px;font-weight:500;color:#8A5A14;background:#FFF6E2;border:1px solid #FCD9A0;"><span style="width:6px;height:6px;border-radius:50%;background:#8A5A14;"></span>Under review</span>
    <span style="display:inline-flex;align-items:center;gap:6px;padding:4px 10px;border-radius:999px;font-size:11px;font-weight:500;color:var(--danger);background:#FDECEB;border:1px solid #F4B9B5;"><span style="width:6px;height:6px;border-radius:50%;background:var(--danger);"></span>Rejected</span>
  </div>`,

  // 2 — OTP component, partially filled
  `<div style="display:flex;flex-direction:column;gap:10px;">
    <div style="font-size:10px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:var(--gray-500);">Verify OTP</div>
    <div style="display:flex;gap:6px;">
      <div style="width:32px;height:40px;border:1.5px solid var(--primary);border-radius:8px;display:flex;align-items:center;justify-content:center;font-weight:600;font-size:16px;background:#F2EFFF;color:var(--primary-deep);">4</div>
      <div style="width:32px;height:40px;border:1.5px solid var(--primary);border-radius:8px;display:flex;align-items:center;justify-content:center;font-weight:600;font-size:16px;background:#F2EFFF;color:var(--primary-deep);">8</div>
      <div style="width:32px;height:40px;border:1.5px solid var(--primary);border-radius:8px;display:flex;align-items:center;justify-content:center;font-weight:600;font-size:16px;background:#F2EFFF;color:var(--primary-deep);">3</div>
      <div style="width:32px;height:40px;border:1.5px solid #E5E5E5;border-radius:8px;background:#fff;"></div>
      <div style="width:32px;height:40px;border:1.5px solid #E5E5E5;border-radius:8px;background:#fff;"></div>
      <div style="width:32px;height:40px;border:1.5px solid #E5E5E5;border-radius:8px;background:#fff;"></div>
    </div>
    <div style="font-size:11px;color:var(--gray-500);">Resend in 0:42 · SMS</div>
  </div>`,

  // 3 — Aadhaar match input (Identity pattern)
  `<div style="display:flex;flex-direction:column;gap:6px;">
    <div style="display:flex;justify-content:space-between;align-items:center;">
      <span style="font-size:11px;font-weight:600;color:var(--ink);">Full name</span>
      <span style="display:inline-flex;align-items:center;gap:4px;font-size:9.5px;font-weight:600;letter-spacing:0.04em;text-transform:uppercase;color:var(--success);background:#EBF6EF;border:1px solid #B9DDC5;padding:2px 6px;border-radius:999px;"><span style="width:5px;height:5px;border-radius:50%;background:var(--success);"></span>Aadhaar match</span>
    </div>
    <div style="padding:10px 12px;border:1.5px solid var(--gray-200);border-radius:8px;font-size:13px;color:var(--ink);background:#fff;font-weight:500;">Rahul Sharma</div>
    <div style="font-size:10.5px;color:var(--gray-500);">As per Aadhaar · cannot be edited</div>
  </div>`,

  // 4 — Pill button pair (Button component, pill modifier).
  // Stacked vertically so neither button wraps and both share a consistent
  // 36px height in the narrow column.
  `<div style="display:flex;flex-direction:column;gap:10px;align-items:flex-start;">
    <div style="font-size:10px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:var(--gray-500);">Continue</div>
    <button style="height:36px;padding:0 18px;background:var(--primary);color:#fff;font-size:12px;font-weight:600;border-radius:999px;border:none;display:inline-flex;align-items:center;gap:6px;white-space:nowrap;">Submit application <span style="font-size:11px;line-height:1;">→</span></button>
    <button style="height:36px;padding:0 18px;background:#fff;color:var(--ink);font-size:12px;font-weight:600;border-radius:999px;border:1px solid var(--gray-200);display:inline-flex;align-items:center;white-space:nowrap;">Save draft</button>
  </div>`,

  // 5 — Application submitted alert (Notifications pattern, success)
  `<div style="padding:12px 14px;background:#EBF6EF;border:1px solid #B9DDC5;border-radius:10px;display:flex;gap:10px;align-items:flex-start;">
    <div style="width:18px;height:18px;border-radius:50%;background:var(--success);color:#fff;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;flex-shrink:0;">✓</div>
    <div style="display:flex;flex-direction:column;gap:2px;min-width:0;">
      <div style="font-size:12px;font-weight:600;color:var(--success);">Application submitted</div>
      <div style="font-size:10.5px;color:rgba(16,108,53,0.78);font-family:var(--font-mono);letter-spacing:0.02em;">Ref · AP-2025-DM-83942</div>
    </div>
  </div>`,

  // 6 — Session expiring alert (Notifications pattern, warning)
  `<div style="padding:12px 14px;background:#FFF6E2;border:1px solid #FCD9A0;border-radius:10px;display:flex;gap:10px;align-items:flex-start;">
    <div style="width:18px;height:18px;border-radius:50%;background:#8A5A14;color:#fff;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;flex-shrink:0;">!</div>
    <div style="display:flex;flex-direction:column;gap:2px;min-width:0;">
      <div style="font-size:12px;font-weight:600;color:#8A5A14;">Session expires in 1:42</div>
      <div style="font-size:11px;color:rgba(138,90,20,0.82);">Save draft to avoid losing your progress.</div>
    </div>
  </div>`,

  // 7 — Step-progress bar (Application pattern)
  `<div style="display:flex;flex-direction:column;gap:8px;">
    <div style="display:flex;justify-content:space-between;align-items:center;">
      <span style="font-size:10px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:var(--gray-500);">Step 4 of 6</span>
      <span style="font-size:10px;font-weight:600;color:var(--primary-deep);">67%</span>
    </div>
    <div style="width:100%;height:6px;background:#EFEEFA;border-radius:999px;overflow:hidden;">
      <div style="height:100%;background:var(--primary);border-radius:999px;width:67%;"></div>
    </div>
    <div style="font-size:11px;color:var(--ink);font-weight:600;">Income details</div>
  </div>`,

  // 8 — SLA tracker (Status pattern)
  `<div style="display:flex;flex-direction:column;gap:8px;">
    <div style="display:flex;justify-content:space-between;align-items:center;">
      <span style="font-size:11px;font-weight:600;color:var(--ink);">Caste certificate · SLA</span>
      <span style="font-size:10px;font-weight:700;color:#8A5A14;background:#FFF6E2;border:1px solid #FCD9A0;padding:2px 6px;border-radius:999px;">18 days left</span>
    </div>
    <div style="width:100%;height:6px;background:var(--gray-100,#F5F5F5);border-radius:999px;overflow:hidden;">
      <div style="height:100%;background:#E59915;border-radius:999px;width:40%;"></div>
    </div>
    <div style="display:flex;justify-content:space-between;font-size:9.5px;color:var(--gray-500);font-family:var(--font-mono);letter-spacing:0.04em;text-transform:uppercase;">
      <span>Filed · 14 Apr</span><span>Due · 05 May</span>
    </div>
  </div>`,

  // 9 — Document upload row (Application pattern)
  `<div style="display:flex;flex-direction:column;gap:8px;">
    <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;border:1px solid var(--gray-200);border-radius:8px;background:#fff;">
      <div style="display:flex;align-items:center;gap:10px;min-width:0;">
        <div style="width:24px;height:28px;border-radius:4px;background:#FDECEB;border:1px solid #F4B9B5;display:flex;align-items:center;justify-content:center;font-size:8px;font-weight:700;color:var(--danger);">PDF</div>
        <div style="display:flex;flex-direction:column;gap:2px;min-width:0;">
          <div style="font-size:11.5px;font-weight:600;color:var(--ink);">pan_card_scan.pdf</div>
          <div style="font-size:10px;color:var(--gray-500);">312 KB · uploaded</div>
        </div>
      </div>
      <div style="width:16px;height:16px;border-radius:50%;background:var(--success);color:#fff;display:flex;align-items:center;justify-content:center;font-size:9px;font-weight:700;">✓</div>
    </div>
    <div style="display:flex;align-items:center;gap:10px;padding:10px 12px;border:1.5px dashed var(--gray-200);border-radius:8px;background:#FAFAFA;color:var(--gray-500);font-size:11px;">
      <span style="width:18px;height:18px;border-radius:50%;background:#fff;border:1px solid var(--gray-200);display:flex;align-items:center;justify-content:center;font-size:12px;color:var(--gray-500);">+</span>
      Upload address proof
    </div>
  </div>`,

  // 10 — Eligibility checklist (Eligibility template)
  `<div style="display:flex;flex-direction:column;gap:8px;">
    <div style="font-size:10px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:var(--gray-500);">Eligibility</div>
    <div style="display:flex;gap:10px;align-items:center;">
      <div style="width:16px;height:16px;border-radius:4px;background:var(--success);color:#fff;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;flex-shrink:0;">✓</div>
      <div style="font-size:11.5px;color:var(--gray-500);text-decoration:line-through;">Resident of Delhi</div>
    </div>
    <div style="display:flex;gap:10px;align-items:center;">
      <div style="width:16px;height:16px;border-radius:4px;background:var(--success);color:#fff;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;flex-shrink:0;">✓</div>
      <div style="font-size:11.5px;color:var(--gray-500);text-decoration:line-through;">Age 60+</div>
    </div>
    <div style="display:flex;gap:10px;align-items:center;">
      <div style="width:16px;height:16px;border-radius:4px;border:1.5px solid var(--primary);background:#F2EFFF;flex-shrink:0;"></div>
      <div style="font-size:11.5px;color:var(--ink);font-weight:600;">Annual income below ₹3L</div>
    </div>
  </div>`,

  // 11 — Language chip row (Identity / Multilingual)
  `<div style="display:flex;flex-direction:column;gap:8px;">
    <div style="font-size:10px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:var(--gray-500);">Choose language</div>
    <div style="display:flex;flex-wrap:wrap;gap:6px;">
      <span style="padding:5px 10px;border:1.5px solid var(--primary);color:var(--primary-deep);background:#F2EFFF;border-radius:8px;font-size:11.5px;font-weight:600;">English</span>
      <span style="padding:5px 10px;border:1px solid var(--gray-200);color:var(--ink);background:#fff;border-radius:8px;font-size:11.5px;font-weight:500;">हिन्दी</span>
      <span style="padding:5px 10px;border:1px solid var(--gray-200);color:var(--ink);background:#fff;border-radius:8px;font-size:11.5px;font-weight:500;">தமிழ்</span>
      <span style="padding:5px 10px;border:1px solid var(--gray-200);color:var(--ink);background:#fff;border-radius:8px;font-size:11.5px;font-weight:500;">বাংলা</span>
    </div>
  </div>`,

  // 12 — Vertical stepper (Status pattern)
  `<div style="display:flex;flex-direction:column;gap:2px;position:relative;">
    <div style="position:absolute;left:9px;top:14px;bottom:14px;width:2px;background:var(--gray-200);"></div>
    <div style="display:flex;align-items:center;gap:10px;position:relative;z-index:1;padding:4px 0;">
      <div style="width:18px;height:18px;border-radius:50%;background:var(--success);display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;font-weight:700;">✓</div>
      <div style="font-size:11.5px;color:var(--gray-500);font-weight:500;">Submitted · 14 Apr</div>
    </div>
    <div style="display:flex;align-items:center;gap:10px;position:relative;z-index:1;padding:4px 0;">
      <div style="width:18px;height:18px;border-radius:50%;background:var(--success);display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;font-weight:700;">✓</div>
      <div style="font-size:11.5px;color:var(--gray-500);font-weight:500;">Verification · 18 Apr</div>
    </div>
    <div style="display:flex;align-items:center;gap:10px;position:relative;z-index:1;padding:4px 0;">
      <div style="width:18px;height:18px;border-radius:50%;background:var(--primary);display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;font-weight:700;box-shadow:0 0 0 3px rgba(106,78,255,0.18);">3</div>
      <div style="font-size:11.5px;color:var(--ink);font-weight:600;">Field inspection</div>
    </div>
    <div style="display:flex;align-items:center;gap:10px;position:relative;z-index:1;padding:4px 0;">
      <div style="width:18px;height:18px;border-radius:50%;background:#fff;border:1.5px solid var(--gray-200);"></div>
      <div style="font-size:11.5px;color:var(--gray-400);font-weight:500;">Approval</div>
    </div>
  </div>`,

  // 13 — DigiLocker issued document tile
  `<div style="border:1px solid var(--gray-200);border-radius:10px;padding:12px;background:#fff;display:flex;flex-direction:column;gap:10px;">
    <div style="display:flex;align-items:center;justify-content:space-between;">
      <span style="font-size:9.5px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary-deep);background:#F2EFFF;border:1px solid #DDD5FB;padding:2px 6px;border-radius:4px;">DigiLocker</span>
      <span style="font-size:9.5px;color:var(--gray-500);font-family:var(--font-mono);">Issued · MoHRD</span>
    </div>
    <div style="font-size:13px;font-weight:600;color:var(--ink);line-height:1.25;">Class XII Marksheet</div>
    <div style="display:flex;justify-content:space-between;align-items:center;">
      <span style="font-size:10px;color:var(--gray-500);font-family:var(--font-mono);">CBSE · 2014</span>
      <span style="display:inline-flex;align-items:center;gap:4px;font-size:10px;font-weight:600;color:var(--success);"><span style="width:5px;height:5px;border-radius:50%;background:var(--success);"></span>Verified</span>
    </div>
  </div>`,

  // 14 — Toast (Notifications pattern, neutral)
  `<div style="display:flex;align-items:center;gap:10px;padding:10px 12px 10px 10px;background:var(--ink,#0E0E12);color:#fff;border-radius:10px;">
    <div style="width:20px;height:20px;border-radius:50%;background:rgba(255,255,255,0.12);display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;flex-shrink:0;">i</div>
    <div style="display:flex;flex-direction:column;gap:2px;min-width:0;flex:1;">
      <div style="font-size:11.5px;font-weight:600;">Draft saved</div>
      <div style="font-size:10.5px;color:rgba(255,255,255,0.7);">We'll keep it for 7 days</div>
    </div>
    <div style="font-size:10px;font-weight:700;letter-spacing:0.06em;color:#A89FFF;text-transform:uppercase;">Undo</div>
  </div>`,

  // 15 — Search input with type-ahead suggestions (Search pattern)
  `<div style="display:flex;flex-direction:column;gap:8px;">
    <div style="display:flex;align-items:center;gap:10px;padding:9px 12px;border:1.5px solid var(--primary);border-radius:8px;background:#fff;box-shadow:0 0 0 1px rgba(74,43,194,0.18);">
      <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="var(--gray-500)" stroke-width="1.8" stroke-linecap="round"><circle cx="7" cy="7" r="4.5"/><path d="m11 11 3 3"/></svg>
      <span style="font-size:12.5px;color:var(--ink);">caste cert<span style="display:inline-block;width:1px;height:13px;background:var(--primary);margin-left:1px;vertical-align:-2px;"></span></span>
    </div>
    <div style="display:flex;flex-direction:column;gap:2px;padding:6px;border:1px solid var(--gray-200);border-radius:8px;background:#fff;">
      <div style="padding:6px 8px;font-size:11.5px;color:var(--ink);background:var(--primary-tint,#F2EFFF);border-radius:6px;font-weight:500;">Caste certificate · OBC</div>
      <div style="padding:6px 8px;font-size:11.5px;color:var(--gray-700);">Caste certificate · SC/ST</div>
      <div style="padding:6px 8px;font-size:11.5px;color:var(--gray-700);">Caste validity</div>
    </div>
  </div>`,

  // 16 — Form field with error state (Form Field Group component)
  `<div style="display:flex;flex-direction:column;gap:6px;">
    <span style="font-size:11px;font-weight:600;color:var(--ink);">PAN number</span>
    <div style="padding:10px 12px;border:1.5px solid var(--danger);border-radius:8px;font-size:13px;color:var(--ink);background:#fff;font-weight:500;font-family:var(--font-mono);letter-spacing:0.04em;">ABCD12345</div>
    <div style="display:flex;align-items:center;gap:6px;font-size:11px;color:var(--danger);">
      <span style="width:14px;height:14px;border-radius:50%;background:var(--danger);color:#fff;display:flex;align-items:center;justify-content:center;font-size:9px;font-weight:700;">!</span>
      Must be 10 chars · letters then digits
    </div>
  </div>`,

  // 17 — Dropdown menu open (Dropdown / Combobox)
  `<div style="display:flex;flex-direction:column;gap:6px;">
    <span style="font-size:11px;font-weight:600;color:var(--ink);">District</span>
    <div style="position:relative;">
      <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;border:1.5px solid var(--primary);border-radius:8px;background:#fff;font-size:12.5px;color:var(--ink);box-shadow:0 0 0 1px rgba(74,43,194,0.18);">
        Bengaluru Urban
        <svg viewBox="0 0 12 12" width="10" height="10" fill="none" stroke="var(--ink)" stroke-width="1.8" stroke-linecap="round"><path d="m3 4.5 3 3 3-3"/></svg>
      </div>
      <div style="margin-top:6px;padding:4px;border:1px solid var(--gray-200);border-radius:8px;background:#fff;box-shadow:0 8px 24px -10px rgba(0,0,0,0.18);">
        <div style="padding:7px 10px;font-size:11.5px;color:var(--ink);background:var(--primary-tint,#F2EFFF);border-radius:6px;font-weight:500;display:flex;justify-content:space-between;align-items:center;">Bengaluru Urban <span style="color:var(--primary);font-size:11px;">✓</span></div>
        <div style="padding:7px 10px;font-size:11.5px;color:var(--gray-700);">Bengaluru Rural</div>
        <div style="padding:7px 10px;font-size:11.5px;color:var(--gray-700);">Mysuru</div>
      </div>
    </div>
  </div>`,

  // 18 — Segmented tab nav (Navigation component)
  `<div style="display:flex;flex-direction:column;gap:10px;">
    <div style="display:flex;padding:3px;background:#F5F5F5;border-radius:10px;gap:2px;">
      <button style="flex:1;padding:7px 10px;font-size:11.5px;font-weight:600;border-radius:7px;border:none;background:#fff;color:var(--ink);box-shadow:0 1px 2px rgba(0,0,0,0.06);">Identity</button>
      <button style="flex:1;padding:7px 10px;font-size:11.5px;font-weight:500;border-radius:7px;border:none;background:transparent;color:var(--gray-700);">Docs</button>
      <button style="flex:1;padding:7px 10px;font-size:11.5px;font-weight:500;border-radius:7px;border:none;background:transparent;color:var(--gray-700);">Pay</button>
    </div>
    <div style="font-size:11px;color:var(--gray-500);">Aadhaar · PAN · Voter ID</div>
  </div>`,

  // 19 — Payment receipt (Payment pattern)
  `<div style="border:1px solid var(--gray-200);border-radius:12px;background:#fff;overflow:hidden;">
    <div style="padding:14px;display:flex;align-items:center;gap:10px;border-bottom:1px dashed var(--gray-200);">
      <div style="width:30px;height:30px;border-radius:50%;background:#EBF6EF;border:1px solid #B9DDC5;display:flex;align-items:center;justify-content:center;color:var(--success);font-weight:700;">₹</div>
      <div style="display:flex;flex-direction:column;gap:1px;">
        <div style="font-size:12px;font-weight:600;color:var(--ink);">Payment received</div>
        <div style="font-size:10px;font-family:var(--font-mono);color:var(--gray-500);letter-spacing:0.02em;">UPI · 14 Apr · 11:24 AM</div>
      </div>
    </div>
    <div style="padding:12px 14px;display:flex;justify-content:space-between;align-items:baseline;">
      <span style="font-size:10.5px;color:var(--gray-500);font-family:var(--font-mono);letter-spacing:0.04em;text-transform:uppercase;">Amount</span>
      <span style="font-size:18px;font-weight:700;color:var(--ink);font-family:var(--font-body);letter-spacing:-0.01em;">₹ 250.00</span>
    </div>
  </div>`,

  // 20 — Beneficiary card (Identity / Dashboard)
  `<div style="border:1px solid var(--gray-200);border-radius:10px;padding:12px;background:#fff;display:flex;flex-direction:column;gap:10px;">
    <div style="display:flex;align-items:center;gap:10px;">
      <div style="width:32px;height:32px;border-radius:50%;background:#F2EFFF;color:var(--primary-deep);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;border:1px solid #DDD5FB;">RS</div>
      <div style="display:flex;flex-direction:column;gap:1px;min-width:0;">
        <div style="font-size:12.5px;font-weight:600;color:var(--ink);">Rahul Sharma</div>
        <div style="font-size:10.5px;color:var(--gray-500);font-family:var(--font-mono);">DOB · 14 · 02 · 1987</div>
      </div>
    </div>
    <div style="display:flex;justify-content:space-between;align-items:center;padding-top:10px;border-top:1px solid var(--gray-150,#EEE);">
      <span style="font-size:10px;color:var(--gray-500);font-family:var(--font-mono);text-transform:uppercase;letter-spacing:0.06em;">Aadhaar</span>
      <span style="font-size:11px;font-family:var(--font-mono);color:var(--ink);letter-spacing:0.04em;">XXXX · XXXX · 4329</span>
    </div>
  </div>`,

  // 21 — Empty state (Empty State component)
  `<div style="display:flex;flex-direction:column;align-items:center;gap:6px;padding:8px;text-align:center;">
    <div style="width:44px;height:44px;border-radius:12px;background:#F5F5F5;border:1px dashed var(--gray-200);display:flex;align-items:center;justify-content:center;">
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="var(--gray-500)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h5l2 2h9v9.5a.5.5 0 0 1-.5.5h-15a.5.5 0 0 1-.5-.5z"/><path d="M9 13h6"/></svg>
    </div>
    <div style="font-size:12.5px;font-weight:600;color:var(--ink);">No drafts yet</div>
    <div style="font-size:10.5px;color:var(--gray-500);line-height:1.45;max-width:200px;">Start an application — we'll save your progress automatically.</div>
  </div>`,

  // 22 — Service tile (Apply journey card)
  `<div style="border:1px solid var(--gray-200);border-radius:10px;padding:14px;background:#fff;display:flex;flex-direction:column;gap:10px;">
    <div style="display:flex;align-items:center;justify-content:space-between;">
      <div style="width:28px;height:28px;border-radius:8px;background:var(--primary-tint,#F2EFFF);border:1px solid #DDD5FB;display:flex;align-items:center;justify-content:center;">
        <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="var(--primary-deep)" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 3.5h6l2 2v7H4z"/><path d="M6.5 7h3M6.5 9.5h3"/></svg>
      </div>
      <span style="font-size:9.5px;font-weight:600;color:var(--gray-500);font-family:var(--font-mono);letter-spacing:0.04em;text-transform:uppercase;">e-Service</span>
    </div>
    <div style="display:flex;flex-direction:column;gap:2px;">
      <div style="font-size:12.5px;font-weight:600;color:var(--ink);line-height:1.25;">Apply for caste certificate</div>
      <div style="font-size:10.5px;color:var(--gray-500);font-family:var(--font-mono);">SCH · 2024 · 088</div>
    </div>
    <div style="display:flex;justify-content:space-between;align-items:center;padding-top:4px;border-top:1px solid var(--gray-150,#EEE);">
      <span style="font-size:10.5px;color:var(--gray-700);">21 days SLA</span>
      <span style="font-size:11px;font-weight:600;color:var(--primary);">Apply →</span>
    </div>
  </div>`,

  // 23 — Date picker mini (Date Picker)
  `<div style="border:1px solid var(--gray-200);border-radius:10px;padding:10px;background:#fff;display:flex;flex-direction:column;gap:8px;">
    <div style="display:flex;justify-content:space-between;align-items:center;">
      <span style="font-size:11.5px;font-weight:600;color:var(--ink);">April 2026</span>
      <div style="display:flex;gap:4px;color:var(--gray-500);">
        <span style="font-size:11px;">‹</span><span style="font-size:11px;">›</span>
      </div>
    </div>
    <div style="display:grid;grid-template-columns:repeat(7,1fr);gap:3px;font-family:var(--font-mono);font-size:10px;color:var(--gray-500);text-align:center;">
      <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
    </div>
    <div style="display:grid;grid-template-columns:repeat(7,1fr);gap:3px;font-size:10.5px;color:var(--ink);text-align:center;">
      <span style="padding:4px 0;">7</span><span style="padding:4px 0;">8</span><span style="padding:4px 0;">9</span><span style="padding:4px 0;background:var(--primary);color:#fff;border-radius:6px;font-weight:600;">10</span><span style="padding:4px 0;">11</span><span style="padding:4px 0;color:var(--gray-400);">12</span><span style="padding:4px 0;color:var(--gray-400);">13</span>
      <span style="padding:4px 0;">14</span><span style="padding:4px 0;">15</span><span style="padding:4px 0;">16</span><span style="padding:4px 0;">17</span><span style="padding:4px 0;">18</span><span style="padding:4px 0;color:var(--gray-400);">19</span><span style="padding:4px 0;color:var(--gray-400);">20</span>
    </div>
  </div>`,

  // 24 — e-Sign request banner (DigiLocker pattern, primary CTA)
  `<div style="background:linear-gradient(135deg,#F8F6FF 0%,#ECE6F8 100%);border:1px solid #DDD5FB;border-radius:12px;padding:14px;display:flex;flex-direction:column;gap:10px;">
    <div style="display:flex;align-items:center;gap:8px;">
      <div style="width:24px;height:24px;border-radius:6px;background:#fff;border:1px solid #DDD5FB;display:flex;align-items:center;justify-content:center;">
        <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="var(--primary-deep)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8v3.5h8V8"/><path d="m6 5.5 2-2 2 2"/><path d="M8 3.5V9"/></svg>
      </div>
      <span style="font-size:9.5px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary-deep);">e-Sign with DigiLocker</span>
    </div>
    <div style="font-size:12px;color:var(--ink);font-weight:500;line-height:1.4;">Sign 3 documents with Aadhaar OTP. No upload needed.</div>
    <button style="align-self:flex-start;padding:7px 14px;background:var(--primary);color:#fff;font-size:11.5px;font-weight:600;border-radius:999px;border:none;display:inline-flex;align-items:center;gap:6px;">Continue with Locker</button>
  </div>`,

  // 25 — Compact horizontal status pipeline (Status pattern)
  `<div style="display:flex;flex-direction:column;gap:8px;">
    <div style="font-size:10px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:var(--gray-500);">Application pipeline</div>
    <div style="display:flex;align-items:center;gap:0;">
      <div style="width:18px;height:18px;border-radius:50%;background:var(--success);color:#fff;display:flex;align-items:center;justify-content:center;font-size:9px;font-weight:700;flex-shrink:0;">✓</div>
      <div style="flex:1;height:2px;background:var(--success);"></div>
      <div style="width:18px;height:18px;border-radius:50%;background:var(--success);color:#fff;display:flex;align-items:center;justify-content:center;font-size:9px;font-weight:700;flex-shrink:0;">✓</div>
      <div style="flex:1;height:2px;background:var(--primary);"></div>
      <div style="width:18px;height:18px;border-radius:50%;background:var(--primary);color:#fff;display:flex;align-items:center;justify-content:center;font-size:9px;font-weight:700;box-shadow:0 0 0 3px rgba(106,78,255,0.18);flex-shrink:0;">3</div>
      <div style="flex:1;height:2px;background:var(--gray-200);"></div>
      <div style="width:18px;height:18px;border-radius:50%;background:#fff;border:1.5px solid var(--gray-200);flex-shrink:0;"></div>
    </div>
    <div style="display:flex;justify-content:space-between;font-size:9.5px;color:var(--gray-500);font-family:var(--font-mono);letter-spacing:0.04em;text-transform:uppercase;">
      <span>Filed</span><span>Verified</span><span>Inspect</span><span>Approve</span>
    </div>
  </div>`,

  // 26 — File scan progress (File Upload component, in-progress)
  `<div style="display:flex;flex-direction:column;gap:8px;padding:12px;border:1px solid var(--gray-200);border-radius:10px;background:#fff;">
    <div style="display:flex;align-items:center;gap:10px;">
      <div style="width:28px;height:32px;border-radius:5px;background:#FDECEB;border:1px solid #F4B9B5;display:flex;align-items:center;justify-content:center;font-size:8px;font-weight:700;color:var(--danger);">PDF</div>
      <div style="display:flex;flex-direction:column;gap:2px;min-width:0;flex:1;">
        <div style="font-size:11.5px;font-weight:600;color:var(--ink);">aadhaar_front.pdf</div>
        <div style="font-size:9.5px;color:var(--gray-500);font-family:var(--font-mono);">Scanning · 1.2 MB</div>
      </div>
      <div style="font-size:11px;font-weight:700;color:var(--primary-deep);">62%</div>
    </div>
    <div style="height:5px;background:#EFEEFA;border-radius:999px;overflow:hidden;">
      <div style="height:100%;background:var(--primary);border-radius:999px;width:62%;"></div>
    </div>
    <div style="display:flex;align-items:center;gap:6px;font-size:10px;color:var(--gray-500);">
      <span style="width:6px;height:6px;border-radius:50%;background:var(--primary);"></span>
      Checking signature · do not close
    </div>
  </div>`
];

function Hero({ onStub }) {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const container = marqueeRef.current;
    if (!container) return;

    const columnsConfig = [
      { duration: 20, delay: 0 },
      { duration: 26, delay: 5 },
      { duration: 32, delay: 10 }
    ];

    // Fisher–Yates shuffle so each column draws a fresh, non-repeating
    // ordering of the snippet pool (still allows different columns to share
    // snippets, but you won't see the same one twice in a single column).
    const shuffle = (arr) => {
      const a = arr.slice();
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    };

    const CELLS_PER_COL = 12;
    const columns = columnsConfig.map(col => {
      const deck = shuffle(SNIPPETS);
      let setHTML = '';
      for (let i = 0; i < CELLS_PER_COL; i++) {
        const snippet = deck[i % deck.length];
        // Mix cell heights — ~55% tall, ~45% standard — gives the marquee a
        // varied rhythm rather than a uniform grid of equal blocks.
        const cellClass = Math.random() < 0.55 ? 'cell-tall' : 'cell-standard';
        setHTML += `<div class="marquee-cell ${cellClass}" data-state="hidden">${snippet}</div>`;
      }
      return `
        <div class="marquee-col">
          <div class="marquee-track" style="--scroll-duration: ${col.duration}s; --scroll-delay: -${col.delay}s;">
            ${setHTML}
            ${setHTML}
          </div>
        </div>
      `;
    }).join('');

    container.innerHTML = columns;

    const cells = container.querySelectorAll('.marquee-cell');
    const maxVisible = Math.floor(cells.length * 0.6);

    const scheduleCell = (cell, firstRun = false) => {
      if (cell.dataset.state === 'hidden') {
        const waitTime = firstRun ? Math.random() * 400 : 800 + Math.random() * 2200;
        setTimeout(() => {
          const currentVisible = container.querySelectorAll('.marquee-cell[data-state="visible"]').length;
          if (currentVisible < maxVisible) {
            cell.dataset.state = 'visible';
            cell.style.transition = 'opacity 0.5s ease-in-out';
            cell.style.opacity = '1';
            scheduleCell(cell);
          } else {
            scheduleCell(cell);
          }
        }, waitTime);
      } else {
        const stayTime = 3000 + Math.random() * 5000;
        setTimeout(() => {
          cell.dataset.state = 'hidden';
          cell.style.transition = 'opacity 0.8s ease-in-out';
          cell.style.opacity = '0';
          scheduleCell(cell);
        }, stayTime);
      }
    };

    cells.forEach(cell => {
      setTimeout(() => scheduleCell(cell, true), Math.random() * 300);
    });
  }, []);

  return (
    <section className="hero bg-animated-gradient">
      <div className="absolute top-0 bottom-0 right-[-10%] w-[65%] overflow-hidden z-0" style={{ left: 'auto' }}>
        <div ref={marqueeRef} className="marquee-container" style={{ position: 'absolute', inset: 0, justifyContent: 'flex-end', paddingRight: '3rem', transform: 'perspective(1200px) rotateY(-8deg) rotateX(3deg)', transformOrigin: 'center center', transformStyle: 'preserve-3d' }}></div>
      </div>
      <div className="radial-mask-left"></div>
      
      <div className="relative z-10 pointer-events-none" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 80px', width: '100%' }}>

        <div className="hero-content" style={{ pointerEvents: 'auto', maxWidth: '1000px' }}>
          {(() => {
            const WORD_STAGGER = 0.09;
            const word = (text, delay, style = {}) => (
              <span className="hero-word-mask" style={{ '--d': `${delay.toFixed(3)}s` }}>
                <span style={style}>{text}</span>
              </span>
            );
            const space = (key) => <span key={key} style={{ display: 'inline-block', width: '0.32em' }}></span>;

            const d0 = 0;
            const d1 = d0 + WORD_STAGGER;
            const d2 = d0 + WORD_STAGGER * 2;
            const headingDoneAt = d2 + 1.1;
            const restDelay = headingDoneAt - 0.55;

            const restStyle = { '--d': `${restDelay.toFixed(3)}s` };

            return (
              <>
                <h1 className="hero-headline-new">
                  <span style={{ display: 'inline-block' }}>
                    {word(<><span style={{ color: 'var(--ux4g-text-brand-primary-default)', fontWeight: 800 }}>UX</span><span style={{ color: 'var(--ux4g-text-brand-tertiary-default)', fontWeight: 800 }}>4G</span></>, d0)}
                  </span>
                  <br />
                  {word('Design', d1, { color: 'var(--ink)', fontWeight: 700 })}
                  {space('s1')}
                  {word('System', d2, { color: 'var(--ink)', fontWeight: 700 })}
                </h1>

                <div className="hero-block-mask" style={restStyle}>
                  <div style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'var(--ux4g-size-32)',
                    fontWeight: 600,
                    color: 'var(--ux4g-text-brand-primary-default)',
                    marginBottom: '0'
                  }}>
                    Designed for a billion citizens
                  </div>
                </div>

                <div className="hero-block-mask" style={restStyle}>
                  <div style={{
                    height: '1px',
                    background: 'var(--gray-200)',
                    width: '640px',
                    margin: 'var(--ux4g-space-12) 0'
                  }}></div>
                </div>

                <div className="hero-sub-new" style={{
                  border: 'none',
                  padding: 0,
                  fontSize: 'var(--ux4g-size-20)',
                  lineHeight: 1.6,
                  color: 'var(--gray-500)',
                  maxWidth: '680px',
                  fontWeight: 500,
                  fontFamily: 'var(--font-body)'
                }}>
                  <div className="hero-block-mask" style={restStyle}>
                    <div>
                      The official component library and pattern repository by <a href="#" style={{ color: 'var(--primary)', fontWeight: 700, textDecoration: 'none' }}>UX4G</a> for
                    </div>
                  </div>
                  <div className="hero-block-mask" style={{ '--d': `${(restDelay + 0.08).toFixed(3)}s` }}>
                    <div>
                      Government of India initiatives.
                    </div>
                  </div>
                </div>

                <div className="hero-block-mask" style={restStyle}>
                  <div style={{ marginTop: 'var(--ux4g-space-11)', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 'var(--ux4g-inline-l)', flexWrap: 'wrap' }}>
                    <button type="button"
                      className="ux4g-btn ux4g-btn-primary ux4g-btn-pill ux4g-btn-lg hero-pill-cta"
                      onClick={() => onStub("Get Started")}>
                      <span>Get Started</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </button>

                    <button type="button"
                      className="ux4g-btn ux4g-btn-outline-neutral ux4g-btn-pill ux4g-btn-lg hero-pill-cta"
                      onClick={() => onStub("Component Library")}>
                      <span>Component Library</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M7 17 17 7"/>
                        <path d="M8 7h9v9"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </>
            );
          })()}
        </div>

      </div>
    </section>
  );
}

function SpecificSection() {
  const langIntervalRef = useRef(null);
  const complianceIntervalRef = useRef(null);

  const allLanguages = ['हिन्दी', 'தமிழ்', 'తెలుగు', 'বাংলা', 'ગુજરાતી', 'ਪੰਜਾਬੀ', 'ಕನ್ನಡ', 'മലയാളം', 'ଓଡ଼િଆ', 'অসমীয়া', 'मराठी', 'English'];
  const [activeLangs, setActiveLangs] = useState([0, 1]);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    if (typeof SplitType !== 'undefined') {
      const headingSplit = new SplitType('.sc-heading', { types: 'words' });
      const bodySplit = new SplitType('.sc-body', { types: 'words' });
      gsap.set(headingSplit.words, { opacity: 0.08 });
      gsap.set(bodySplit.words, { opacity: 0.08 });

      // Unified timeline for sequential reveal
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.sc-heading',
          start: 'top 85%',
          end: 'top 25%',
          scrub: 1.5,
        }
      });

      tl.to(headingSplit.words, {
        opacity: 1,
        ease: 'none',
        stagger: 0.1,
      })
      .to(bodySplit.words, {
        opacity: 1,
        ease: 'none',
        stagger: 0.08,
      }, ">"); // ">" forces body to wait for heading to finish
    }



    // Stacking-card scale animation: each card scales down as later cards stack on top
    const pinEls = document.querySelectorAll('.sc-card-pin');
    const cardEls = document.querySelectorAll('.sc-card');
    const stackEl = document.querySelector('.sc-stack-cards');
    const headingEl = document.querySelector('.sc-heading-sticky');
    const numCards = cardEls.length;
    if (stackEl && pinEls.length === numCards) {
      cardEls.forEach((card, i) => {
        gsap.set(card, { transformOrigin: 'top center' });
        const targetScale = 1 - (numCards - i) * 0.05;
        gsap.to(card, {
          scale: targetScale,
          ease: 'none',
          scrollTrigger: {
            trigger: pinEls[i],
            start: 'top top',
            endTrigger: stackEl,
            end: 'bottom bottom',
            scrub: true,
          }
        });
      });
    }

    // Heading release — CSS sticky pins the heading at top:192 while cards
    // stack. To make the heading scroll up together with the stacked cards once
    // stacking ends, we slide the heading via transform.translateY across the
    // last 100vh of the section, scrubbed to scroll. Combined with CSS sticky,
    // this creates a smooth "release with cards" without any visual jumps.
    if (headingEl && stackEl) {
      gsap.to(headingEl, {
        y: () => -(window.innerHeight),
        ease: 'none',
        scrollTrigger: {
          trigger: stackEl,
          start: 'bottom bottom',
          end: 'bottom top',
          scrub: true,
          invalidateOnRefresh: true,
        }
      });
    }

    langIntervalRef.current = setInterval(() => {
      const count = Math.random() > 0.5 ? 2 : 3;
      const newActive = [];
      while (newActive.length < count) {
        const r = Math.floor(Math.random() * allLanguages.length);
        if (!newActive.includes(r)) newActive.push(r);
      }
      setActiveLangs(newActive);
    }, 1500);

    complianceIntervalRef.current = setInterval(() => {
      setTick(t => (t + 1) % 12);
    }, 600);

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
      if (langIntervalRef.current) clearInterval(langIntervalRef.current);
      if (complianceIntervalRef.current) clearInterval(complianceIntervalRef.current);
    };
  }, []);

  const getBadgeStyle = (index) => {
    if (tick === 0) return { opacity: 0, transform: 'translateY(8px)', transition: 'none' };
    if (tick > index && tick < 10) return { opacity: 1, transform: 'translateY(0)', transition: 'all 600ms ease' };
    if (tick >= 10) return { opacity: 0, transform: 'translateY(0)', transition: 'opacity 600ms ease' };
    return { opacity: 0, transform: 'translateY(8px)', transition: 'all 600ms ease' };
  };

  const SnippetCard = ({ children }) => (
    <div style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '14px 16px', marginBottom: '16px', color: '#fff', fontSize: '13px', fontFamily: 'var(--font-body)' }}>
      {children}
    </div>
  );

  const marqueeContent = (
    <React.Fragment>
      <SnippetCard>
        <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '11px', marginBottom: '4px' }}>Aadhaar Number</div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(0,0,0,0.3)', padding: '8px 12px', borderRadius: '6px' }}>
          <span style={{ letterSpacing: '2px' }}>xxxx xxxx 4012</span>
          <span style={{ fontSize: '16px' }}>⌘</span>
        </div>
      </SnippetCard>
      <SnippetCard>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
          <span style={{ fontWeight: 600 }}>GRV-2026-MH-04127</span>
          <span style={{ background: '#1A237E', color: '#8C9EFF', padding: '2px 6px', borderRadius: '4px', fontSize: '10px', fontWeight: 600 }}>ESCALATED</span>
        </div>
        <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '11px' }}>Delay in processing · Assigned to Nodal Officer</div>
      </SnippetCard>
      <SnippetCard>
        <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '11px', marginBottom: '8px' }}>OTP Verification</div>
        <div style={{ display: 'flex', gap: '6px', marginBottom: '8px' }}>
          {[4, 1, 9, '', '', ''].map((v, i) => (
            <div key={i} style={{ width: '28px', height: '32px', border: '1px solid ' + (v ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.1)'), borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600 }}>{v}</div>
          ))}
        </div>
        <div style={{ color: 'var(--amber)', fontSize: '11px' }}>Attempt 2 of 3</div>
      </SnippetCard>
      <SnippetCard>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', marginBottom: '6px' }}>
          <span>SLA Tracking</span>
          <span style={{ color: 'var(--success)', fontWeight: 600 }}>8 days remaining</span>
        </div>
        <div style={{ height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px', overflow: 'hidden' }}>
          <div style={{ height: '100%', width: '70%', background: '#4CAF50' }}></div>
        </div>
      </SnippetCard>
      <SnippetCard>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '24px', height: '24px', background: 'rgba(76,175,80,0.2)', color: 'var(--success)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px' }}>✓</div>
          <div>
            <div style={{ fontWeight: 500 }}>aadhaar_card.pdf</div>
            <div style={{ color: 'var(--success)', fontSize: '10px' }}>Verified</div>
          </div>
        </div>
      </SnippetCard>
      <SnippetCard>
        <div style={{ display: 'flex', gap: '8px' }}>
          <span style={{ background: 'rgba(255,255,255,0.1)', padding: '4px 8px', borderRadius: '4px', fontSize: '10px' }}>Submitted</span>
          <span style={{ background: 'rgba(255,152,0,0.2)', color: '#FF9800', padding: '4px 8px', borderRadius: '4px', fontSize: '10px' }}>Under Review</span>
          <span style={{ background: 'rgba(76,175,80,0.2)', color: 'var(--success)', padding: '4px 8px', borderRadius: '4px', fontSize: '10px' }}>Approved</span>
        </div>
      </SnippetCard>
    </React.Fragment>
  );

  return (
    <section className="sc-stack-outer" style={{ padding: '120px 0 80px', background: 'transparent', position: 'relative' }}>
      <style>{`
        @keyframes scMarqueeUp {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
      `}</style>

      {/* Aurora background — confined in its own overflow:hidden box so it
          doesn't force the section into a new scroll container (which would
          break the sticky heading and GSAP pinning above). aria-hidden, no
          pointer events; the inner ::before/::after pseudos do the painting. */}
      <div className="sc-aurora" aria-hidden="true"></div>

      {/* Heading - sticks at top while cards stack below */}
      <div className="sc-heading-sticky">
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto', padding: '0 40px' }}>
          <h2 className="sc-heading ux4g-display-m-default" style={{
            fontFamily: 'var(--font-display)',
            lineHeight: 1.15,
            letterSpacing: '-0.025em',
            color: 'var(--ink)',
            margin: 0,
          }}>
            A design system ambitious enough to serve every Indian citizen
          </h2>
        </div>
      </div>

      {/* Stacking cards - each pinned in its own 100vh slot */}
      <div className="sc-stack-cards" style={{ maxWidth: '1040px', margin: '0 auto', padding: '0 80px' }}>

        {/* CARD 1 — Built for government work */}
        <div className="sc-card-pin">
        <div className="sc-card" style={{ marginTop: '0px', border: '1px solid var(--primary-tint-2)', borderRadius: '20px', padding: 0, overflow: 'hidden', minHeight: '320px', display: 'flex', background: '#fff', boxShadow: '0 24px 48px -20px rgba(106,78,255,0.15)' }}>
          <div className="e06-v2-left" style={{ width: '55%', position: 'relative', padding: 'var(--ux4g-space-11)', background: '#f2efff' }}>
            <div className="e06-v2-ghost" style={{ position: 'absolute', top: '-10px', left: '12px', zIndex: 0, fontFamily: 'var(--font-display)', fontSize: 'var(--ux4g-size-120)', fontWeight: 800, lineHeight: 1, color: 'rgba(106,78,255,0.09)', userSelect: 'none' }}>1</div>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div className="e06-v2-index" style={{ fontFamily: 'var(--font-display)', fontSize: '44px', fontWeight: 800, color: 'var(--primary)', lineHeight: 1, marginBottom: 'var(--ux4g-space-7)', letterSpacing: '-0.03em' }}>1</div>
              <h3 className="e06-v2-head" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--ux4g-size-24)', fontWeight: 600, color: 'var(--ink)', marginBottom: 'var(--ux4g-space-6)', lineHeight: 1.25 }}>Built around how government services actually work</h3>
              <p className="e06-v2-body" style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--ux4g-size-16)', lineHeight: 1.75, color: 'var(--ink-3)', margin: 0 }}>From Aadhaar authentication and grievance filing to certificate issuance — UX4G addresses the specific flows and compliance requirements of Indian public services.</p>
            </div>
          </div>
          <div style={{ width: '45%', position: 'relative', minHeight: '320px', overflow: 'hidden' }}>
            <img src="assets/images/emblem on gradient.png" alt="National emblem on indigo gradient" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
        </div>
        </div>

        {/* CARD 2 — 200+ components */}
        <div className="sc-card-pin">
        <div className="sc-card" style={{ marginTop: '25px', border: '1px solid var(--primary-tint-2)', borderRadius: '20px', padding: 0, overflow: 'hidden', minHeight: '320px', display: 'flex', background: '#fff', boxShadow: '0 24px 48px -20px rgba(106,78,255,0.15)' }}>
          <div className="e06-v2-left" style={{ width: '55%', position: 'relative', padding: 'var(--ux4g-space-11)', background: '#f2efff' }}>
            <div className="e06-v2-ghost" style={{ position: 'absolute', top: '-10px', left: '12px', zIndex: 0, fontFamily: 'var(--font-display)', fontSize: 'var(--ux4g-size-120)', fontWeight: 800, lineHeight: 1, color: 'rgba(106,78,255,0.09)', userSelect: 'none' }}>2</div>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div className="e06-v2-index" style={{ fontFamily: 'var(--font-display)', fontSize: '44px', fontWeight: 800, color: 'var(--primary)', lineHeight: 1, marginBottom: 'var(--ux4g-space-7)', letterSpacing: '-0.03em' }}>2</div>
              <h3 className="e06-v2-head" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--ux4g-size-24)', fontWeight: 600, color: 'var(--ink)', marginBottom: 'var(--ux4g-space-6)', lineHeight: 1.25 }}>50+ components and patterns, built for the depth government work demands</h3>
              <p className="e06-v2-body" style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--ux4g-size-16)', lineHeight: 1.75, color: 'var(--ink-3)', margin: 0 }}>From a six-box OTP input to a three-level grievance escalation tree — every pattern in UX4G was shaped by real workflows inside real government services, then tested with the teams building them. This is not a starter kit. It is a complete system.</p>
            </div>
          </div>
          <ScCardImage src="assets/images/100+ components & patterns.png" alt="100+ components and patterns" />
        </div>
        </div>

        {/* CARD 3 — Compliance built in */}
        <div className="sc-card-pin">
        <div className="sc-card" style={{ marginTop: '50px', border: '1px solid var(--primary-tint-2)', borderRadius: '20px', padding: 0, overflow: 'hidden', minHeight: '320px', display: 'flex', background: '#fff', boxShadow: '0 24px 48px -20px rgba(106,78,255,0.15)' }}>
          <div className="e06-v2-left" style={{ width: '55%', position: 'relative', padding: 'var(--ux4g-space-11)', background: '#f2efff' }}>
            <div className="e06-v2-ghost" style={{ position: 'absolute', top: '-10px', left: '12px', zIndex: 0, fontFamily: 'var(--font-display)', fontSize: 'var(--ux4g-size-120)', fontWeight: 800, lineHeight: 1, color: 'rgba(106,78,255,0.09)', userSelect: 'none' }}>3</div>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div className="e06-v2-index" style={{ fontFamily: 'var(--font-display)', fontSize: '44px', fontWeight: 800, color: 'var(--primary)', lineHeight: 1, marginBottom: 'var(--ux4g-space-7)', letterSpacing: '-0.03em' }}>3</div>
              <h3 className="e06-v2-head" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--ux4g-size-24)', fontWeight: 600, color: 'var(--ink)', marginBottom: 'var(--ux4g-space-6)', lineHeight: 1.25 }}>Compliance is not a checklist. It is built into every component.</h3>
              <p className="e06-v2-body" style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--ux4g-size-16)', lineHeight: 1.75, color: 'var(--ink-3)', margin: 0 }}>Teams using UX4G automatically inherit DPDP Act 2023 consent flows, Right to Service Act SLA accountability, GIGW 3.0 accessibility standards, and DARPG grievance guidelines. The legal requirements are already handled — so teams can focus on the service, not the specification.</p>
            </div>
          </div>
          <ScCardImage src="assets/images/Compliances.png" alt="Compliance standards stacked" />
        </div>
        </div>

        {/* CARD 4 — Designed to grow */}
        <div className="sc-card-pin">
        <div className="sc-card" style={{ marginTop: '75px', border: '1px solid var(--primary-tint-2)', borderRadius: '20px', padding: 0, overflow: 'hidden', minHeight: '320px', display: 'flex', background: '#fff', boxShadow: '0 24px 48px -20px rgba(106,78,255,0.15)' }}>
          <div className="e06-v2-left" style={{ width: '55%', position: 'relative', padding: 'var(--ux4g-space-11)', background: '#f2efff' }}>
            <div className="e06-v2-ghost" style={{ position: 'absolute', top: '-10px', left: '12px', zIndex: 0, fontFamily: 'var(--font-display)', fontSize: 'var(--ux4g-size-120)', fontWeight: 800, lineHeight: 1, color: 'rgba(106,78,255,0.09)', userSelect: 'none' }}>4</div>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div className="e06-v2-index" style={{ fontFamily: 'var(--font-display)', fontSize: '44px', fontWeight: 800, color: 'var(--primary)', lineHeight: 1, marginBottom: 'var(--ux4g-space-7)', letterSpacing: '-0.03em' }}>4</div>
              <h3 className="e06-v2-head" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--ux4g-size-24)', fontWeight: 600, color: 'var(--ink)', marginBottom: 'var(--ux4g-space-6)', lineHeight: 1.25 }}>Designed to grow with every team that uses it</h3>
              <p className="e06-v2-body" style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--ux4g-size-16)', lineHeight: 1.75, color: 'var(--ink-3)', margin: 0 }}>UX4G ships with a documented core. What it becomes depends on the teams building on top of it. Custom components, ministry-specific patterns, and service-tested solutions can all feed back into the system. Everything Made by you starts here.</p>
            </div>
          </div>
          <ScCardGrowsArt />
        </div>
        </div>

      </div>
    </section>
  );
}

function ScCardImage({ src, alt }) {
  return (
    <div style={{ width: '45%', minHeight: '320px', position: 'relative', overflow: 'hidden' }}>
      <img src={src} alt={alt} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
    </div>
  );
}

// Card 4 illustration — Made-by-you / system grows with teams.
// A central UX4G core component, with satellite contribution cards orbiting
// in via dashed connectors. Amber accents = recent team contributions.
function ScCardGrowsArt() {
  return (
    <div style={{
      width: '45%',
      minHeight: '320px',
      position: 'relative',
      background: 'linear-gradient(135deg, #dcd4ff 0%, #f2efff 60%, #ffe7bf 100%)',
      overflow: 'hidden',
    }}>
      <svg viewBox="0 0 400 360" preserveAspectRatio="xMidYMid meet" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} aria-hidden="true">
        {/* Subtle dotted grid */}
        <defs>
          <pattern id="sc4-dots" width="14" height="14" patternUnits="userSpaceOnUse">
            <circle cx="1.2" cy="1.2" r="1.1" fill="rgba(74, 43, 194, 0.07)"/>
          </pattern>
        </defs>
        <rect x="0" y="0" width="400" height="360" fill="url(#sc4-dots)"/>

        {/* Faint connector lines from satellites to core */}
        <g stroke="#6A4EFF" strokeWidth="1.4" strokeDasharray="3 4" fill="none" opacity="0.45">
          <path d="M 96 90 C 130 130, 160 150, 180 168"/>
          <path d="M 308 86 C 280 130, 245 152, 222 168"/>
          <path d="M 72 252 C 110 230, 150 218, 175 208"/>
          <path d="M 332 254 C 296 232, 250 215, 225 208"/>
        </g>

        {/* Tiny "+" sparkles between satellites and core */}
        <g fill="#6A4EFF" opacity="0.5" fontFamily="var(--font-display)" fontSize="14" fontWeight="700">
          <text x="138" y="142">+</text>
          <text x="262" y="142">+</text>
          <text x="138" y="234">+</text>
          <text x="262" y="234">+</text>
        </g>

        {/* Central core card — the documented UX4G system */}
        <g transform="translate(150, 138)">
          <rect x="3" y="4" width="100" height="84" rx="10" fill="#000000" opacity="0.06"/>
          <rect x="0" y="0" width="100" height="84" rx="10" fill="#FFFFFF" stroke="#A391FF" strokeWidth="1.6"/>
          <rect x="12" y="12" width="20" height="20" rx="3" fill="#4A2BC2"/>
          <rect x="38" y="14" width="42" height="4" rx="1.5" fill="#0F1115"/>
          <rect x="38" y="22" width="28" height="4" rx="1.5" fill="#0F1115" opacity="0.65"/>
          <rect x="12" y="42" width="76" height="3.5" rx="1.5" fill="#0F1115" opacity="0.55"/>
          <rect x="12" y="50" width="60" height="3.5" rx="1.5" fill="#0F1115" opacity="0.55"/>
          <rect x="12" y="58" width="68" height="3.5" rx="1.5" fill="#0F1115" opacity="0.55"/>
          <rect x="12" y="70" width="40" height="8" rx="2" fill="#4A2BC2"/>
          {/* Core badge */}
          <g transform="translate(82, -6)">
            <circle cx="0" cy="0" r="10" fill="#4A2BC2"/>
            <path d="M -3 0 L -1 2 L 3 -2" stroke="#FFFFFF" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          </g>
        </g>

        {/* Satellite — top-left (form pattern, primary tint) */}
        <g transform="translate(48, 50)">
          <rect x="2" y="2" width="64" height="48" rx="6" fill="#000000" opacity="0.04"/>
          <rect x="0" y="0" width="64" height="48" rx="6" fill="#FFFFFF" stroke="#D6CFF0" strokeWidth="1.2"/>
          <rect x="8" y="8" width="48" height="3" rx="1" fill="#0F1115" opacity="0.55"/>
          <rect x="8" y="14" width="48" height="6" rx="1.5" fill="#F2EFFF" stroke="#D6CFF0" strokeWidth="0.8"/>
          <rect x="8" y="24" width="36" height="3" rx="1" fill="#0F1115" opacity="0.55"/>
          <rect x="8" y="30" width="48" height="6" rx="1.5" fill="#F2EFFF" stroke="#D6CFF0" strokeWidth="0.8"/>
        </g>

        {/* Satellite — top-right (data row, amber = new contribution) */}
        <g transform="translate(288, 46)">
          <rect x="2" y="2" width="64" height="48" rx="6" fill="#000000" opacity="0.04"/>
          <rect x="0" y="0" width="64" height="48" rx="6" fill="#FFFFFF" stroke="#FFD899" strokeWidth="1.4"/>
          <rect x="8" y="8" width="14" height="14" rx="2" fill="#FFA827"/>
          <rect x="26" y="10" width="30" height="3.5" rx="1" fill="#0F1115"/>
          <rect x="26" y="17" width="22" height="3" rx="1" fill="#0F1115" opacity="0.5"/>
          <rect x="8" y="28" width="48" height="3" rx="1" fill="#0F1115" opacity="0.5"/>
          <rect x="8" y="34" width="36" height="3" rx="1" fill="#0F1115" opacity="0.5"/>
          {/* "new" tag */}
          <g transform="translate(48, -6)">
            <rect x="0" y="0" width="22" height="10" rx="3" fill="#FFA827"/>
            <text x="11" y="7.5" fontSize="6" fontFamily="var(--font-body)" fontWeight="700" textAnchor="middle" fill="#2A1A00">NEW</text>
          </g>
        </g>

        {/* Satellite — bottom-left (chart) */}
        <g transform="translate(28, 226)">
          <rect x="2" y="2" width="64" height="50" rx="6" fill="#000000" opacity="0.04"/>
          <rect x="0" y="0" width="64" height="50" rx="6" fill="#FFFFFF" stroke="#D6CFF0" strokeWidth="1.2"/>
          <polyline points="8,38 18,28 26,32 36,18 46,24 56,12" stroke="#4A2BC2" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="56" cy="12" r="2.2" fill="#4A2BC2"/>
          <line x1="8" y1="44" x2="56" y2="44" stroke="#D6CFF0" strokeWidth="0.8"/>
        </g>

        {/* Satellite — bottom-right (chip cluster, amber = new contribution) */}
        <g transform="translate(298, 230)">
          <rect x="2" y="2" width="68" height="50" rx="6" fill="#000000" opacity="0.04"/>
          <rect x="0" y="0" width="68" height="50" rx="6" fill="#FFFFFF" stroke="#FFD899" strokeWidth="1.4"/>
          <rect x="8" y="9" width="22" height="9" rx="3" fill="#F2EFFF" stroke="#A391FF" strokeWidth="0.8"/>
          <rect x="34" y="9" width="26" height="9" rx="3" fill="#FFF7E6" stroke="#FFA827" strokeWidth="0.8"/>
          <rect x="8" y="22" width="30" height="9" rx="3" fill="#F2EFFF" stroke="#A391FF" strokeWidth="0.8"/>
          <rect x="42" y="22" width="18" height="9" rx="3" fill="#FFF7E6" stroke="#FFA827" strokeWidth="0.8"/>
          <rect x="8" y="35" width="40" height="6" rx="1.5" fill="#4A2BC2"/>
        </g>

        {/* "Made by you" label tag floating bottom */}
        <g transform="translate(154, 312)">
          <rect x="0" y="0" width="92" height="22" rx="11" fill="#FFFFFF" stroke="#A391FF" strokeWidth="1.2"/>
          <circle cx="13" cy="11" r="3.5" fill="#FFA827"/>
          <text x="22" y="14.5" fontSize="9.5" fontFamily="var(--font-body)" fontWeight="700" fill="#4A2BC2">Made by you</text>
        </g>
      </svg>
    </div>
  );
}

/* ───────────────── Section: live numbers ───────────────── */
function NumbersSection() {
  const items = [
    { big: "50", suffix: "+", label: "Components live", sub: "ACROSS 6 GROUPS" },
    { big: "9", suffix: "", label: "Pattern groups", sub: "IDENTITY → FEEDBACK" },
    { big: "22", suffix: "", label: "Languages", sub: "OFFICIAL SCRIPTS" },
    { big: "AA", suffix: "", label: "WCAG 2.1 conformance", sub: "AUDITED Q1 2026" },
  ];
  return (
    <section className="numbers">
      <div className="container">
        <div className="numbers-head">
          <div className="title">By the numbers</div>
          <div className="meta">LAST UPDATED · 28.04.2026</div>
        </div>
        <div className="numbers-grid">
          {items.map((n, i) => (
            <div className="number-cell" key={i}>
              <div className={"big" + (n.compact ? " compact" : "")}>
                <span>{n.big}</span>
                {n.suffix && <span className="suffix">{n.suffix}</span>}
              </div>
              <div className="label">{n.label}</div>
              <div className="sub">{n.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────── Section: Bento Grid ───────────────── */
function BentoFormElements() {
  const [otp, setOtp] = React.useState(['5', '5', '5', '', '']);
  const otpRefs = React.useRef([]);
  const [categoryOpen, setCategoryOpen] = React.useState(false);
  const [category, setCategory] = React.useState('General');
  const [gender, setGender] = React.useState('Male');
  const [domains, setDomains] = React.useState({ Agriculture: true, Horticulture: false, Fisheries: false, AnimalHusbandry: true });
  const [range, setRange] = React.useState(25);
  const [darkMode, setDarkMode] = React.useState(true);
  // Range selection: April 9 → 23
  const rangeStart = 9, rangeEnd = 23;

  const handleOtpChange = (i, val) => {
    if (!/^[0-9]?$/.test(val)) return;
    const newOtp = [...otp]; newOtp[i] = val; setOtp(newOtp);
    if (val && i < 4) otpRefs.current[i + 1]?.focus();
  };

  // Dark/light palette tied to design tokens
  const dm = {
    bg: darkMode ? '#0a0a0a' : '#ffffff',
    text: darkMode ? '#fafafa' : '#171717',
    textMuted: darkMode ? '#a3a3a3' : '#737373',
    brand: darkMode ? '#a391ff' : '#4a2bc2',
    rangeFill: darkMode ? '#24145c' : '#dcd4ff',
    rangeText: darkMode ? '#c0b3ff' : '#4a2bc2',
    edge: darkMode ? '#a391ff' : '#4a2bc2',
    edgeText: darkMode ? '#171717' : '#ffffff',
    border: darkMode ? '#262626' : '#e5e5e5',
    ctrlBorder: darkMode ? '#525252' : '#d9d9d9',
    btnOutline: darkMode ? '#fafafa' : '#171717',
  };

  return (
    <div className="bento-cell bento-fe" style={{ gridColumn: 'span 12', background: '#f2efff', minHeight: '767px', position: 'relative' }}>
      <div className="bento-fe__header" style={{ padding: '32px 32px 0 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', zIndex: 10, position: 'relative' }}>
        <div style={{ fontFamily: 'var(--ux4g-font-family-sans)', fontSize: '32px', fontWeight: 700, color: 'var(--primary-deep)', letterSpacing: '-0.01em' }}>Form Elements</div>
        <a href="UX4G Components.html" style={{ border: '1px solid #a391ff', background: 'transparent', color: 'var(--primary-deep)', borderRadius: '999px', padding: '8px 18px', fontSize: '13px', fontWeight: 500, cursor: 'pointer', textDecoration: 'none', display: 'inline-block' }}>Explore components →</a>
      </div>

      <div className="bento-fe__stage">
        {/* LEFT — Woman + OTP overlay (no rounded container, woman extends to card bottom) */}
        <div className="bento-fe__left">
          <div className="bento-fe__glow" style={{ background: 'radial-gradient(circle at 35% 70%, rgba(163,145,255,0.45) 0%, rgba(220,212,255,0.12) 50%, transparent 75%)' }}></div>
          <img className="bento-fe__woman" src="assets/images/Form elements woman.png" alt="" draggable="false" />
          <div className="bento-fe__otp-card">
            <div style={{ fontSize: '14px', fontWeight: 600, marginBottom: '12px', color: 'var(--ink)' }}>Enter OTP</div>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '10px' }}>
              {[0, 1, 2, 3, 4].map(i => {
                const filled = !!otp[i];
                return (
                  <input
                    key={i}
                    ref={el => otpRefs.current[i] = el}
                    value={otp[i]}
                    onChange={e => handleOtpChange(i, e.target.value)}
                    maxLength={1}
                    style={{
                      width: '40px', height: '48px',
                      border: `1.5px solid ${filled ? '#4a2bc2' : '#d9d9d9'}`,
                      borderRadius: '8px',
                      textAlign: 'center',
                      fontSize: '18px',
                      fontWeight: 600,
                      outline: 'none',
                      color: 'var(--ink)',
                      background: '#fafafa',
                    }}
                  />
                );
              })}
            </div>
            <div style={{ fontSize: '12px', color: 'var(--gray-500)' }}>
              Didn't receive OTP? <span style={{ color: 'var(--primary-deep)', cursor: 'pointer', fontWeight: 500 }}>Resend in 00:17</span>
            </div>
          </div>
        </div>

        {/* CENTER — Search + Form (centered, max-width clamped for legibility) */}
        <div className="bento-fe__center" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {/* Search bar */}
          <div style={{ background: '#fff', border: '1px solid #e5e5e5', borderRadius: '999px', padding: '6px 6px 6px 18px', display: 'flex', alignItems: 'center', gap: '12px', height: '48px', boxShadow: '0 1px 2px rgba(0,0,0,0.04)' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#737373" strokeWidth="2"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></svg>
            <input placeholder="Search Re..." style={{ flex: 1, border: 'none', outline: 'none', fontSize: '14px', color: 'var(--ink)', background: 'transparent', minWidth: 0 }} />
            <button aria-label="search" style={{ background: '#4a2bc2', color: '#fff', border: 'none', borderRadius: '999px', width: '36px', height: '36px', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></svg>
            </button>
          </div>

          {/* Form card */}
          <div style={{ background: '#fff', border: '1px solid #e5e5e5', borderRadius: '16px', padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
            <div style={{ marginBottom: '14px' }}>
              <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--ink-3)', marginBottom: '6px' }}>Full name (As on Aadhaar) *</div>
              <input placeholder="Full Name" style={{ width: '100%', padding: '10px 12px', border: '1px solid #d9d9d9', borderRadius: '8px', fontSize: '14px', outline: 'none', color: 'var(--ink)', background: '#fafafa', boxSizing: 'border-box' }} />
            </div>

            <div style={{ marginBottom: '14px', position: 'relative' }}>
              <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--ink-3)', marginBottom: '6px' }}>Select Category *</div>
              <div onClick={() => setCategoryOpen(!categoryOpen)} style={{ width: '100%', padding: '10px 12px', border: '1px solid #d9d9d9', borderRadius: '8px', fontSize: '14px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'var(--ink)', background: '#fafafa', boxSizing: 'border-box' }}>
                {category}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#737373" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
              </div>
              {categoryOpen && (
                <div style={{ position: 'absolute', top: 'calc(100% + 4px)', left: 0, width: '100%', background: '#fff', border: '1px solid #d9d9d9', borderRadius: '8px', zIndex: 10, boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
                  {['General', 'SC', 'ST', 'OBC'].map(c => (
                    <div key={c} onClick={() => { setCategory(c); setCategoryOpen(false); }} style={{ padding: '8px 12px', cursor: 'pointer', fontSize: '14px', color: 'var(--ink)' }}>{c}</div>
                  ))}
                </div>
              )}
              <div style={{ fontSize: '11px', color: 'var(--gray-500)', marginTop: '6px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#737373" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                Select as per your government-issued caste certificate
              </div>
            </div>

            <div style={{ marginBottom: '14px' }}>
              <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--ink-3)', marginBottom: '8px' }}>Select gender *</div>
              <div style={{ display: 'flex', gap: '24px' }}>
                {['Male', 'Female', 'Other'].map(g => (
                  <label key={g} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', cursor: 'pointer', color: 'var(--ink)' }}>
                    <input type="radio" name="gender-bento" checked={gender === g} onChange={() => setGender(g)} style={{ accentColor: '#4a2bc2', width: '16px', height: '16px' }} /> {g}
                  </label>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: '14px' }}>
              <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--ink-3)', marginBottom: '8px' }}>Select domains</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {['Agriculture', 'Horticulture', 'Fisheries', 'AnimalHusbandry'].map(d => (
                  <label key={d} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', cursor: 'pointer', color: 'var(--ink)' }}>
                    <input type="checkbox" checked={domains[d]} onChange={() => setDomains({ ...domains, [d]: !domains[d] })} style={{ accentColor: '#4a2bc2', width: '16px', height: '16px' }} /> {d.replace('AnimalHusbandry', 'Animal Husbandry')}
                  </label>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', fontWeight: 600, color: 'var(--ink-3)', marginBottom: '8px' }}>
                <span>How much %</span>
                <span style={{ color: 'var(--primary-deep)' }}>{range}%</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '11px', color: 'var(--gray-500)', minWidth: '20px' }}>0%</span>
                <input type="range" min="0" max="100" value={range} onChange={e => setRange(e.target.value)} style={{ flex: 1, accentColor: '#4a2bc2' }} />
                <span style={{ fontSize: '11px', color: 'var(--gray-500)', minWidth: '30px', textAlign: 'right' }}>100%</span>
              </div>
            </div>

            <button style={{ width: '100%', background: '#4a2bc2', color: '#fff', border: 'none', borderRadius: '8px', height: '40px', fontWeight: 600, fontSize: '14px', cursor: 'pointer', marginTop: 'auto' }}>Submit Application</button>
          </div>
        </div>

        {/* RIGHT — Phone with date picker (aspect-locked, overflows card right edge) */}
        <div className="bento-fe__right">
          <div className="bento-fe__phone">
          <img className="bento-fe__phone-img" src="assets/images/Form elements phone.png" alt="" draggable="false" />

          {/* Phone screen — positioned as % of phone image, so calendar always fits */}
          <div className="bento-fe__screen" style={{ background: dm.bg }}>
            {/* Status bar */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 22px 6px 22px', fontSize: '12px', fontWeight: 600, color: dm.text }}>
              <span>9:30</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill={dm.text}><path d="M12 4C7 4 2.7 6.7 0 11l12 13L24 11C21.3 6.7 17 4 12 4z" opacity=".3"/><path d="M2 11c2.5-3.7 6.1-6 10-6s7.5 2.3 10 6"/></svg>
            </div>

            {/* Dark mode toggle */}
            <div style={{ padding: '16px 22px 12px 22px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontSize: '14px', color: dm.text, fontWeight: 500 }}>Dark Mode</span>
              <button onClick={() => setDarkMode(!darkMode)} aria-label="Toggle dark mode" style={{ width: '44px', height: '24px', borderRadius: '999px', background: darkMode ? '#a391ff' : '#d9d9d9', position: 'relative', cursor: 'pointer', border: 'none', padding: 0, transition: 'background .2s' }}>
                <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: darkMode ? '#0a0a0a' : '#ffffff', position: 'absolute', top: '3px', left: darkMode ? '23px' : '3px', transition: 'left .2s', boxShadow: '0 1px 2px rgba(0,0,0,0.2)' }}></div>
              </button>
            </div>

            <div style={{ height: '1px', background: dm.border, margin: '0 16px' }}></div>

            {/* Month header */}
            <div style={{ padding: '14px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <button aria-label="prev" style={{ background: 'transparent', border: 'none', color: dm.text, cursor: 'pointer', padding: '4px' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><polyline points="15 18 9 12 15 6"/></svg>
              </button>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: dm.brand, fontWeight: 600, fontSize: '14px' }}>
                <span>April 2026</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
              </div>
              <button aria-label="next" style={{ background: 'transparent', border: 'none', color: dm.text, cursor: 'pointer', padding: '4px' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><polyline points="9 18 15 12 9 6"/></svg>
              </button>
            </div>

            {/* Day labels */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', textAlign: 'center', fontSize: '11px', color: dm.text, fontWeight: 600, padding: '0 14px', marginBottom: '6px' }}>
              {['Mo','Tu','We','Th','Fr','Sa','Su'].map(d => <div key={d}>{d}</div>)}
            </div>

            {/* Calendar grid — covers March 30→April 30→May 3 */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '2px 0', padding: '0 14px', fontSize: '12px', flex: 1 }}>
              {/* prev-month tail: 30, 31 (March) */}
              {[30, 31].map((d, i) => (
                <div key={'pm' + i} style={{ aspectRatio: '1', display: 'flex', alignItems: 'center', justifyContent: 'center', color: dm.textMuted }}>{d}</div>
              ))}
              {/* April 1-30 */}
              {[...Array(30)].map((_, i) => {
                const day = i + 1;
                const inRange = day >= rangeStart && day <= rangeEnd;
                const isStart = day === rangeStart;
                const isEnd = day === rangeEnd;
                const isEdge = isStart || isEnd;

                // edge dots get pill (rounded square), middle gets straight fill
                let bg = 'transparent';
                let color = dm.text;
                let radius = '0';
                let inset = '';
                if (isEdge) {
                  bg = 'transparent';
                  color = dm.text;
                } else if (inRange) {
                  bg = dm.rangeFill;
                  color = dm.rangeText;
                }

                return (
                  <div key={day} style={{ position: 'relative', aspectRatio: '1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {/* range strip behind */}
                    {inRange && (
                      <div style={{
                        position: 'absolute',
                        top: '4px', bottom: '4px',
                        left: isStart ? '50%' : 0,
                        right: isEnd ? '50%' : 0,
                        background: dm.rangeFill,
                        zIndex: 0,
                      }}></div>
                    )}
                    {/* edge highlight pill */}
                    {isEdge && (
                      <div style={{
                        position: 'absolute',
                        top: '4px', bottom: '4px',
                        left: '4px', right: '4px',
                        background: dm.edge,
                        borderRadius: '6px',
                        zIndex: 1,
                      }}></div>
                    )}
                    <span style={{ position: 'relative', zIndex: 2, color: isEdge ? dm.edgeText : color, fontWeight: isEdge ? 600 : 400 }}>{day}</span>
                  </div>
                );
              })}
              {/* next-month head: 1, 2, 3 (May) */}
              {[1, 2, 3].map((d, i) => (
                <div key={'nm' + i} style={{ aspectRatio: '1', display: 'flex', alignItems: 'center', justifyContent: 'center', color: dm.textMuted }}>{d}</div>
              ))}
            </div>

            {/* Footer buttons */}
            <div style={{ display: 'flex', gap: '10px', padding: '12px 18px 22px 18px' }}>
              <button style={{ flex: 1, background: 'transparent', border: `1px solid ${dm.ctrlBorder}`, color: dm.text, borderRadius: '8px', padding: '11px 0', fontWeight: 600, fontSize: '13px', cursor: 'pointer' }}>Cancel</button>
              <button style={{ flex: 1, background: dm.edge, border: 'none', color: dm.edgeText, borderRadius: '8px', padding: '11px 0', fontWeight: 600, fontSize: '13px', cursor: 'pointer' }}>Confirm</button>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BentoNavigation() {
  const [activeTab, setActiveTab] = React.useState('Overview');
  const [page, setPage] = React.useState(1);
  const [activeChips, setActiveChips] = React.useState(['Forms']);
  const toggleChip = (c) => setActiveChips(prev => prev.includes(c) ? prev.filter(x => x !== c) : [...prev, c]);
  return (
    <div className="bento-cell" style={{ gridColumn: 'span 7', background: '#fff7e6', height: '525px', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      <div style={{ padding: '32px 32px 0 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', zIndex: 10 }}>
        <div style={{ fontFamily: 'var(--ux4g-font-family-sans)', fontSize: '32px', fontWeight: 700, color: 'var(--primary-deep)', letterSpacing: '-0.01em' }}>Navigation</div>
        <a href="UX4G Components.html" style={{ border: '1px solid #a391ff', background: 'transparent', color: 'var(--primary-deep)', borderRadius: '999px', padding: '8px 18px', fontSize: '13px', fontWeight: 500, cursor: 'pointer', textDecoration: 'none', display: 'inline-block' }}>Explore components →</a>
      </div>

      <div style={{ flex: 1, padding: '20px 32px 32px 32px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {/* Navbar + Breadcrumb card */}
        <div style={{ background: '#fff', borderRadius: '14px', padding: '14px 18px', boxShadow: '0 1px 2px rgba(0,0,0,0.04)', border: '1px solid #e5e5e5' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '38px', height: '38px', background: '#fff', borderRadius: '50%', border: '1px solid #e5e5e5', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                <svg width="22" height="22" viewBox="0 0 24 24"><circle cx="12" cy="12" r="11" fill="#ff8f1f"/><circle cx="12" cy="12" r="3" fill="#1e3a8a"/></svg>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.2 }}>
                <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--ink)' }}>Title</span>
                <span style={{ fontSize: '11px', color: 'var(--gray-500)' }}>Description</span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="2"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></svg>
              <button style={{ background: '#4a2bc2', color: '#fff', border: 'none', padding: '7px 18px', borderRadius: '999px', fontSize: '13px', fontWeight: 500, cursor: 'pointer' }}>Button</button>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '6px', fontSize: '12px', color: 'var(--gray-500)', alignItems: 'center' }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#737373" strokeWidth="2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
            <span>Home</span> <span style={{ color: 'var(--gray-400)' }}>›</span>
            <span>Components</span> <span style={{ color: 'var(--gray-400)' }}>›</span>
            <span>Navigation</span> <span style={{ color: 'var(--gray-400)' }}>›</span>
            <span style={{ color: 'var(--primary-deep)', fontWeight: 600 }}>Breadcrumb</span>
          </div>
        </div>

        {/* Tabs + Stepper + Pagination card */}
        <div style={{ background: '#fff', borderRadius: '14px', padding: '20px 22px', flex: 1, display: 'flex', flexDirection: 'column', gap: '20px', border: '1px solid #e5e5e5', boxShadow: '0 1px 2px rgba(0,0,0,0.04)' }}>
          {/* Tabs */}
          <div style={{ display: 'flex', gap: '4px', borderBottom: '1px solid #e5e5e5' }}>
            {['Overview','Usage','Specs','Resources'].map(t => (
              <button key={t} onClick={() => setActiveTab(t)} style={{
                background: activeTab === t ? '#dcd4ff' : 'transparent',
                color: activeTab === t ? '#4a2bc2' : '#404040',
                padding: '8px 16px',
                border: 'none',
                borderRadius: '999px',
                fontSize: '13px',
                fontWeight: activeTab === t ? 600 : 500,
                cursor: 'pointer',
                marginBottom: '-1px',
              }}>{t}</button>
            ))}
          </div>

          {/* Stepper */}
          <div style={{ display: 'flex', alignItems: 'center', padding: '0 4px' }}>
            {[
              { num: 1, state: 'done' },
              { num: 2, state: 'current' },
              { num: 3, state: 'pending' },
              { num: 4, state: 'pending' },
            ].map((s, i, arr) => (
              <React.Fragment key={s.num}>
                <div style={{
                  width: 26, height: 26, borderRadius: '50%',
                  background: s.state === 'done' ? '#4a2bc2' : (s.state === 'current' ? '#fff' : '#fff'),
                  border: s.state === 'done' ? 'none' : `2px solid ${s.state === 'current' ? '#4a2bc2' : '#d9d9d9'}`,
                  color: s.state === 'done' ? '#fff' : (s.state === 'current' ? '#4a2bc2' : '#a3a3a3'),
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '11px', fontWeight: 600, flexShrink: 0,
                }}>
                  {s.state === 'done' ? (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                  ) : s.state === 'current' ? (
                    <div style={{ width: 8, height: 8, background: '#4a2bc2', borderRadius: '50%' }}></div>
                  ) : s.num}
                </div>
                {i < arr.length - 1 && (
                  <div style={{ flex: 1, height: 2, background: i === 0 ? '#4a2bc2' : 'transparent', borderTop: i === 0 ? 'none' : '2px dashed #d9d9d9', margin: '0 6px' }}></div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Chip group (filter chips) — 2 explicit rows */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'center' }}>
            {[
              ['All','Forms','Inputs','Feedback'],
              ['Navigation','Overlay','Data','Layout'],
            ].map((row, ri) => (
              <div key={ri} style={{ display: 'flex', gap: 6, justifyContent: 'center', flexWrap: 'nowrap' }}>
                {row.map(c => {
                  const on = activeChips.includes(c);
                  return (
                    <button key={c} onClick={() => toggleChip(c)} style={{
                      display: 'inline-flex', alignItems: 'center', gap: 6,
                      background: on ? '#4a2bc2' : '#fff',
                      color: on ? '#fff' : '#404040',
                      border: on ? '1px solid #4a2bc2' : '1px solid #e5e5e5',
                      borderRadius: 999,
                      padding: '5px 11px 5px ' + (on ? '8px' : '11px'),
                      fontSize: 12, fontWeight: 500, cursor: 'pointer',
                      lineHeight: 1.4, whiteSpace: 'nowrap',
                      transition: 'background .15s, color .15s, border-color .15s',
                    }}>
                      {on && (
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                      )}
                      {c}
                    </button>
                  );
                })}
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', alignItems: 'center', marginTop: 'auto' }}>
            <button onClick={() => setPage(Math.max(1, page - 1))} aria-label="prev" style={{ width: 28, height: 28, borderRadius: '50%', background: '#fff', border: '1px solid #e5e5e5', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="2.4"><polyline points="15 18 9 12 15 6"/></svg>
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              {[1,2,3,4,5,6,7].map(p => (
                <div key={p} onClick={() => setPage(p)} style={{
                  cursor: 'pointer',
                  width: p === page ? 22 : 8,
                  height: 8,
                  borderRadius: p === page ? '4px' : '50%',
                  background: p === page ? '#4a2bc2' : '#d9d9d9',
                  transition: 'all .15s',
                }}></div>
              ))}
            </div>
            <button onClick={() => setPage(Math.min(7, page + 1))} aria-label="next" style={{ width: 28, height: 28, borderRadius: '50%', background: '#fff', border: '1px solid #e5e5e5', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="2.4"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function BentoIndia() {
  return (
    <div className="bento-cell bento-india" style={{ gridColumn: 'span 5', background: 'linear-gradient(135deg, #f2efff 0%, #ffd6e0 60%, #ffe7bf 100%)', height: '525px', position: 'relative', overflow: 'hidden' }}>
      {/* glow circle */}
      <div style={{ position: 'absolute', width: '460px', height: '460px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0) 70%)', top: '15%', right: '-10%', zIndex: 1 }}></div>

      {/* "Built for" — stays in front of the man (z above) */}
      <div className="bento-india__text" style={{ position: 'absolute', top: '80px', left: '32px', zIndex: 3 }}>
        <div style={{ fontSize: '22px', fontWeight: 600, color: 'var(--primary-dark)', letterSpacing: '-0.01em' }}>Built for</div>
      </div>

      {/* "INDIA" — placed BEHIND the man so the right side of the A tucks behind
          him while the rest of the word stays fully legible. z below man. */}
      <div className="bento-india__india" style={{
        position: 'absolute',
        top: '108px',
        left: '24px',
        right: 0,
        zIndex: 1,
        fontFamily: 'var(--ux4g-font-family-sans)',
        fontWeight: 800,
        color: 'var(--primary-deep)',
        lineHeight: 0.92,
        letterSpacing: '-0.04em',
        whiteSpace: 'nowrap',
      }}>INDIA</div>

      <img className="bento-india__man" src="assets/images/Built for india man.png" alt="" draggable="false" />
    </div>
  );
}

function BentoDataDisplay() {
  const [candidates, setCandidates] = React.useState([
    { id: 1, name: 'Arjun Rao', init: 'AR', avatarHue: '#dcd4ff', att: 'Present', dept: 'Active', role: 'Developer', sel: false },
    { id: 2, name: 'Priya Mehta', init: 'PM', avatarHue: '#ffd6e0', att: 'Absent', dept: 'Active', role: 'Designer', sel: false },
    { id: 3, name: 'Suresh Kumar', init: 'SK', avatarHue: '#ffe7bf', att: 'Present', dept: 'Inactive', role: 'Manager', sel: false },
    { id: 4, name: 'Neha Agarwal', init: 'NA', avatarHue: '#d9f7be', att: 'Absent', dept: 'Active', role: 'Analyst', sel: false },
    { id: 5, name: 'Rahul Srivastava', init: 'RS', avatarHue: '#dcd4ff', att: 'Absent', dept: 'Active', role: 'Analyst', sel: false },
  ]);
  const [chip, setChip] = React.useState('Group-A');
  const [selSlot, setSelSlot] = React.useState('12:30 PM');
  const [selDay, setSelDay] = React.useState(23);

  const slots = [
    { t: '9:00 AM', count: 6, status: 'avail' },
    { t: '9:30 AM', count: 7, status: 'avail' },
    { t: '10:00 AM', count: 1, status: 'avail' },
    { t: '10:30 AM', count: 9, status: 'avail' },
    { t: '11:00 AM', count: 0, status: 'closed' },
    { t: '11:30 AM', count: 2, status: 'avail' },
    { t: '12:00 PM', count: 2, status: 'avail' },
    { t: '12:30 PM', count: null, status: 'selected' },
    { t: '1:00 PM', count: 0, status: 'closed' },
    { t: '1:30 PM', count: 7, status: 'avail' },
    { t: '2:00 PM', count: 3, status: 'avail' },
    { t: '2:30 PM', count: 9, status: 'closed' },
  ];

  const calendar = (day) => {
    // Day style: { 9, 21 } public holiday (warning soft, orange), { 4, 5, 8, 11, 12, 18, 19, 25, 26 } weekly off (gray-100), { 23 } selected (purple solid), { 15 } current (purple text dot)
    const ph = [9, 21];
    const wo = [4, 5, 8, 11, 12, 18, 19, 25, 26];
    if (day === selDay) return { bg: '#4a2bc2', color: '#fff', dot: false, ring: false };
    if (day === 15) return { bg: 'transparent', color: 'var(--primary-deep)', dot: true, ring: false };
    if (ph.includes(day)) return { bg: '#fff7e6', color: '#ad4e00', dot: false };
    if (wo.includes(day)) return { bg: '#f5f5f5', color: 'var(--ink)', dot: false };
    return { bg: 'transparent', color: 'var(--ink)', dot: false };
  };

  return (
    <div className="bento-cell" style={{ gridColumn: 'span 12', background: '#f2efff', height: '1116px', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      <div style={{ padding: '32px 32px 0 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', zIndex: 10 }}>
        <div style={{ fontFamily: 'var(--ux4g-font-family-sans)', fontSize: '32px', fontWeight: 700, color: 'var(--primary-deep)', letterSpacing: '-0.01em' }}>Data Display</div>
        <a href="UX4G Components.html" style={{ border: '1px solid #a391ff', background: 'transparent', color: 'var(--primary-deep)', borderRadius: '999px', padding: '8px 18px', fontSize: '13px', fontWeight: 500, cursor: 'pointer', textDecoration: 'none', display: 'inline-block' }}>Explore components →</a>
      </div>

      <div style={{ flex: 1, padding: '24px 32px 32px 32px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {/* TOP ROW — Scholarship card + Big laptop table */}
        <div style={{ display: 'grid', gridTemplateColumns: '380px 1fr', gap: '20px', minHeight: '480px' }}>
          {/* Scholarship card */}
          <div style={{ background: '#fff', borderRadius: '16px', overflow: 'hidden', border: '1px solid #e5e5e5', display: 'flex', flexDirection: 'column', boxShadow: '0 1px 2px rgba(0,0,0,0.04)' }}>
            <div style={{ padding: '12px 12px 0 12px' }}>
              <img src="assets/images/Data display students.png" alt="" draggable="false" style={{ width: '100%', height: '180px', objectFit: 'cover', objectPosition: 'center', borderRadius: '10px' }} />
            </div>
            <div style={{ padding: '16px 18px 18px 18px', display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px' }}>
                <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--ink)', lineHeight: 1.35 }}>Post Graduate Indira Gandhi Scholarship For Single Girl Child</div>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#171717" strokeWidth="2" style={{ flexShrink: 0, marginTop: '2px' }}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </div>
              <div style={{ fontSize: '12px', color: 'var(--gray-500)' }}>Ministry of Education</div>
              <div style={{ fontSize: '13px', color: 'var(--ink-3)', marginTop: '6px', lineHeight: 1.45 }}>A scholarship scheme by the University Grants Commission for Girl students</div>
              <div style={{ display: 'flex', gap: '6px', marginTop: '8px' }}>
                <span style={{ background: '#dcd4ff', color: 'var(--primary-deep)', borderRadius: '4px', padding: '4px 10px', fontSize: '11px', fontWeight: 500 }}>Girl Child</span>
                <span style={{ background: '#dcd4ff', color: 'var(--primary-deep)', borderRadius: '4px', padding: '4px 10px', fontSize: '11px', fontWeight: 500 }}>Scholarship</span>
              </div>
              <div style={{ display: 'flex', gap: '10px', marginTop: 'auto', paddingTop: '16px' }}>
                <button style={{ flex: 1, border: '1.5px solid #4a2bc2', background: 'transparent', color: 'var(--primary-deep)', padding: '10px 0', borderRadius: '8px', fontWeight: 600, fontSize: '13px', cursor: 'pointer' }}>Check eligibility</button>
                <button style={{ flex: 1, border: 'none', background: '#4a2bc2', color: '#fff', padding: '10px 0', borderRadius: '8px', fontWeight: 600, fontSize: '13px', cursor: 'pointer' }}>Apply</button>
              </div>
            </div>
          </div>

          {/* Laptop with table */}
          <div style={{ position: 'relative', background: '#fff', borderRadius: '16px', overflow: 'hidden', border: '1px solid #e5e5e5', padding: '24px 24px 0 24px', display: 'flex', flexDirection: 'column', boxShadow: '0 1px 2px rgba(0,0,0,0.04)' }}>
            {/* Mini app header (like govt navbar) */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', paddingBottom: '14px', borderBottom: '1px solid #e5e5e5', marginBottom: '16px' }}>
              <svg width="22" height="22" viewBox="0 0 24 24"><circle cx="12" cy="12" r="11" fill="#ff8f1f"/><circle cx="12" cy="12" r="3" fill="#1e3a8a"/></svg>
              <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
                <span style={{ fontSize: '11px', color: 'var(--gray-500)' }}>Government of India</span>
                <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--ink)' }}>Ministry of Education</span>
              </div>
              <div style={{ marginLeft: 'auto', display: 'flex', gap: '20px', fontSize: '12px', fontWeight: 500, color: 'var(--ink-3)' }}>
                <span>Schemes</span><span>Candidates</span><span>Reports</span>
              </div>
              <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#dcd4ff' }}></div>
            </div>

            <div style={{ fontSize: '20px', fontWeight: 700, color: 'var(--ink)', marginBottom: '14px' }}>List of Candidates</div>

            {/* Chips */}
            <div style={{ display: 'flex', gap: '8px', marginBottom: '14px', flexWrap: 'wrap' }}>
              {['All', 'Group-A', 'Group-B', 'Group-C', 'Only defaulters'].map(c => (
                <button key={c} onClick={() => setChip(c)} style={{
                  background: c === chip ? '#4a2bc2' : '#fff',
                  color: c === chip ? '#fff' : '#404040',
                  border: c === chip ? 'none' : '1px solid #d9d9d9',
                  padding: '6px 14px',
                  borderRadius: '999px',
                  fontSize: '12px',
                  fontWeight: 500,
                  cursor: 'pointer',
                }}>{c}</button>
              ))}
            </div>

            {/* Table */}
            <div style={{ flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '40px 2fr 1.2fr 1.2fr 1.2fr 1.2fr', gap: '12px', padding: '10px 8px', borderBottom: '1px solid #e5e5e5', fontSize: '12px', fontWeight: 600, color: 'var(--gray-500)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                <div></div><div>Name</div><div>Attendance</div><div>Department</div><div>Role</div><div>Status</div>
              </div>
              {candidates.map((c, i) => (
                <div key={c.id} style={{ display: 'grid', gridTemplateColumns: '40px 2fr 1.2fr 1.2fr 1.2fr 1.2fr', gap: '12px', padding: '12px 8px', borderBottom: i === candidates.length - 1 ? 'none' : '1px solid #f5f5f5', fontSize: '13px', alignItems: 'center', color: 'var(--ink)' }}>
                  <input type="checkbox" checked={c.sel} onChange={() => { const nc = [...candidates]; nc[i].sel = !nc[i].sel; setCandidates(nc); }} style={{ width: '16px', height: '16px', accentColor: '#4a2bc2' }} />
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '28px', height: '28px', background: c.avatarHue, color: 'var(--ink)', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '11px', fontWeight: 600, flexShrink: 0 }}>{c.init}</div>
                    <span>{c.name}</span>
                  </div>
                  <div>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '3px 8px', borderRadius: '4px', background: c.att === 'Present' ? '#ddf8d8' : '#ffecee', color: c.att === 'Present' ? '#00522c' : '#8a1a16', fontSize: '11px', fontWeight: 600 }}>
                      <span style={{ width: 6, height: 6, borderRadius: '50%', background: c.att === 'Present' ? '#128937' : '#db372d' }}></span>
                      {c.att}
                    </span>
                  </div>
                  <div style={{ color: 'var(--ink-3)' }}>{c.dept}</div>
                  <div style={{ color: 'var(--ink-3)' }}>{c.role}</div>
                  <div>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '3px 8px', borderRadius: '4px', background: c.dept === 'Active' ? '#ddf8d8' : '#f5f5f5', color: c.dept === 'Active' ? '#00522c' : '#525252', fontSize: '11px', fontWeight: 600 }}>
                      <span style={{ width: 6, height: 6, borderRadius: '50%', background: c.dept === 'Active' ? '#128937' : '#737373' }}></span>
                      {c.dept}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM ROW — Status pipeline (left) + Time slot compact (right) */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '20px', flex: 1, minHeight: '400px' }}>
          {/* Status pipeline + avatars header */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {/* Avatars + dropdown */}
            <div style={{ background: '#fff', borderRadius: '14px', padding: '14px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid #e5e5e5' }}>
              <div style={{ display: 'flex' }}>
                {['#dcd4ff','#ffd6e0','#ffe7bf','#d9f7be'].map((bg, i) => (
                  <div key={i} style={{ width: 36, height: 36, borderRadius: '50%', background: bg, marginLeft: i === 0 ? 0 : '-10px', border: '2px solid #fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 600, color: 'var(--ink)', zIndex: 4 - i }}>{['AR','PM','SK','NA'][i]}</div>
                ))}
              </div>
              <div style={{ border: '1.5px solid #4a2bc2', padding: '6px 10px', borderRadius: '8px', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '6px', minWidth: '180px' }}>
                <span style={{ background: '#fff', border: '1px solid #d9d9d9', padding: '2px 6px', borderRadius: '4px', display: 'inline-flex', gap: '4px', alignItems: 'center' }}>Present <span style={{ color: 'var(--gray-500)' }}>×</span></span>
                <span style={{ background: '#fff', border: '1px solid #d9d9d9', padding: '2px 6px', borderRadius: '4px', display: 'inline-flex', gap: '4px', alignItems: 'center' }}>Absent <span style={{ color: 'var(--gray-500)' }}>×</span></span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="2" style={{ marginLeft: 'auto' }}><polyline points="6 9 12 15 18 9"/></svg>
              </div>
            </div>

            {/* Pipeline + Income Certificate row */}
            <div style={{ background: '#fff', borderRadius: '14px', padding: '20px', display: 'flex', gap: '20px', border: '1px solid #e5e5e5', flex: 1 }}>
              {/* Vertical stepper */}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {[
                  { label: 'Submitted', state: 'done' },
                  { label: 'Verification', state: 'current' },
                  { label: 'Decision', state: 'pending', num: 4 },
                  { label: 'Issued', state: 'pending', num: 5 },
                ].map((s, i, arr) => (
                  <div key={s.label} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', flex: i === arr.length - 1 ? '0' : '1' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                      <div style={{
                        width: 22, height: 22, borderRadius: '50%',
                        background: s.state === 'done' ? '#128937' : (s.state === 'current' ? '#fff' : '#fff'),
                        border: s.state === 'done' ? 'none' : `2px solid ${s.state === 'current' ? '#4a2bc2' : '#d9d9d9'}`,
                        color: s.state === 'done' ? '#fff' : (s.state === 'current' ? '#4a2bc2' : '#a3a3a3'),
                        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 600,
                      }}>
                        {s.state === 'done' ? <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg> : (s.state === 'current' ? <div style={{ width: 6, height: 6, background: '#4a2bc2', borderRadius: '50%' }}></div> : s.num)}
                      </div>
                      {i < arr.length - 1 && (
                        <div style={{ width: 2, flex: 1, minHeight: '38px', background: i === 0 ? '#128937' : '#e5e5e5' }}></div>
                      )}
                    </div>
                    <div style={{ marginTop: '2px', fontSize: '13px', fontWeight: 600, color: s.state === 'pending' ? '#a3a3a3' : '#171717', paddingBottom: i === arr.length - 1 ? 0 : '16px' }}>{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Detail card */}
              <div style={{ flex: 1, background: '#fafafa', border: '1px solid #e5e5e5', borderRadius: '10px', padding: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                  <div>
                    <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--ink)', marginBottom: '6px' }}>Income Certificate</div>
                    <span style={{ display: 'inline-block', background: '#fff7e6', color: '#ad4e00', padding: '2px 8px', borderRadius: '4px', fontSize: '11px', fontWeight: 500 }}>Under review</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <button style={{ background: '#fff', border: '1px solid #d9d9d9', padding: '4px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: 500, cursor: 'pointer', color: 'var(--ink)' }}>Track</button>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px 16px', fontSize: '12px', marginTop: '14px' }}>
                  {[
                    ['Reference Number', 'INC-2026-MH-04127'],
                    ['Last Updated Date', '10 Apr 2026'],
                    ['Submitted Date', '1 Apr 2026'],
                    ['Assigned Officer', 'Rahul Sharma'],
                    ['Department', 'Revenue Department'],
                    ['Documents', 'ID Proof, Address Proof'],
                  ].map(([k, v]) => (
                    <div key={k}>
                      <div style={{ color: 'var(--gray-500)', marginBottom: '2px' }}>{k}</div>
                      <div style={{ color: 'var(--ink)', fontWeight: 500 }}>{v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Time slot compact: calendar + time slots */}
          <div style={{ background: '#fff', borderRadius: '14px', padding: '20px', border: '1px solid #e5e5e5', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            {/* Calendar */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                <button aria-label="prev" style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: 0 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#171717" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>
                </button>
                <div style={{ color: 'var(--primary-deep)', fontWeight: 600, fontSize: '15px' }}>April 2026</div>
                <button aria-label="next" style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: 0 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#171717" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
                </button>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', textAlign: 'center', fontSize: '12px', marginBottom: '6px', color: 'var(--ink)', fontWeight: 700, borderTop: '1px solid #e5e5e5', borderBottom: '1px solid #e5e5e5', padding: '8px 0' }}>
                {['Mo','Tu','We','Th','Fr','Sa','Su'].map(d => <div key={d}>{d}</div>)}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', textAlign: 'center', fontSize: '13px', flex: 1, alignContent: 'start' }}>
                {[29, 30].map((d, i) => (
                  <div key={'p' + i} style={{ aspectRatio: '1', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gray-300)' }}>{d}</div>
                ))}
                {[...Array(30)].map((_, i) => {
                  const day = i + 1;
                  const c = calendar(day);
                  return (
                    <div key={day} onClick={() => setSelDay(day)} style={{ aspectRatio: '1', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', cursor: 'pointer' }}>
                      <div style={{ width: '32px', height: '32px', borderRadius: '6px', background: c.bg, color: c.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: day === selDay ? 700 : 500 }}>
                        {day}
                      </div>
                      {c.dot && <div style={{ position: 'absolute', bottom: '4px', width: 4, height: 4, borderRadius: '50%', background: '#4a2bc2' }}></div>}
                    </div>
                  );
                })}
                {[1, 2, 3].map((d, i) => (
                  <div key={'n' + i} style={{ aspectRatio: '1', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gray-300)' }}>{d}</div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '14px', fontSize: '11px', color: 'var(--ink-3)', marginTop: '10px', borderTop: '1px solid #e5e5e5', paddingTop: '10px' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><span style={{ width: 10, height: 10, background: '#f5f5f5', borderRadius: '2px' }}></span>No slots</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><span style={{ width: 10, height: 10, background: '#fff7e6', borderRadius: '2px' }}></span>Public holiday</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><span style={{ width: 10, height: 10, background: '#f5f5f5', borderRadius: '2px' }}></span>Weekly off</span>
              </div>
            </div>

            {/* Time slots */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ color: 'var(--primary-deep)', fontWeight: 700, fontSize: '14px', marginBottom: '12px' }}>23rd April 2026</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', flex: 1, alignContent: 'start' }}>
                {slots.map((s, i) => {
                  const isSel = s.t === selSlot;
                  const isClosed = s.status === 'closed';
                  const dotColor = s.count <= 2 ? '#fa8c16' : (s.count >= 6 ? '#128937' : '#ff8f1f');
                  return (
                    <button key={s.t} onClick={() => !isClosed && setSelSlot(s.t)} disabled={isClosed} style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      padding: '8px 12px',
                      borderRadius: '6px',
                      border: isSel ? '1.5px solid #4a2bc2' : '1px solid transparent',
                      background: isSel ? '#dcd4ff' : (isClosed ? 'transparent' : '#fff'),
                      color: isClosed ? '#a3a3a3' : '#171717',
                      fontSize: '12px',
                      fontWeight: 500,
                      cursor: isClosed ? 'not-allowed' : 'pointer',
                      textDecoration: isClosed ? 'line-through' : 'none',
                    }}>
                      <span>{s.t}</span>
                      {isSel ? (
                        <span style={{ width: 18, height: 18, borderRadius: '50%', background: '#4a2bc2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                        </span>
                      ) : isClosed ? (
                        <span style={{ width: 18, height: 18, borderRadius: '50%', background: '#e5e5e5', color: 'var(--gray-500)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 700 }}>0</span>
                      ) : (
                        <span style={{ width: 18, height: 18, borderRadius: '50%', background: dotColor, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 700 }}>{s.count}</span>
                      )}
                    </button>
                  );
                })}
              </div>
              <div style={{ display: 'flex', gap: '10px', marginTop: '14px' }}>
                <button style={{ flex: 1, background: 'transparent', border: '1px solid #d9d9d9', color: 'var(--ink)', borderRadius: '8px', padding: '11px 0', fontWeight: 600, fontSize: '13px', cursor: 'pointer' }}>Cancel</button>
                <button style={{ flex: 1, background: '#4a2bc2', border: 'none', color: '#fff', borderRadius: '8px', padding: '11px 0', fontWeight: 600, fontSize: '13px', cursor: 'pointer' }}>Confirm</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BentoAlertsFeedback() {
  const [rating, setRating] = React.useState(3); // 0..4 — Good = 3
  const [feedback, setFeedback] = React.useState('');
  const tags = [
    { l: 'Neutral', bg: '#171717', color: '#fff', icon: 'box' },
    { l: 'Brand', bg: '#4a2bc2', color: '#fff', icon: 'star' },
    { l: 'Success', bg: '#128937', color: '#fff', icon: 'check' },
    { l: 'Warning', bg: '#fa8c16', color: '#fff', icon: 'alert' },
    { l: 'Error', bg: '#db372d', color: '#fff', icon: 'x' },
    { l: 'Transport', bg: '#13c2c2', color: '#fff', icon: 'truck' },
  ];

  const emojis = [
    { face: '☹️', color: 'var(--gray-500)' },
    { face: '🙁', color: 'var(--gray-500)' },
    { face: '😐', color: 'var(--gray-500)' },
    { face: '🙂', color: 'var(--success)' },
    { face: '🙂', color: 'var(--gray-500)' },
  ];

  return (
    <div className="bento-cell" style={{ gridColumn: 'span 8', background: '#fff7e6', height: '545px', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      <div style={{ padding: '32px 32px 0 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', zIndex: 10 }}>
        <div style={{ fontFamily: 'var(--ux4g-font-family-sans)', fontSize: '32px', fontWeight: 700, color: 'var(--primary-deep)', letterSpacing: '-0.01em' }}>Alerts & Feedback</div>
        <a href="UX4G Components.html" style={{ border: '1px solid #a391ff', background: 'transparent', color: 'var(--primary-deep)', borderRadius: '999px', padding: '8px 18px', fontSize: '13px', fontWeight: 500, cursor: 'pointer', textDecoration: 'none', display: 'inline-block' }}>Explore components →</a>
      </div>

      <div style={{ flex: 1, padding: '20px 32px 32px 32px', display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '20px' }}>
        {/* LEFT — Browser/laptop with context alert */}
        <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', background: 'linear-gradient(135deg, #f2efff 0%, #ffe7bf 100%)', border: '1px solid #e5e5e5', display: 'flex', flexDirection: 'column' }}>
          {/* Soft circle behind */}
          <div style={{ position: 'absolute', width: '380px', height: '380px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(163,145,255,0.18) 0%, transparent 70%)', top: '-100px', right: '-80px', zIndex: 1 }}></div>

          {/* Browser toolbar */}
          <div style={{ height: '34px', background: '#fff', borderBottom: '1px solid #e5e5e5', display: 'flex', alignItems: 'center', padding: '0 16px', gap: '10px', position: 'relative', zIndex: 2 }}>
            <div style={{ display: 'flex', gap: '6px' }}>
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57' }}></span>
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#febc2e' }}></span>
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#28c840' }}></span>
            </div>
            <div style={{ flex: 1, background: '#f5f5f5', borderRadius: '6px', height: '20px', display: 'flex', alignItems: 'center', padding: '0 10px', fontSize: '11px', color: 'var(--gray-400)', maxWidth: '300px', margin: '0 auto' }}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#a3a3a3" strokeWidth="2"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15A9 9 0 1 1 5.64 5.64L23 22"/></svg>
            </div>
            <div style={{ display: 'flex', gap: '8px', color: 'var(--gray-400)' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            </div>
          </div>

          {/* Tags row floating */}
          <div style={{ position: 'relative', zIndex: 3, padding: '16px 18px 0 18px', display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
            {tags.map(t => (
              <span key={t.l} style={{
                display: 'inline-flex', alignItems: 'center', gap: '5px',
                padding: '4px 10px',
                background: t.bg,
                color: t.color,
                borderRadius: '4px',
                fontSize: '11px',
                fontWeight: 500,
              }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: t.color, opacity: 0.9 }}></span>
                {t.l}
              </span>
            ))}
          </div>

          {/* Context alert anchored to bottom-left */}
          <div style={{ position: 'absolute', left: '20px', right: '20px', bottom: '20px', background: '#fff', borderRadius: '12px', padding: '16px 18px', boxShadow: '0 8px 24px rgba(0,0,0,0.08)', zIndex: 4, border: '1px solid #e5e5e5' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 700, fontSize: '14px', color: 'var(--ink)' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#fa8c16"><path d="M12 2 1 21h22L12 2z" /><line x1="12" y1="9" x2="12" y2="13" stroke="#fff" strokeWidth="2"/><circle cx="12" cy="17" r="1" fill="#fff"/></svg>
                Aadhaar Verification Pending
              </div>
              <button aria-label="close" style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--ink)', padding: 0, lineHeight: 0 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>
            </div>
            <div style={{ fontSize: '13px', color: 'var(--ink-3)', marginBottom: '14px', lineHeight: 1.5 }}>Your Aadhaar is not yet linked to your account. Link it now to access government services easily.</div>
            <div style={{ width: '100%', height: '6px', background: '#f5f5f5', borderRadius: '3px', marginBottom: '14px', overflow: 'hidden' }}>
              <div style={{ width: '32%', height: '100%', background: '#4a2bc2', borderRadius: '3px' }}></div>
            </div>
            <div style={{ display: 'flex', gap: '20px', fontSize: '13px', fontWeight: 600, color: 'var(--primary-deep)' }}>
              <span style={{ cursor: 'pointer' }}>Link Aadhaar</span>
              <span style={{ cursor: 'pointer' }}>Remind Later</span>
            </div>
          </div>
        </div>

        {/* RIGHT — Feedback card */}
        <div style={{ background: '#fff', borderRadius: '16px', padding: '22px', border: '1px solid #e5e5e5', display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: '17px', fontWeight: 700, marginBottom: '16px', color: 'var(--ink)', lineHeight: 1.3 }}>How do you feel about this service?</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: '6px', marginBottom: '6px' }}>
            {emojis.map((em, i) => {
              const selected = rating === i;
              return (
                <button key={i} onClick={() => setRating(i)} style={{
                  width: '44px', height: '44px',
                  borderRadius: '8px',
                  border: selected ? '1.5px solid #128937' : '1px solid #e5e5e5',
                  background: selected ? '#f2fcef' : '#fafafa',
                  display: 'flex', justifyContent: 'center', alignItems: 'center',
                  fontSize: '22px',
                  cursor: 'pointer',
                  filter: selected ? 'none' : 'grayscale(1)',
                  opacity: selected ? 1 : 0.85,
                  padding: 0,
                }}>
                  {em.face}
                </button>
              );
            })}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'var(--gray-500)', marginBottom: '18px', padding: '0 8px' }}>
            <span>← Bad</span><span style={{ marginRight: '20px' }}>Good →</span>
          </div>
          <div style={{ position: 'relative', marginBottom: '16px' }}>
            <textarea
              placeholder="Please tell us how can we improve"
              value={feedback}
              onChange={e => setFeedback(e.target.value)}
              maxLength={200}
              style={{
                width: '100%', height: '92px',
                border: '1px solid #d9d9d9',
                borderRadius: '8px',
                padding: '12px 14px',
                fontSize: '13px',
                resize: 'none',
                outline: 'none',
                color: 'var(--ink)',
                background: '#fafafa',
                fontFamily: 'inherit',
                boxSizing: 'border-box',
              }}
            />
            <div style={{ position: 'absolute', bottom: '10px', right: '14px', fontSize: '11px', color: 'var(--gray-500)' }}>{feedback.length}/200</div>
          </div>
          <button style={{ width: '100%', background: '#4a2bc2', color: '#fff', border: 'none', borderRadius: '8px', height: '42px', fontWeight: 600, fontSize: '14px', cursor: 'pointer', marginTop: 'auto' }}>Submit</button>
        </div>
      </div>
    </div>
  );
}

function Bento80PlusComponents() {
  return (
    <div className="bento-cell bento-80plus" style={{
      gridColumn: 'span 4',
      height: '545px',
      position: 'relative',
      padding: '36px 32px',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      background: 'radial-gradient(120% 90% at 0% 0%, #6B4DEB 0%, #4A2BC2 45%, #2E1796 100%)',
      color: '#fff',
    }}>
      {/* Geometric layer — soft radial highlights + a faint primitive grid + a rotated outlined chip */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage:
          'radial-gradient(60% 60% at 100% 100%, rgba(255,255,255,0.18) 0%, transparent 60%),' +
          'radial-gradient(50% 50% at 100% 0%, rgba(168,139,255,0.30) 0%, transparent 60%)',
      }}/>
      <svg aria-hidden="true" viewBox="0 0 400 545" preserveAspectRatio="xMidYMid slice"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', opacity: 0.75 }}>
        <defs>
          <pattern id="b80grid" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M 32 0 L 0 0 0 32" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
          </pattern>
          <linearGradient id="b80fade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#000" stopOpacity="0"/>
            <stop offset="100%" stopColor="#000" stopOpacity="1"/>
          </linearGradient>
          <mask id="b80mask"><rect width="100%" height="100%" fill="url(#b80fade)"/></mask>
        </defs>
        <rect width="100%" height="100%" fill="url(#b80grid)" mask="url(#b80mask)"/>
        {/* Concentric arc rings — echoes the "many components, one system" idea */}
        <g transform="translate(360 70)" fill="none" stroke="rgba(255,255,255,0.16)" strokeWidth="1.2">
          <circle r="36"/><circle r="60"/><circle r="86"/><circle r="118"/>
        </g>
        {/* Floating outlined chip */}
        <g transform="translate(220 360) rotate(-12)" fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="1.2">
          <rect x="0" y="0" width="148" height="46" rx="10"/>
          <circle cx="22" cy="23" r="6"/>
          <line x1="42" y1="18" x2="120" y2="18"/>
          <line x1="42" y1="28" x2="100" y2="28"/>
        </g>
        {/* Plus marks scattered like a sticker sheet */}
        <g stroke="rgba(255,255,255,0.22)" strokeWidth="1.2" strokeLinecap="round">
          <path d="M 60 110 v 10 M 55 115 h 10"/>
          <path d="M 320 200 v 14 M 313 207 h 14"/>
          <path d="M 110 420 v 10 M 105 425 h 10"/>
          <path d="M 300 480 v 12 M 294 486 h 12"/>
        </g>
      </svg>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ fontFamily: 'var(--ux4g-font-family-sans)', fontSize: 92, fontWeight: 800, lineHeight: 0.95, letterSpacing: '-0.045em' }}>50<span style={{ letterSpacing: '-0.02em' }}>+</span></div>
        <div style={{ fontFamily: 'var(--ux4g-font-family-sans)', fontSize: 32, fontWeight: 600, lineHeight: 1.05, marginTop: 4, letterSpacing: '-0.02em' }}>Production components</div>
        <div style={{ fontSize: 14.5, color: 'rgba(255,255,255,0.78)', marginTop: 16, lineHeight: 1.55, maxWidth: 280 }}>
          Tailored to the needs of Indian government services — accessible, multilingual, RTL-safe out of the box.
        </div>
      </div>

      <a href="UX4G Components.html" style={{
        position: 'relative', zIndex: 1, marginTop: 'auto',
        background: '#fff', color: 'var(--primary-deep)', border: 'none',
        borderRadius: 999, padding: '12px 22px',
        fontWeight: 600, fontSize: 14, cursor: 'pointer',
        textDecoration: 'none', alignSelf: 'flex-start',
        display: 'inline-flex', alignItems: 'center', gap: 8,
        boxShadow: '0 8px 24px -8px rgba(0,0,0,0.35)',
      }}>
        Explore
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4a2bc2" strokeWidth="2.4"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
      </a>
    </div>
  );
}

function BentoGridSection({ onStub }) {
  return (
    <section className="showcase">
      {/* Brand-tint wash that sits behind the grid pattern. The .showcase::after
          pseudo-element paints the actual grid lines on top of this. */}
      <div className="showcase-bg-wash" aria-hidden="true"></div>
      <div className="container">
        <div className="showcase-head">
          <div>
            <h2 className="ux4g-display-m-default">Everything you need to build for India</h2>
          </div>
        </div>

        <div className="bento-grid">
          <BentoFormElements />
          <BentoNavigation />
          <BentoIndia />
          <BentoDataDisplay />
          <BentoAlertsFeedback />
          <Bento80PlusComponents />
        </div>

      </div>
    </section>
  );
}

/* ───────────────── Section: patterns ───────────────── */
function PatternsSection({ onStub }) {
  const [active, setActive] = React.useState(0);

  /* ───────── Snippet library — small mock screens used in card marquees ───────── */
  // Identity & Access
  const S_SignIn = () => (
    <div className="snip">
      <div className="snip__head">Sign in</div>
      <div className="snip__label">Aadhaar number</div>
      <div className="snip__field">●●●●  ●●●●  ●●●●</div>
      <button className="snip__btn snip__btn--primary" tabIndex={-1}>Send OTP <span aria-hidden="true">→</span></button>
    </div>
  );
  const S_Otp = () => (
    <div className="snip">
      <div className="snip__head">OTP verification</div>
      <div className="snip__otp">
        <div className="snip__otp-cell snip__otp-cell--filled">6</div>
        <div className="snip__otp-cell snip__otp-cell--filled">2</div>
        <div className="snip__otp-cell snip__otp-cell--filled">4</div>
        <div className="snip__otp-cell snip__otp-cell--filled">8</div>
        <div className="snip__otp-cell snip__otp-cell--active"></div>
        <div className="snip__otp-cell"></div>
      </div>
      <div className="snip__label snip__label--muted">Resend in 0:28</div>
    </div>
  );
  const S_Forgot = () => (
    <div className="snip">
      <div className="snip__head">Reset password</div>
      <div className="snip__label">Registered mobile</div>
      <div className="snip__field">+91 98•••••••••</div>
      <button className="snip__btn snip__btn--primary" tabIndex={-1}>Send reset link</button>
    </div>
  );
  const S_SignUp = () => (
    <div className="snip">
      <div className="snip__head">Create account</div>
      <div className="snip__label">Mobile number</div>
      <div className="snip__row">
        <div className="snip__field snip__field--cc">+91</div>
        <div className="snip__field snip__field--grow">98•••••••••</div>
      </div>
      <button className="snip__btn snip__btn--primary" tabIndex={-1}>Continue</button>
    </div>
  );
  const S_Session = () => (
    <div className="snip">
      <div className="snip__head snip__head--warning"><span className="snip__head-dot snip__head-dot--warning"></span>Session expiring</div>
      <div className="snip__countdown">00:45</div>
      <div className="snip__row">
        <button className="snip__btn snip__btn--primary" tabIndex={-1}>Stay signed in</button>
        <button className="snip__btn snip__btn--ghost" tabIndex={-1}>Sign out</button>
      </div>
    </div>
  );
  const S_Lockout = () => (
    <div className="snip">
      <div className="snip__head snip__head--danger"><span className="snip__head-dot snip__head-dot--danger"></span>Account locked</div>
      <div className="snip__label">3 of 3 attempts used</div>
      <div className="snip__countdown snip__countdown--danger">5:00</div>
      <div className="snip__bar"><div className="snip__bar-fill"></div></div>
    </div>
  );

  // Consent & Declaration
  const S_Dpdp = () => (
    <div className="snip">
      <div className="snip__head">DPDP · Required</div>
      <div className="snip__label">Your Data, Your Control</div>
      <div className="snip__cb"><span className="snip__cb-box snip__cb-box--checked">✓</span><span className="snip__cb-text">Aadhaar — Required</span></div>
      <div className="snip__cb"><span className="snip__cb-box"></span><span className="snip__cb-text">Email — Optional</span></div>
      <button className="snip__btn snip__btn--primary" tabIndex={-1}>Proceed</button>
    </div>
  );
  const S_Sharing = () => (
    <div className="snip">
      <div className="snip__head">Data sharing</div>
      <div className="snip__list-row"><span className="snip__pill snip__pill--danger">Required</span><span className="snip__list-text">Bank of India</span></div>
      <div className="snip__list-row"><span className="snip__pill snip__pill--danger">Required</span><span className="snip__list-text">Payment Corp</span></div>
      <div className="snip__list-row"><span className="snip__pill">Optional</span><span className="snip__list-text">SMS Gateway</span></div>
    </div>
  );
  const S_Declaration = () => (
    <div className="snip">
      <div className="snip__head">Declaration</div>
      <div className="snip__body">I solemnly declare that the information provided is true to the best of my knowledge…</div>
      <div className="snip__alert snip__alert--warn">⚠ Section 193 IPC · false info is punishable</div>
    </div>
  );
  const S_Consented = () => (
    <div className="snip">
      <div className="snip__head snip__head--success"><span className="snip__head-dot snip__head-dot--success"></span>Consented</div>
      <div className="snip__label">10 Apr 2026 · Policy v2.1</div>
      <button className="snip__btn snip__btn--ghost" tabIndex={-1}>Withdraw consent</button>
    </div>
  );

  // Application & Submission
  const S_Stepper = () => (
    <div className="snip">
      <div className="snip__head">Step 3 of 5</div>
      <div className="snip__label">Documents</div>
      <div className="snip__progress"><div className="snip__progress-fill" style={{ width: "60%" }}></div></div>
      <div className="snip__label snip__label--muted">About 6 min remaining</div>
    </div>
  );
  const S_DocList = () => (
    <div className="snip">
      <div className="snip__head">Required documents</div>
      <div className="snip__list-row"><span className="snip__check snip__check--ok">✓</span><span className="snip__list-text">Aadhaar Card</span></div>
      <div className="snip__list-row"><span className="snip__check snip__check--ok">✓</span><span className="snip__list-text">Income proof</span></div>
      <div className="snip__list-row"><span className="snip__check snip__check--warn">!</span><span className="snip__list-text">Residence proof</span></div>
    </div>
  );
  const S_Eligibility = () => (
    <div className="snip">
      <div className="snip__head">Question 3 of 5</div>
      <div className="snip__progress"><div className="snip__progress-fill" style={{ width: "60%" }}></div></div>
      <div className="snip__label">Annual household income?</div>
      <div className="snip__row">
        <span className="snip__radio">○ Below ₹1L</span>
        <span className="snip__radio snip__radio--active">● ₹1L–2L</span>
      </div>
    </div>
  );
  const S_Submitted = () => (
    <div className="snip">
      <div className="snip__head snip__head--success"><span className="snip__head-dot snip__head-dot--success"></span>Submitted</div>
      <div className="snip__label">Reference</div>
      <div className="snip__field snip__field--mono">INC-2026-MH-04127</div>
      <button className="snip__btn snip__btn--primary" tabIndex={-1}>Track application</button>
    </div>
  );
  const S_DraftBanner = () => (
    <div className="snip">
      <div className="snip__alert snip__alert--warn">Last saved 10 Apr · Step 3 of 5</div>
      <button className="snip__btn snip__btn--primary" tabIndex={-1}>Resume application</button>
      <button className="snip__btn snip__btn--ghost" tabIndex={-1}>Start fresh</button>
    </div>
  );

  // Status & Tracking
  const S_StatusReview = () => (
    <div className="snip">
      <div className="snip__head snip__head--warning"><span className="snip__head-dot snip__head-dot--warning"></span>Under Review</div>
      <div className="snip__label">SLA · 8 days remaining</div>
      <div className="snip__progress"><div className="snip__progress-fill snip__progress-fill--warn" style={{ width: "72%" }}></div></div>
    </div>
  );
  const S_ActionNeeded = () => (
    <div className="snip snip--accent-danger">
      <div className="snip__head snip__head--danger"><span className="snip__head-dot snip__head-dot--danger"></span>Action Required</div>
      <div className="snip__label">Upload income proof by 15 Apr</div>
      <button className="snip__btn snip__btn--danger" tabIndex={-1}>Upload now</button>
    </div>
  );
  const S_Timeline = () => (
    <div className="snip">
      <div className="snip__head">Application timeline</div>
      <div className="snip__tl-row"><span className="snip__tl-dot snip__tl-dot--ok">✓</span><span className="snip__list-text">Submitted</span></div>
      <div className="snip__tl-row"><span className="snip__tl-dot snip__tl-dot--ok">✓</span><span className="snip__list-text">Verified</span></div>
      <div className="snip__tl-row"><span className="snip__tl-dot snip__tl-dot--active">●</span><span className="snip__list-text">Under Review</span></div>
    </div>
  );
  const S_Approved = () => (
    <div className="snip">
      <div className="snip__head snip__head--success"><span className="snip__head-dot snip__head-dot--success"></span>Approved</div>
      <div className="snip__label">Issuing in 2–3 days</div>
      <button className="snip__btn snip__btn--primary" tabIndex={-1}>Download certificate</button>
    </div>
  );

  // Payment & Transactions
  const S_FeeTable = () => (
    <div className="snip">
      <div className="snip__head">Payment summary</div>
      <div className="snip__kv"><span>App fee</span><span>₹30.00</span></div>
      <div className="snip__kv"><span>GST 18%</span><span>₹6.30</span></div>
      <div className="snip__kv snip__kv--total"><span>Total</span><span>₹41.30</span></div>
    </div>
  );
  const S_Method = () => (
    <div className="snip">
      <div className="snip__head">Choose method</div>
      <div className="snip__row snip__row--wrap">
        <span className="snip__chip snip__chip--active">UPI</span>
        <span className="snip__chip">Net Banking</span>
      </div>
      <div className="snip__row snip__row--wrap">
        <span className="snip__chip">Card</span>
        <span className="snip__chip">CSC</span>
      </div>
      <div className="snip__field">name@upi</div>
    </div>
  );
  const S_Paid = () => (
    <div className="snip">
      <div className="snip__head snip__head--success"><span className="snip__head-dot snip__head-dot--success"></span>Payment Successful</div>
      <div className="snip__label">₹41.30 paid via UPI</div>
      <div className="snip__field snip__field--mono">PG2026MH1234567</div>
    </div>
  );
  const S_Waiver = () => (
    <div className="snip">
      <div className="snip__alert snip__alert--success">Application fee waived for SC/ST · ₹30 waived</div>
      <div className="snip__kv snip__kv--total"><span>Total</span><span>₹0.00</span></div>
      <button className="snip__btn snip__btn--primary" tabIndex={-1}>Proceed without payment</button>
    </div>
  );

  // Search & Discovery
  const S_SearchBar = () => (
    <div className="snip">
      <div className="snip__head">Find a service</div>
      <div className="snip__field">🔍 Search 3,000+ services</div>
      <div className="snip__row snip__row--wrap">
        <span className="snip__chip">Health</span>
        <span className="snip__chip">Land</span>
        <span className="snip__chip">Welfare</span>
      </div>
    </div>
  );
  const S_Result = () => (
    <div className="snip">
      <div className="snip__head">7 results for "income"</div>
      <div className="snip__label">Income Certificate</div>
      <div className="snip__label snip__label--muted">Revenue · ₹30 · 15 days</div>
      <button className="snip__btn snip__btn--primary" tabIndex={-1}>Apply →</button>
    </div>
  );
  const S_Categories = () => (
    <div className="snip">
      <div className="snip__head">Browse by ministry</div>
      <div className="snip__row snip__row--wrap">
        <span className="snip__chip">Education</span>
        <span className="snip__chip">Transport</span>
      </div>
      <div className="snip__row snip__row--wrap">
        <span className="snip__chip">Finance</span>
        <span className="snip__chip">Utilities</span>
      </div>
    </div>
  );
  const S_Booking = () => (
    <div className="snip">
      <div className="snip__head">Mon 14 Apr · slots</div>
      <div className="snip__row snip__row--wrap">
        <span className="snip__chip">10:00</span>
        <span className="snip__chip snip__chip--active">● 11:00</span>
      </div>
      <div className="snip__row snip__row--wrap">
        <span className="snip__chip snip__chip--warn">14:00 · 1 left</span>
      </div>
    </div>
  );

  // Dashboard
  const S_Greeting = () => (
    <div className="snip">
      <div className="snip__label snip__label--muted">Good morning</div>
      <div className="snip__head">Ramesh Kumar</div>
      <div className="snip__row snip__row--wrap">
        <span className="snip__chip">Active 2</span>
        <span className="snip__chip snip__chip--success">Done 5</span>
      </div>
    </div>
  );
  const S_AppCard = () => (
    <div className="snip snip--accent-danger">
      <div className="snip__head snip__head--danger"><span className="snip__head-dot snip__head-dot--danger"></span>Action Needed</div>
      <div className="snip__label">Income Certificate</div>
      <div className="snip__label snip__label--muted">Upload income proof by 15 Apr</div>
      <button className="snip__btn snip__btn--danger" tabIndex={-1}>Upload now</button>
    </div>
  );
  const S_Tasks = () => (
    <div className="snip">
      <div className="snip__head">Pending tasks · 3</div>
      <div className="snip__list-row"><span className="snip__check snip__check--danger">!</span><span className="snip__list-text">Upload income proof</span></div>
      <div className="snip__list-row"><span className="snip__check snip__check--warn">!</span><span className="snip__list-text">Pay fee · ₹50</span></div>
      <div className="snip__list-row"><span className="snip__check">•</span><span className="snip__list-text">Schedule inspection</span></div>
    </div>
  );
  const S_Profile = () => (
    <div className="snip">
      <div className="snip__head">Your profile</div>
      <div className="snip__list-row"><span className="snip__pill snip__pill--purple">Aadhaar</span><span className="snip__list-text">Ramesh Kumar</span></div>
      <div className="snip__list-row"><span className="snip__pill snip__pill--success">Verified</span><span className="snip__list-text">+91 ••••• 43210</span></div>
    </div>
  );

  // Notifications
  const S_NotifList = () => (
    <div className="snip">
      <div className="snip__head">Notifications · 3 new</div>
      <div className="snip__alert snip__alert--error">● Action required · 15 Apr</div>
      <div className="snip__list-row"><span className="snip__tl-dot snip__tl-dot--active">●</span><span className="snip__list-text">Status update · Ration</span></div>
    </div>
  );
  const S_Sms = () => (
    <div className="snip">
      <div className="snip__head">📲 SMS</div>
      <div className="snip__body">Your Income Certificate INC-2026-MH-04127 is approved. Download: bit.ly/cert</div>
    </div>
  );
  const S_Live = () => (
    <div className="snip">
      <div className="snip__head snip__head--success"><span className="snip__head-dot snip__head-dot--success"></span>LIVE</div>
      <div className="snip__label">Real-time connection</div>
      <div className="snip__label snip__label--muted">Updates appear instantly</div>
    </div>
  );
  const S_Reminder = () => (
    <div className="snip">
      <div className="snip__alert snip__alert--warn">Your Income Certificate draft expires in 5 days (16 Apr)</div>
      <button className="snip__btn snip__btn--primary" tabIndex={-1}>Resume now</button>
    </div>
  );

  // Feedback & Communication
  const S_Rating = () => (
    <div className="snip">
      <div className="snip__head">How was your experience?</div>
      <div className="snip__stars"><span>★</span><span>★</span><span>★</span><span>★</span><span className="snip__stars--empty">★</span></div>
      <div className="snip__label snip__label--muted">Tap to rate</div>
    </div>
  );
  const S_Help = () => (
    <div className="snip">
      <div className="snip__head">Help Centre</div>
      <div className="snip__field">🔍 Search help articles</div>
      <div className="snip__row">
        <span className="snip__chip snip__chip--success">● Chat</span>
        <span className="snip__chip">📞 Phone</span>
      </div>
    </div>
  );
  const S_Officer = () => (
    <div className="snip snip--accent-amber">
      <div className="snip__head snip__head--warning">Note from Revenue Inspector</div>
      <div className="snip__label snip__label--muted">12 Apr 2026 · 11:34 AM</div>
      <div className="snip__body">Please resubmit the income proof with a clearer scan.</div>
    </div>
  );
  const S_Language = () => (
    <div className="snip">
      <div className="snip__head">Choose your language</div>
      <div className="snip__row snip__row--wrap">
        <span className="snip__chip snip__chip--active">EN</span>
        <span className="snip__chip">हिंदी</span>
      </div>
      <div className="snip__row snip__row--wrap">
        <span className="snip__chip">मराठी</span>
        <span className="snip__chip">தமிழ்</span>
      </div>
      <div className="snip__label snip__label--muted">22 scheduled languages</div>
    </div>
  );

  /* ───────── Category list ───────── */
  const CATEGORIES = [
    {
      name: "Identity & Access",
      desc: "Sign-in, account creation, and session safety — the everyday entry points to a government service, designed once and reused everywhere.",
      href: "UX4G Identity %26 Access.html",
      tone: "primary",
      colA: [S_SignIn, S_Otp, S_Forgot],
      colB: [S_SignUp, S_Session, S_Lockout],
    },
    {
      name: "Consent & Declaration",
      desc: "DPDP-compliant consent flows — purpose-specific, granular, and withdrawable — plus the declaration step that closes every application.",
      href: "UX4G Consent.html",
      tone: "primary",
      colA: [S_Dpdp, S_Declaration, S_Consented],
      colB: [S_Sharing, S_Consented, S_Declaration],
    },
    {
      name: "Application & Submission",
      desc: "Multi-step forms, document upload via DigiLocker, save-and-resume drafts, and the acknowledgement that closes every submission.",
      href: "UX4G Application.html",
      tone: "primary",
      colA: [S_Stepper, S_DocList, S_Submitted],
      colB: [S_Eligibility, S_DraftBanner, S_DocList],
    },
    {
      name: "Status & Tracking",
      desc: "Application timelines, grievance escalation, and inspection slot scheduling — every state has a specific colour, label, and CTA.",
      href: "UX4G Status %26 Tracking.html",
      tone: "primary",
      colA: [S_StatusReview, S_Timeline, S_Approved],
      colB: [S_ActionNeeded, S_Approved, S_Timeline],
    },
    {
      name: "Payment & Transactions",
      desc: "Fee breakdowns, UPI / Net Banking / Card / CSC, automatic SC/ST waivers, recoverable failures — all routed via PayGov.",
      href: "UX4G Payments.html",
      tone: "primary",
      colA: [S_FeeTable, S_Paid, S_Waiver],
      colB: [S_Method, S_FeeTable, S_Paid],
    },
    {
      name: "Search & Discovery",
      desc: "How citizens find the right service when they don't know what to look for — bi-lingual search, browse, personalisation, slot booking.",
      href: "UX4G Search %26 Discovery.html",
      tone: "primary",
      colA: [S_SearchBar, S_Result, S_Booking],
      colB: [S_Categories, S_Result, S_SearchBar],
    },
    {
      name: "Dashboard & Applications",
      desc: "The signed-in citizen's home — active applications, pending tasks, profile and notification preferences in one place.",
      href: "UX4G Dashboard.html",
      tone: "primary",
      colA: [S_Greeting, S_Tasks, S_Profile],
      colB: [S_AppCard, S_Profile, S_Tasks],
    },
    {
      name: "Notifications",
      desc: "Bell-icon centre, SMS / Email / WhatsApp templates, real-time push and in-app updates, reminder sequences, granular preferences.",
      href: "UX4G Notifications.html",
      tone: "primary",
      colA: [S_NotifList, S_Reminder, S_Live],
      colB: [S_Sms, S_Live, S_Reminder],
    },
    {
      name: "Feedback & Communication",
      desc: "Inline field feedback, post-service rating, help-centre + contact paths, and the 22-language switcher — closing the loop with the citizen.",
      href: "UX4G Feedback.html",
      tone: "primary",
      colA: [S_Rating, S_Help, S_Officer],
      colB: [S_Language, S_Officer, S_Help],
    },
  ];

  const total = CATEGORIES.length;
  const goPrev = () => setActive((i) => (i - 1 + total) % total);
  const goNext = () => setActive((i) => (i + 1) % total);

  return (
    <section className="patterns">
      <div className="container">
        <div className="patterns-head">
          <div>
            <h2 className="ux4g-display-m-default">Service patterns</h2>
          </div>
          <p className="ux4g-body-m-default">
            Components are the pieces. Patterns are how they fit together for a real journey — sign-in, application, payment, grievance.
          </p>
        </div>

        {/* ─── Carousel header (counter + arrows) ─── */}
        <div className="pcarousel-head">
          <span className="pcarousel-counter">
            <strong>{String(active + 1).padStart(2, "0")}</strong>
            <span className="pcarousel-counter__sep">/</span>
            <span className="pcarousel-counter__total">{String(total).padStart(2, "0")}</span>
            <span className="pcarousel-counter__name">{CATEGORIES[active].name}</span>
          </span>
          <div className="pcarousel-nav">
            <button className="pcarousel-arrow" onClick={goPrev} aria-label="Previous pattern category">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M15 18L9 12L15 6" />
              </svg>
            </button>
            <button className="pcarousel-arrow" onClick={goNext} aria-label="Next pattern category">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M9 18L15 12L9 6" />
              </svg>
            </button>
          </div>
        </div>

        {/* ─── Card carousel ─── */}
        <div className="pcarousel">
          <div className="pcarousel__track" style={{ transform: `translateX(calc(50% - 50% - ${active} * (var(--pcarousel-card-w) + var(--pcarousel-gap))))` }}>
            {CATEGORIES.map((cat, idx) => {
              const offset = idx - active;
              const abs = Math.abs(offset);
              return (
                <article
                  key={cat.name}
                  className={
                    "cat-card cat-card--live pcarousel__slide" +
                    (idx === active ? " is-active" : "") +
                    (cat.tone === "amber" ? " cat-card--amber" : "")
                  }
                  data-offset={offset}
                  aria-hidden={idx !== active}
                  onClick={() => {
                    if (idx === active) { window.location.href = cat.href; }
                    else { setActive(idx); }
                  }}
                  style={{
                    "--pc-blur": abs === 0 ? "0px" : abs === 1 ? "6px" : "10px",
                    "--pc-scale": abs === 0 ? 1 : abs === 1 ? 0.92 : 0.86,
                    "--pc-opacity": abs === 0 ? 1 : abs === 1 ? 0.55 : 0.25,
                  }}
                >
                  <div className="cat-card__content">
                    <div className="cat-card__kicker">
                      <span className="cat-card__index ux4g-heading-s-strong">{String(idx + 1).padStart(2, "0")}</span>
                    </div>
                    <h3 className="cat-card__title ux4g-heading-xl-strong">{cat.name}</h3>
                    <p className="cat-card__desc ux4g-body-m-default">{cat.desc}</p>
                    <a className="cat-card__cta" href={cat.href} onClick={(e) => e.stopPropagation()} tabIndex={idx === active ? 0 : -1}>
                      Explore
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M4 12L12 4" />
                        <path d="M6 4H12V10" />
                      </svg>
                    </a>
                  </div>
                  <div className="cat-card__marquee" aria-hidden="true">
                    <div className="cat-marquee__col cat-marquee__col--a">
                      <div className="cat-marquee__inner">
                        {cat.colA.map((Snip, i) => <Snip key={`a1-${i}`} />)}
                        {cat.colA.map((Snip, i) => <Snip key={`a2-${i}`} />)}
                      </div>
                    </div>
                    <div className="cat-marquee__col cat-marquee__col--b">
                      <div className="cat-marquee__inner">
                        {cat.colB.map((Snip, i) => <Snip key={`b1-${i}`} />)}
                        {cat.colB.map((Snip, i) => <Snip key={`b2-${i}`} />)}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────── Footer ───────────────── */
function Footer({ onStub }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="wm">UX4G</div>
            <div className="desc">
              A Government of India initiative under NeGD, MeitY and the Digital India programme, open
              for any ministry, agency or state portal that serves Indian citizens.
            </div>
          </div>
          <div className="footer-col">
            <h4>Foundations</h4>
            <ul>
              <li><a href="UX4G Colour.html">Colour</a></li>
              <li><a href="UX4G Typography.html">Typography</a></li>
              <li><a href="UX4G Spacing.html">Spacing</a></li>
              <li><a href="UX4G Layout.html">Layout</a></li>
              <li><a href="UX4G Elevation.html">Elevation</a></li>
              <li><a href="UX4G Borders.html">Borders & Radius</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>System</h4>
            <ul>
              <li><a href="UX4G Foundations.html">Foundations Overview</a></li>
              <li><a href="UX4G Fundamentals.html">Fundamentals</a></li>
              <li><a href="UX4G Components.html">Components Library</a></li>
              <li><a href="UX4G Patterns.html">Service Patterns</a></li>
              <li><a href="UX4G Identity %26 Access.html">Identity & Access</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Guidelines</h4>
            <ul>
              <li><a href="UX4G Accessibility.html">Accessibility</a></li>
              <li><a href="UX4G Content.html">Content Strategy</a></li>
              <li><a onClick={() => onStub("Contribute")}>Contribute on GitHub</a></li>
              <li><a onClick={() => onStub("Feedback")}>Submit feedback</a></li>
            </ul>
            <span className="tag">Open for all.</span>
          </div>
        </div>
        <div className="tricolour" style={{ width: "100%", borderRadius: 0, height: 3 }}>
          <span className="s"></span><span className="w"></span><span className="g"></span>
        </div>
        <div className="footer-bar">
          <span>© 2026 · NATIONAL E-GOVERNANCE DIVISION · MEITY</span>
          <span>UX4G · DESIGN SYSTEM 3.0 · MADE IN INDIA</span>
        </div>
      </div>
    </footer>
  );
}

/* ───────────────── App ───────────────── */
function App() {
  const { toasts, push } = useToasts();
  const [active, setActive] = useState("");

  const stub = (name) => push(`${name}, page coming soon`);

  return (
    <>
      <Navbar
        onStub={stub}
        onExplore={() => stub("Explore components")}
        active={active}
        setActive={setActive}
      />
      <main>
        <Hero onStub={stub} />
        <SpecificSection />
        <BentoGridSection onStub={stub} />
        <PatternsSection onStub={stub} />
      </main>
      <SiteFooter />
      <Toasts items={toasts} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
