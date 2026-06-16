/* global React, ReactDOM */
const { useState, useEffect, useRef, useCallback } = React;

/* ───────────────── Toast ───────────────── */
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

/* ───────────────── Navbar (shared) ───────────────── */
function Navbar({ onStub, onExplore, active }) {
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

/* ───────────────── Mini hero illustrations (thumbnail = shrunken hero banner) ─────────────────
   Each entry returns a compact JSX fragment that sits inside the purple thumbnail container
   (.cx-thumb). The illustrations mirror the hero banner art on each component's detail page —
   white "card" surfaces, amber accents, simple geometric primitives — kept small enough to read
   at ~210px wide. */
const _M = {
  // small palette helpers
  card: { background: "#fff", borderRadius: 8, boxShadow: "0 6px 14px -6px rgba(48,28,125,0.5)", color: "var(--primary-dark)" },
  bar: (w, op = 0.15) => ({ height: 5, borderRadius: 3, background: `rgba(48,28,125,${op})`, width: w }),
  amberPill: { background: "var(--amber)", color: "var(--primary-dark)" },
  label: (sz = 9) => ({ fontFamily: "var(--font-display)", fontSize: sz, fontWeight: 700, color: "var(--primary-dark)", letterSpacing: "-0.01em" }),
};

const MINI_HEROES = {
  // ─── Form Elements ────────────────────────────────────────────────
  "Button": () => (
    <div style={{ position: "relative", display: "flex", alignItems: "center", gap: 6 }}>
      <div style={{ ..._M.card, padding: "9px 22px 9px 14px", borderRadius: 999, display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ width: 56, height: 7, borderRadius: 3.5, background: "var(--primary-dark)" }}></span>
        <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, color: "var(--primary-dark)", fontSize: 14, lineHeight: 1 }}>→</span>
      </div>
      <svg width="18" height="22" viewBox="0 0 60 76" style={{ position: "absolute", right: -6, bottom: -6, filter: "drop-shadow(0 3px 6px rgba(20,10,60,0.4))" }}>
        <path d="M6 4 L52 38 L30 42 L42 68 L32 72 L20 46 L6 60 Z" fill="var(--amber)" stroke="var(--primary-dark)" strokeWidth="3" strokeLinejoin="round"/>
      </svg>
    </div>
  ),
  "Link": () => (
    <div style={{ ..._M.card, padding: "12px 18px", borderRadius: 8, display: "flex", alignItems: "center", gap: 6 }}>
      <span style={{ ..._M.label(12), borderBottom: "2px solid var(--amber)", paddingBottom: 1 }}>View status</span>
      <span style={{ color: "var(--amber)", fontWeight: 800, fontSize: 14 }}>→</span>
    </div>
  ),
  "Input": () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 6, alignItems: "stretch", width: 170 }}>
      <span style={{ ..._M.label(8), color: "rgba(255,255,255,0.7)", letterSpacing: "0.06em", textTransform: "uppercase" }}>Aadhaar number</span>
      <div style={{ ..._M.card, padding: "10px 12px", display: "flex", alignItems: "center", gap: 2 }}>
        <span style={{ ..._M.label(11) }}>XXXX 4271</span>
        <span style={{ width: 1.5, height: 10, background: "var(--amber)", animation: "hb-caret 1s steps(1) infinite" }}></span>
      </div>
    </div>
  ),
  "Textarea": () => (
    <div style={{ ..._M.card, padding: "10px 12px", width: 170, display: "flex", flexDirection: "column", gap: 4 }}>
      <div style={_M.bar("90%")}></div>
      <div style={_M.bar("70%")}></div>
      <div style={{ ..._M.bar("50%"), background: "var(--amber)" }}></div>
    </div>
  ),
  "Checkbox": () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <div style={{ ..._M.card, padding: "8px 12px", display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ width: 14, height: 14, borderRadius: 3, background: "var(--amber)", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "var(--primary-dark)", fontSize: 10, fontWeight: 800 }}>✓</span>
        <span style={_M.bar("70px", 0.2)}></span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 12px" }}>
        <span style={{ width: 14, height: 14, borderRadius: 3, border: "1.5px solid rgba(255,255,255,0.5)" }}></span>
        <span style={{ width: 70, height: 5, borderRadius: 3, background: "rgba(255,255,255,0.3)" }}></span>
      </div>
    </div>
  ),
  "Radio Button": () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <div style={{ ..._M.card, padding: "8px 12px", display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ width: 14, height: 14, borderRadius: "50%", border: "3px solid var(--primary-dark)", background: "var(--amber)", boxSizing: "border-box" }}></span>
        <span style={_M.bar("70px", 0.2)}></span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 12px" }}>
        <span style={{ width: 14, height: 14, borderRadius: "50%", border: "1.5px solid rgba(255,255,255,0.5)" }}></span>
        <span style={{ width: 70, height: 5, borderRadius: 3, background: "rgba(255,255,255,0.3)" }}></span>
      </div>
    </div>
  ),
  "Switch / Toggle": () => (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <div style={{ width: 44, height: 22, borderRadius: 999, background: "rgba(255,255,255,0.22)", padding: 3, boxSizing: "border-box" }}>
        <div style={{ width: 16, height: 16, borderRadius: "50%", background: "#fff" }}></div>
      </div>
      <span style={{ color: "var(--amber)", fontSize: 14, fontWeight: 800 }}>→</span>
      <div style={{ width: 44, height: 22, borderRadius: 999, background: "var(--amber)", padding: 3, boxSizing: "border-box", boxShadow: "0 0 18px rgba(255,168,39,0.55)" }}>
        <div style={{ width: 16, height: 16, borderRadius: "50%", background: "#fff", marginLeft: 22 }}></div>
      </div>
    </div>
  ),
  "Dropdown Menu": () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 4, width: 150 }}>
      <div style={{ ..._M.card, padding: "8px 12px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={_M.label(10)}>Maharashtra</span>
        <span style={{ width: 0, height: 0, borderLeft: "4px solid transparent", borderRight: "4px solid transparent", borderTop: "5px solid var(--amber)" }}></span>
      </div>
      <div style={{ ..._M.card, padding: "6px 0", display: "flex", flexDirection: "column" }}>
        <span style={{ padding: "5px 12px", background: "rgba(255,168,39,0.18)", ..._M.label(10) }}>Maharashtra</span>
        <span style={{ padding: "5px 12px", ..._M.label(10), opacity: 0.7 }}>Gujarat</span>
        <span style={{ padding: "5px 12px", ..._M.label(10), opacity: 0.7 }}>Karnataka</span>
      </div>
    </div>
  ),
  "Combobox": () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 4, width: 150 }}>
      <div style={{ ..._M.card, padding: "8px 12px", display: "flex", alignItems: "center", gap: 6, border: "1.5px solid var(--amber)" }}>
        <span style={_M.label(10)}>Pune</span>
        <span style={{ width: 1, height: 8, background: "var(--amber)" }}></span>
      </div>
      <div style={{ ..._M.card, padding: "5px 0" }}>
        <span style={{ display: "block", padding: "4px 12px", background: "rgba(255,168,39,0.18)", ..._M.label(10) }}>Pune, 411001</span>
        <span style={{ display: "block", padding: "4px 12px", ..._M.label(10), opacity: 0.7 }}>Punjab</span>
      </div>
    </div>
  ),
  "Search": () => (
    <div style={{ ..._M.card, padding: "10px 14px", borderRadius: 999, display: "flex", alignItems: "center", gap: 10, width: 160 }}>
      <span style={{ width: 16, height: 16, border: "2.5px solid var(--amber)", borderRadius: "50%", position: "relative", flexShrink: 0 }}>
        <span style={{ position: "absolute", right: -4, bottom: -4, width: 7, height: 2, background: "var(--amber)", transform: "rotate(45deg)", borderRadius: 1 }}></span>
      </span>
      <span style={_M.label(11)}>Aadhaar</span>
      <span style={{ width: 1.5, height: 10, background: "var(--amber)" }}></span>
    </div>
  ),
  "Slider": () => (
    <div style={{ width: 170, padding: "12px 0", position: "relative" }}>
      <div style={{ height: 4, borderRadius: 2, background: "rgba(255,255,255,0.22)", position: "relative" }}>
        <div style={{ width: "62%", height: "100%", borderRadius: 2, background: "var(--amber)", boxShadow: "0 0 12px rgba(255,168,39,0.6)" }}></div>
        <span style={{ position: "absolute", top: "50%", left: "62%", width: 16, height: 16, borderRadius: "50%", background: "#fff", transform: "translate(-50%, -50%)", boxShadow: "0 0 0 4px rgba(255,255,255,0.18), 0 4px 10px rgba(0,0,0,0.3)" }}></span>
      </div>
    </div>
  ),
  "Form Field Group": () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 5, width: 170 }}>
      <span style={{ ..._M.label(8), color: "rgba(255,255,255,0.75)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Aadhaar <span style={{ color: "var(--amber)" }}>*</span></span>
      <div style={{ ..._M.card, padding: "8px 12px", display: "flex", alignItems: "center" }}>
        <span style={_M.label(10)}>XXXX XXXX 4271</span>
      </div>
      <span style={{ ..._M.label(7), color: "var(--amber)", textTransform: "uppercase", letterSpacing: "0.06em" }}>✓ 12 DIGITS · VERIFIED</span>
    </div>
  ),
  "Input OTP": () => (
    <div style={{ display: "flex", gap: 6 }}>
      {["4","8","3","7","",""].map((v, i) => (
        <div key={i} style={{
          width: 22, height: 28, borderRadius: 5,
          background: v ? "#fff" : "rgba(255,255,255,0.08)",
          border: i === 4 ? "2px solid var(--amber)" : v ? "none" : "1.5px solid rgba(255,255,255,0.25)",
          boxShadow: i === 4 ? "0 0 16px rgba(255,168,39,0.6)" : "none",
          color: "var(--primary-dark)", display: "flex", alignItems: "center", justifyContent: "center",
          fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 13,
        }}>{v}</div>
      ))}
    </div>
  ),
  "Date Picker": () => (
    <div style={{ ..._M.card, padding: "10px 12px", width: 170 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
        <span style={_M.label(10)}>April 2026</span>
        <span style={{ ..._M.label(10), opacity: 0.4 }}>‹›</span>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 2 }}>
        {Array.from({ length: 28 }).map((_, i) => {
          const day = i + 1;
          const sel = day === 18;
          return <div key={i} style={{ aspectRatio: "1", borderRadius: 3, background: sel ? "var(--amber)" : "transparent", color: "var(--primary-dark)", fontSize: 8, fontWeight: 600, display: "flex", alignItems: "center", justifyContent: "center" }}>{day}</div>;
        })}
      </div>
    </div>
  ),
  "Time Picker": () => (
    <div style={{ ..._M.card, padding: "10px 12px", width: 150 }}>
      <div style={{ display: "flex", gap: 6, marginBottom: 8 }}>
        <span style={{ ..._M.label(9), flex: 1, textAlign: "center", padding: "3px 0", borderRadius: 4, background: "var(--amber)", color: "var(--primary-dark)" }}>AM</span>
        <span style={{ ..._M.label(9), flex: 1, textAlign: "center", padding: "3px 0", opacity: 0.45 }}>PM</span>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, textAlign: "center" }}>
        {[["06", "07", "08"], ["35", "40", "45"]].map((col, ci) => (
          <div key={ci} style={{ display: "flex", flexDirection: "column", gap: 3 }}>
            {col.map((v, i) => <span key={v} style={{ ..._M.label(10), opacity: i === 1 ? 1 : 0.4, fontWeight: i === 1 ? 800 : 600 }}>{v}</span>)}
          </div>
        ))}
      </div>
    </div>
  ),
  "File Upload": () => (
    <div style={{ ..._M.card, padding: "10px 12px", width: 180, display: "flex", flexDirection: "column", gap: 8 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ width: 24, height: 28, borderRadius: 4, background: "var(--amber)", color: "var(--primary-dark)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 8 }}>PDF</span>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 3 }}>
          <span style={_M.label(10)}>aadhaar.pdf</span>
          <span style={{ ..._M.label(7), opacity: 0.5, letterSpacing: "0.05em" }}>312 KB · DONE</span>
        </div>
        <span style={{ width: 14, height: 14, borderRadius: "50%", background: "rgba(22,163,74,0.18)", color: "#16a34a", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 9, fontWeight: 800 }}>✓</span>
      </div>
      <div style={{ height: 4, borderRadius: 2, background: "rgba(48,28,125,0.1)" }}><div style={{ height: "100%", width: "100%", background: "var(--amber)", borderRadius: 2 }}></div></div>
    </div>
  ),

  // ─── Feedback ────────────────────────────────────────────────────
  "Alert / Toast": () => (
    <div style={{ ..._M.card, padding: "10px 12px", display: "flex", alignItems: "flex-start", gap: 8, borderLeft: "3px solid #16a34a", width: 180 }}>
      <span style={{ width: 18, height: 18, borderRadius: "50%", background: "#16a34a", color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 11, flexShrink: 0 }}>✓</span>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 4 }}>
        <span style={_M.label(10)}>Application submitted</span>
        <span style={_M.bar("70%")}></span>
      </div>
    </div>
  ),
  "Badge": () => (
    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
      <div style={{ position: "relative", width: 40, height: 40, borderRadius: 10, background: "rgba(255,255,255,0.2)" }}>
        <span style={{ position: "absolute", top: -6, right: -6, width: 20, height: 20, borderRadius: "50%", background: "var(--amber)", color: "var(--primary-dark)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 11, boxShadow: "0 0 12px rgba(255,168,39,0.6)" }}>9</span>
      </div>
      <div style={{ position: "relative", width: 40, height: 40, borderRadius: 10, background: "rgba(255,255,255,0.2)" }}>
        <span style={{ position: "absolute", top: -4, right: -4, width: 10, height: 10, borderRadius: "50%", background: "#ef4444", border: "2px solid var(--primary)" }}></span>
      </div>
    </div>
  ),
  "Tag": () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 6, justifyContent: "center", maxWidth: 200 }}>
      <span style={{ ..._M.card, padding: "5px 10px", borderRadius: 999, fontFamily: "var(--font-display)", fontSize: 10, fontWeight: 700 }}>Verified</span>
      <span style={{ ..._M.amberPill, padding: "5px 10px", borderRadius: 999, fontFamily: "var(--font-display)", fontSize: 10, fontWeight: 700 }}>DPDP 2023</span>
      <span style={{ padding: "5px 10px", borderRadius: 999, fontFamily: "var(--font-display)", fontSize: 10, fontWeight: 700, color: "#fff", border: "1.5px solid rgba(255,255,255,0.4)" }}>v3.0</span>
    </div>
  ),
  "Spinner": () => (
    <div style={{ width: 44, height: 44, borderRadius: "50%", border: "5px solid rgba(255,255,255,0.18)", borderTopColor: "var(--amber)", borderRightColor: "var(--amber)", animation: "spin 1.2s linear infinite", boxShadow: "0 0 20px rgba(255,168,39,0.4)" }}></div>
  ),
  "Progress Indicator": () => (
    <div style={{ width: 170, display: "flex", flexDirection: "column", gap: 6 }}>
      <div style={{ height: 8, borderRadius: 4, background: "rgba(255,255,255,0.18)", overflow: "hidden" }}>
        <div style={{ height: "100%", width: "65%", background: "var(--amber)", borderRadius: 4, boxShadow: "0 0 8px rgba(255,168,39,0.6)" }}></div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-display)", fontSize: 9, letterSpacing: "0.05em" }}>
        <span>STEP 4 / 6</span><span>65%</span>
      </div>
    </div>
  ),
  "Feedback (Rating)": () => (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
      <div style={{ display: "flex", gap: 4 }}>
        {[1,2,3,4,5].map(i => <span key={i} style={{ fontSize: 22, color: i <= 4 ? "var(--amber)" : "rgba(255,255,255,0.25)", lineHeight: 1, textShadow: i <= 4 ? "0 0 10px rgba(255,168,39,0.5)" : "none" }}>★</span>)}
      </div>
      <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 18, color: "#fff", letterSpacing: "-0.02em" }}>4.2</span>
    </div>
  ),
  "Draft Status Banner": () => (
    <div style={{ ..._M.card, padding: "8px 12px", display: "flex", alignItems: "center", gap: 8, borderLeft: "3px solid #d97706", width: 180 }}>
      <span style={{ width: 18, height: 18, borderRadius: "50%", background: "#d97706", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 800 }}>⟳</span>
      <div style={{ flex: 1 }}>
        <span style={_M.label(10)}>Draft saved</span>
        <div style={{ ..._M.label(7), opacity: 0.5, letterSpacing: "0.05em", marginTop: 2 }}>2 MIN AGO</div>
      </div>
    </div>
  ),
  "SLA Progress Indicator": () => (
    <div style={{ ..._M.card, padding: "10px 12px", width: 180 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 6 }}>
        <span style={_M.label(10)}>Income cert.</span>
        <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 16, color: "#16a34a", letterSpacing: "-0.02em" }}>18d</span>
      </div>
      <div style={{ height: 5, borderRadius: 3, background: "rgba(48,28,125,0.1)" }}>
        <div style={{ height: "100%", width: "60%", background: "linear-gradient(90deg, #16a34a, var(--amber))", borderRadius: 3 }}></div>
      </div>
    </div>
  ),
  "Empty State": () => (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
      <div style={{ width: 36, height: 36, borderRadius: 8, border: "1.5px dashed var(--amber)", background: "rgba(255,168,39,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M3 7l9-4 9 4M3 7v10l9 4 9-4V7M3 7l9 4m9-4l-9 4" stroke="var(--amber)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </div>
      <span style={{ color: "#fff", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 12 }}>No data yet</span>
    </div>
  ),
  "Tooltip": () => (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
      <div style={{ background: "var(--primary-dark)", color: "#fff", padding: "6px 12px", borderRadius: 6, fontFamily: "var(--font-display)", fontSize: 10, fontWeight: 600, position: "relative" }}>
        Verified
        <span style={{ position: "absolute", top: "100%", left: "50%", transform: "translateX(-50%)", border: "5px solid transparent", borderTopColor: "var(--primary-dark)" }}></span>
      </div>
      <span style={{ marginTop: 8, width: 26, height: 26, borderRadius: "50%", background: "var(--amber)", color: "var(--primary-dark)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 14, boxShadow: "0 0 0 6px rgba(255,168,39,0.18)" }}>?</span>
    </div>
  ),
  "Modal": () => (
    <div style={{ ..._M.card, padding: "10px 12px", width: 170, display: "flex", flexDirection: "column", gap: 8 }}>
      <span style={_M.label(11)}>Confirm submission</span>
      <div style={_M.bar("80%")}></div>
      <div style={{ ..._M.bar("60%"), background: "rgba(48,28,125,0.1)" }}></div>
      <div style={{ display: "flex", gap: 6, justifyContent: "flex-end", marginTop: 4 }}>
        <span style={{ padding: "4px 10px", borderRadius: 4, fontFamily: "var(--font-display)", fontSize: 9, fontWeight: 700, color: "var(--primary-dark)", border: "1.5px solid rgba(48,28,125,0.3)" }}>Cancel</span>
        <span style={{ padding: "4px 10px", borderRadius: 4, fontFamily: "var(--font-display)", fontSize: 9, fontWeight: 700, color: "#fff", background: "var(--primary-dark)" }}>Submit</span>
      </div>
    </div>
  ),
  "Dialog": () => (
    <div style={{ ..._M.card, padding: "12px", width: 170, display: "flex", flexDirection: "column", gap: 6 }}>
      <span style={{ width: 22, height: 22, borderRadius: "50%", background: "#ef4444", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 13 }}>!</span>
      <span style={_M.label(11)}>Delete record?</span>
      <span style={_M.bar("80%")}></span>
      <div style={{ display: "flex", gap: 6, justifyContent: "flex-end" }}>
        <span style={{ padding: "4px 10px", borderRadius: 4, fontFamily: "var(--font-display)", fontSize: 9, fontWeight: 700, color: "#fff", background: "#ef4444" }}>Delete</span>
      </div>
    </div>
  ),
  "Popover": () => (
    <div style={{ ..._M.card, padding: "10px 12px", width: 160, position: "relative" }}>
      <span style={_M.label(11)}>Service availability</span>
      <div style={{ ..._M.bar("90%"), marginTop: 6 }}></div>
      <div style={{ ..._M.bar("60%"), marginTop: 4 }}></div>
      <span style={{ position: "absolute", bottom: -6, left: 24, width: 10, height: 10, background: "#fff", transform: "rotate(45deg)" }}></span>
    </div>
  ),

  // ─── Data Display ────────────────────────────────────────────────
  "Card": () => (
    <div style={{ display: "flex", gap: 6 }}>
      <div style={{ ..._M.card, width: 60, padding: 6, transform: "translateY(4px) scale(0.92)", opacity: 0.7 }}>
        <div style={{ height: 28, borderRadius: 4, background: "linear-gradient(135deg, #a78bfa, var(--primary-dark))" }}></div>
        <div style={{ ..._M.bar("100%"), marginTop: 4 }}></div>
      </div>
      <div style={{ ..._M.card, width: 64, padding: 6, transform: "translateY(-3px) scale(1.05)" }}>
        <div style={{ height: 30, borderRadius: 4, background: "linear-gradient(135deg, var(--amber), #f59e0b)" }}></div>
        <div style={{ ..._M.bar("100%"), marginTop: 4 }}></div>
        <div style={{ ..._M.bar("60%"), marginTop: 3 }}></div>
      </div>
      <div style={{ ..._M.card, width: 60, padding: 6, transform: "translateY(4px) scale(0.92)", opacity: 0.7 }}>
        <div style={{ height: 28, borderRadius: 4, background: "linear-gradient(135deg, #34d399, #10b981)" }}></div>
        <div style={{ ..._M.bar("100%"), marginTop: 4 }}></div>
      </div>
    </div>
  ),
  "Table": () => (
    <div style={{ ..._M.card, width: 180, overflow: "hidden" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 0.7fr", gap: 6, padding: "6px 10px", background: "rgba(48,28,125,0.06)", fontFamily: "var(--font-display)", fontSize: 7, fontWeight: 800, color: "var(--primary-dark)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
        <span>Service</span><span>Status</span><span>SLA</span>
      </div>
      {[0,1,2].map(i => (
        <div key={i} style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 0.7fr", gap: 6, padding: "6px 10px", borderTop: "1px solid rgba(48,28,125,0.06)", alignItems: "center" }}>
          <span style={_M.bar("90%", 0.15)}></span>
          <span style={{ padding: "2px 6px", background: i === 1 ? "var(--amber)" : "rgba(22,163,74,0.12)", color: i === 1 ? "var(--primary-dark)" : "#16a34a", borderRadius: 999, fontSize: 7, fontWeight: 800, fontFamily: "var(--font-display)", width: "fit-content" }}>{i === 1 ? "REVIEW" : "DONE"}</span>
          <span style={_M.bar("70%", 0.15)}></span>
        </div>
      ))}
    </div>
  ),
  "Accordion": () => (
    <div style={{ ..._M.card, width: 180, overflow: "hidden" }}>
      <div style={{ padding: "8px 12px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(48,28,125,0.08)" }}>
        <span style={_M.label(10)}>Required docs</span>
        <span style={{ width: 0, height: 0, borderLeft: "4px solid transparent", borderRight: "4px solid transparent", borderTop: "5px solid var(--amber)", transform: "rotate(180deg)" }}></span>
      </div>
      <div style={{ padding: "8px 12px", background: "rgba(255,168,39,0.06)", display: "flex", flexDirection: "column", gap: 4 }}>
        <span style={_M.bar("85%")}></span>
        <span style={_M.bar("65%")}></span>
      </div>
      <div style={{ padding: "8px 12px", display: "flex", justifyContent: "space-between", borderTop: "1px solid rgba(48,28,125,0.08)" }}>
        <span style={_M.label(10)}>Eligibility</span>
        <span style={{ width: 0, height: 0, borderLeft: "4px solid transparent", borderRight: "4px solid transparent", borderTop: "5px solid var(--primary-dark)", opacity: 0.5 }}></span>
      </div>
    </div>
  ),
  "Carousel": () => (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
      <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
        <div style={{ ..._M.card, width: 32, height: 44, transform: "scale(0.85)", opacity: 0.55 }}></div>
        <div style={{ ..._M.card, width: 52, height: 56 }}><div style={{ height: 20, background: "linear-gradient(135deg, var(--amber), #f59e0b)", borderRadius: "5px 5px 0 0" }}></div></div>
        <div style={{ ..._M.card, width: 32, height: 44, transform: "scale(0.85)", opacity: 0.55 }}></div>
      </div>
      <div style={{ display: "flex", gap: 4 }}>
        <span style={{ width: 5, height: 5, borderRadius: "50%", background: "rgba(255,255,255,0.3)" }}></span>
        <span style={{ width: 14, height: 5, borderRadius: 3, background: "var(--amber)" }}></span>
        <span style={{ width: 5, height: 5, borderRadius: "50%", background: "rgba(255,255,255,0.3)" }}></span>
      </div>
    </div>
  ),
  "List": () => (
    <div style={{ ..._M.card, width: 180, padding: "6px 10px", display: "flex", flexDirection: "column", gap: 6 }}>
      {["AB","VR","PJ"].map((init, i) => (
        <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, paddingBottom: i < 2 ? 6 : 0, borderBottom: i < 2 ? "1px solid rgba(48,28,125,0.08)" : "none" }}>
          <span style={{ width: 20, height: 20, borderRadius: "50%", background: i === 1 ? "var(--amber)" : "rgba(48,28,125,0.12)", color: "var(--primary-dark)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 9 }}>{init}</span>
          <span style={_M.bar("75%", 0.15)}></span>
        </div>
      ))}
    </div>
  ),
  "Avatar": () => (
    <div style={{ display: "flex" }}>
      {[{c:"#fff",t:"A"},{c:"#a78bfa",t:"B"},{c:"var(--amber)",t:"C"},{c:"#34d399",t:"D"},{c:"var(--primary-dark)",t:"+3"}].map((a, i) => (
        <span key={i} style={{ width: 32, height: 32, borderRadius: "50%", background: a.c, border: "2px solid var(--primary)", marginLeft: i ? -10 : 0, color: a.c === "var(--primary-dark)" || a.c === "#fff" ? (a.c === "#fff" ? "var(--primary-dark)" : "#fff") : "var(--primary-dark)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 11, boxShadow: "0 4px 8px rgba(0,0,0,0.18)" }}>{a.t}</span>
      ))}
    </div>
  ),
  "Image": () => (
    <div style={{ display: "flex", gap: 8 }}>
      <div style={{ ..._M.card, width: 60, height: 72, padding: 0, background: "linear-gradient(135deg, var(--amber), #f59e0b)", display: "flex", alignItems: "center", justifyContent: "center", transform: "rotate(-4deg)" }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="2" stroke="#fff" strokeWidth="1.8"/><circle cx="9" cy="9" r="1.5" fill="#fff"/><path d="M3 17l5-5 4 4 3-3 6 6" stroke="#fff" strokeWidth="1.8" strokeLinejoin="round" fill="none"/></svg>
      </div>
      <div style={{ ..._M.card, width: 60, height: 72, padding: 0, background: "linear-gradient(135deg, #a78bfa, var(--primary-dark))", display: "flex", alignItems: "center", justifyContent: "center", transform: "rotate(3deg) translateY(-4px)" }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="2" stroke="#fff" strokeWidth="1.8"/><circle cx="9" cy="9" r="1.5" fill="#fff"/><path d="M3 17l5-5 4 4 3-3 6 6" stroke="#fff" strokeWidth="1.8" strokeLinejoin="round" fill="none"/></svg>
      </div>
    </div>
  ),
  "Status Pipeline": () => (
    <div style={{ display: "flex", alignItems: "center", gap: 0 }}>
      <span style={{ width: 18, height: 18, borderRadius: "50%", background: "var(--amber)", color: "var(--primary-dark)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 10 }}>1</span>
      <span style={{ width: 18, height: 2, background: "var(--amber)" }}></span>
      <span style={{ width: 18, height: 18, borderRadius: "50%", background: "var(--amber)", color: "var(--primary-dark)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 10 }}>2</span>
      <span style={{ width: 18, height: 2, background: "var(--amber)" }}></span>
      <span style={{ width: 22, height: 22, borderRadius: "50%", background: "#fff", color: "var(--primary-dark)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 11, boxShadow: "0 0 0 4px rgba(255,168,39,0.3)" }}>3</span>
      <span style={{ width: 18, height: 2, background: "rgba(255,255,255,0.2)" }}></span>
      <span style={{ width: 18, height: 18, borderRadius: "50%", background: "rgba(255,255,255,0.12)", border: "2px solid rgba(255,255,255,0.3)" }}></span>
    </div>
  ),
  "Journey Timeline": () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
      {[{s:"done",l:"Filed"},{s:"active",l:"In review"},{s:"pending",l:"Issued"}].map((e, i) => (
        <div key={i} style={{ display: "flex", gap: 8, alignItems: "center", padding: "4px 0" }}>
          <div style={{ width: 14, display: "flex", flexDirection: "column", alignItems: "center" }}>
            <span style={{ width: e.s === "active" ? 12 : 8, height: e.s === "active" ? 12 : 8, borderRadius: "50%", background: e.s === "done" ? "var(--amber)" : e.s === "active" ? "#fff" : "rgba(255,255,255,0.2)", border: e.s === "active" ? "2px solid var(--amber)" : "none", boxShadow: e.s === "active" ? "0 0 8px rgba(255,168,39,0.6)" : "none" }}></span>
            {i < 2 && <span style={{ width: 1.5, height: 12, background: e.s === "done" ? "var(--amber)" : "rgba(255,255,255,0.2)" }}></span>}
          </div>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: e.s === "pending" ? 500 : 700, fontSize: 10, color: e.s === "active" ? "var(--amber)" : e.s === "pending" ? "rgba(255,255,255,0.5)" : "#fff" }}>{e.l}</span>
        </div>
      ))}
    </div>
  ),
  "Escalation Tree": () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 6, alignItems: "stretch", fontFamily: "var(--font-display)" }}>
      {[{lv:0,l:"Citizen",c:false},{lv:1,l:"SDM L1",c:true},{lv:2,l:"DM L2",c:false},{lv:3,l:"Commr.",c:false}].map((it, i) => (
        <div key={i} style={{ display: "flex", alignItems: "center", gap: 6, marginLeft: it.lv * 12 }}>
          <span style={{ width: 18, height: 18, borderRadius: "50%", background: it.c ? "var(--amber)" : it.lv === 0 ? "#fff" : "rgba(255,255,255,0.12)", border: it.lv > 0 && !it.c ? "1.5px solid rgba(255,255,255,0.3)" : "none", color: "var(--primary-dark)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 8, flexShrink: 0 }}>L{it.lv + 1}</span>
          <span style={{ fontSize: 9, fontWeight: it.c ? 800 : 600, color: it.c ? "var(--amber)" : it.lv === 0 ? "#fff" : "rgba(255,255,255,0.7)" }}>{it.l}</span>
        </div>
      ))}
    </div>
  ),
  "Checklist": () => (
    <div style={{ ..._M.card, width: 180, padding: "6px 10px", display: "flex", flexDirection: "column", gap: 6 }}>
      {[true, true, false].map((done, i) => (
        <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, paddingBottom: i < 2 ? 4 : 0, borderBottom: i < 2 ? "1px solid rgba(48,28,125,0.08)" : "none" }}>
          <span style={{ width: 14, height: 14, borderRadius: 3, background: done ? "var(--amber)" : "transparent", border: done ? "none" : "1.5px solid rgba(48,28,125,0.3)", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "var(--primary-dark)", fontWeight: 800, fontSize: 9 }}>{done ? "✓" : ""}</span>
          <span style={{ ..._M.bar(done ? "65%" : "80%", done ? 0.1 : 0.18), textDecoration: done ? "line-through" : "none" }}></span>
        </div>
      ))}
    </div>
  ),
  "Slot Grid": () => (
    <div style={{ ..._M.card, width: 180, padding: "8px 10px" }}>
      <span style={{ ..._M.label(8), letterSpacing: "0.05em", textTransform: "uppercase", display: "block", marginBottom: 4 }}>WED · 18 APR</span>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 4 }}>
        {[{t:"09:00",s:""},{t:"10:00",s:"x"},{t:"11:00",s:"on"},{t:"12:00",s:""}].map(s => (
          <div key={s.t} style={{
            height: 22, borderRadius: 4,
            background: s.s === "on" ? "var(--amber)" : s.s === "x" ? "rgba(48,28,125,0.08)" : "transparent",
            border: s.s === "x" ? "none" : s.s === "on" ? "none" : "1px solid rgba(48,28,125,0.2)",
            color: s.s === "x" ? "rgba(48,28,125,0.3)" : "var(--primary-dark)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "var(--font-display)", fontSize: 8, fontWeight: 700,
            textDecoration: s.s === "x" ? "line-through" : "none",
          }}>{s.t}</div>
        ))}
      </div>
    </div>
  ),

  // ─── Navigation ──────────────────────────────────────────────────
  "Breadcrumb": () => (
    <div style={{ ..._M.card, padding: "8px 14px", borderRadius: 999, display: "flex", alignItems: "center", gap: 6, fontFamily: "var(--font-display)" }}>
      <span style={{ fontSize: 10, color: "var(--primary-dark)", opacity: 0.5 }}>Services</span>
      <span style={{ opacity: 0.3 }}>/</span>
      <span style={{ fontSize: 10, color: "var(--primary-dark)", opacity: 0.55 }}>Identity</span>
      <span style={{ opacity: 0.3 }}>/</span>
      <span style={{ fontSize: 10, color: "var(--primary-dark)", fontWeight: 800, padding: "2px 6px", borderRadius: 999, background: "var(--amber)" }}>Aadhaar</span>
    </div>
  ),
  "Tab": () => (
    <div style={{ ..._M.card, width: 180, overflow: "hidden" }}>
      <div style={{ display: "flex", borderBottom: "1.5px solid rgba(48,28,125,0.1)" }}>
        <div style={{ flex: 1, padding: "6px 0", textAlign: "center", position: "relative" }}>
          <span style={_M.label(10)}>Overview</span>
          <span style={{ position: "absolute", left: "20%", right: "20%", bottom: -2, height: 2, background: "var(--amber)" }}></span>
        </div>
        <div style={{ flex: 1, padding: "6px 0", textAlign: "center" }}>
          <span style={{ ..._M.label(10), opacity: 0.5, fontWeight: 500 }}>Docs</span>
        </div>
        <div style={{ flex: 1, padding: "6px 0", textAlign: "center" }}>
          <span style={{ ..._M.label(10), opacity: 0.5, fontWeight: 500 }}>History</span>
        </div>
      </div>
      <div style={{ padding: "8px 12px", display: "flex", flexDirection: "column", gap: 4 }}>
        <span style={_M.bar("80%")}></span>
        <span style={_M.bar("50%")}></span>
      </div>
    </div>
  ),
  "Stepper": () => (
    <div style={{ display: "flex", alignItems: "center", gap: 0 }}>
      <span style={{ width: 22, height: 22, borderRadius: "50%", background: "var(--amber)", color: "var(--primary-dark)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 11 }}>1</span>
      <span style={{ width: 24, height: 2, background: "var(--amber)" }}></span>
      <span style={{ width: 26, height: 26, borderRadius: "50%", background: "#fff", color: "var(--primary-dark)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 12, boxShadow: "0 0 0 5px rgba(255,168,39,0.3)" }}>2</span>
      <span style={{ width: 24, height: 2, background: "rgba(255,255,255,0.2)" }}></span>
      <span style={{ width: 22, height: 22, borderRadius: "50%", background: "rgba(255,255,255,0.12)", border: "2px solid rgba(255,255,255,0.3)", color: "rgba(255,255,255,0.5)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 11 }}>3</span>
    </div>
  ),
  "Pagination": () => (
    <div style={{ ..._M.card, padding: "6px 8px", borderRadius: 999, display: "flex", gap: 4, alignItems: "center" }}>
      {[{n:"‹",a:false,d:true},{n:"1",a:false},{n:"2",a:true},{n:"3",a:false},{n:"…",a:false},{n:"9",a:false},{n:"›",a:false}].map((b, i) => (
        <span key={i} style={{ width: 20, height: 20, borderRadius: 4, background: b.a ? "var(--amber)" : "transparent", color: "var(--primary-dark)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontWeight: b.a ? 800 : 600, fontSize: 10, opacity: b.d ? 0.3 : 1 }}>{b.n}</span>
      ))}
    </div>
  ),
  "Navbar": () => (
    <div style={{ ..._M.card, padding: "8px 12px", display: "flex", alignItems: "center", gap: 10, width: 200 }}>
      <span style={{ width: 18, height: 18, borderRadius: 4, background: "var(--primary-dark)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 8 }}>U4</span>
      <span style={{ ..._M.label(9) }}>UX4G</span>
      <div style={{ flex: 1, display: "flex", justifyContent: "center", gap: 8 }}>
        <span style={{ ..._M.label(8), opacity: 0.5, fontWeight: 600 }}>Foundations</span>
        <span style={{ ..._M.label(8), position: "relative" }}>Components<span style={{ position: "absolute", left: 0, right: 0, bottom: -3, height: 1.5, background: "var(--amber)" }}></span></span>
      </div>
    </div>
  ),
  "Drawer": () => (
    <div style={{ position: "relative", width: 180, height: 100, background: "rgba(0,0,0,0.18)", borderRadius: 6, overflow: "hidden", display: "flex", justifyContent: "flex-end" }}>
      <div style={{ width: 110, ..._M.card, borderRadius: "6px 0 0 6px", padding: "8px 10px", display: "flex", flexDirection: "column", gap: 5 }}>
        <span style={_M.label(10)}>Filters</span>
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {[true, false, false].map((on, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 5 }}>
              <span style={{ width: 9, height: 9, borderRadius: 2, background: on ? "var(--amber)" : "rgba(48,28,125,0.1)" }}></span>
              <span style={_M.bar("70%", 0.15)}></span>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
  "Chip": () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 4, justifyContent: "center", maxWidth: 200 }}>
      <span style={{ padding: "4px 9px", borderRadius: 999, background: "var(--amber)", color: "var(--primary-dark)", fontFamily: "var(--font-display)", fontSize: 9, fontWeight: 800 }}>All ×</span>
      <span style={{ padding: "4px 9px", borderRadius: 999, background: "#fff", color: "var(--primary-dark)", fontFamily: "var(--font-display)", fontSize: 9, fontWeight: 700 }}>Identity</span>
      <span style={{ padding: "4px 9px", borderRadius: 999, color: "#fff", border: "1.5px solid rgba(255,255,255,0.4)", fontFamily: "var(--font-display)", fontSize: 9, fontWeight: 700 }}>Property</span>
      <span style={{ padding: "4px 9px", borderRadius: 999, color: "#fff", border: "1.5px solid rgba(255,255,255,0.4)", fontFamily: "var(--font-display)", fontSize: 9, fontWeight: 700 }}>Welfare</span>
    </div>
  ),
  "Chip Group": () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 5, alignItems: "center" }}>
      <div style={{ display: "flex", gap: 4 }}>
        <span style={{ padding: "3px 8px", borderRadius: 999, background: "var(--amber)", color: "var(--primary-dark)", fontFamily: "var(--font-display)", fontSize: 8, fontWeight: 800 }}>Aadhaar</span>
        <span style={{ padding: "3px 8px", borderRadius: 999, background: "#fff", color: "var(--primary-dark)", fontFamily: "var(--font-display)", fontSize: 8, fontWeight: 700 }}>PAN</span>
        <span style={{ padding: "3px 8px", borderRadius: 999, color: "#fff", border: "1.5px solid rgba(255,255,255,0.4)", fontFamily: "var(--font-display)", fontSize: 8, fontWeight: 700 }}>Voter</span>
      </div>
      <div style={{ display: "flex", gap: 4 }}>
        <span style={{ padding: "3px 8px", borderRadius: 999, color: "#fff", border: "1.5px solid rgba(255,255,255,0.4)", fontFamily: "var(--font-display)", fontSize: 8, fontWeight: 700 }}>Passport</span>
        <span style={{ padding: "3px 8px", borderRadius: 999, background: "var(--amber)", color: "var(--primary-dark)", fontFamily: "var(--font-display)", fontSize: 8, fontWeight: 800 }}>Active</span>
      </div>
    </div>
  ),

  // ─── Utility ─────────────────────────────────────────────────────
  "Divider": () => (
    <div style={{ width: 180, display: "flex", alignItems: "center", gap: 10 }}>
      <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.5))" }}></div>
      <span style={{ width: 12, height: 12, background: "var(--amber)", transform: "rotate(45deg)", boxShadow: "0 0 12px rgba(255,168,39,0.6)" }}></span>
      <div style={{ flex: 1, height: 1, background: "linear-gradient(-90deg, transparent, rgba(255,255,255,0.5))" }}></div>
    </div>
  ),
  "Icon Button": () => (
    <div style={{ display: "flex", gap: 6 }}>
      <span style={{ width: 30, height: 30, borderRadius: 7, background: "var(--amber)", color: "var(--primary-dark)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 16, boxShadow: "0 6px 14px -4px rgba(255,168,39,0.6)" }}>+</span>
      <span style={{ width: 30, height: 30, borderRadius: 7, background: "#fff", color: "var(--primary-dark)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 14, boxShadow: "0 6px 14px -6px rgba(48,28,125,0.4)" }}>⌕</span>
      <span style={{ width: 30, height: 30, borderRadius: 7, background: "rgba(255,255,255,0.18)", color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 14 }}>⋮</span>
    </div>
  ),
  "Footer": () => (
    <div style={{ width: 180, background: "var(--primary-dark)", borderRadius: 6, padding: "8px 10px", display: "flex", flexDirection: "column", gap: 5 }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, color: "#fff", fontSize: 11, letterSpacing: "-0.02em" }}>UX4G</span>
        <span style={{ fontSize: 7, color: "rgba(255,255,255,0.5)", letterSpacing: "0.05em" }}>NeGD · MeitY</span>
      </div>
      <div style={{ display: "flex", height: 2, borderRadius: 1, overflow: "hidden" }}>
        <span style={{ flex: 1, background: "#FF9933" }}></span>
        <span style={{ flex: 1, background: "#FFFFFF" }}></span>
        <span style={{ flex: 1, background: "#138808" }}></span>
      </div>
    </div>
  ),
  "Social Links": () => (
    <div style={{ display: "flex", gap: 6 }}>
      {[{l:"X",c:"#0E0E12"},{l:"in",c:"#0A66C2"},{l:"ⓕ",c:"#1877F2"},{l:"▶",c:"#FF0000"}].map((s, i) => (
        <span key={i} style={{ width: 30, height: 30, borderRadius: 7, background: s.c, color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 13, boxShadow: "0 6px 14px -6px rgba(0,0,0,0.5)" }}>{s.l}</span>
      ))}
    </div>
  ),
  "Accessibility Bar": () => (
    <div style={{ ..._M.card, padding: "6px 8px", borderRadius: 8, display: "flex", gap: 8, alignItems: "center" }}>
      <div style={{ display: "flex", gap: 3 }}>
        <span style={{ padding: "3px 6px", borderRadius: 4, background: "rgba(48,28,125,0.06)", ..._M.label(9) }}>A−</span>
        <span style={{ padding: "3px 6px", borderRadius: 4, background: "var(--amber)", ..._M.label(9) }}>A</span>
        <span style={{ padding: "3px 6px", borderRadius: 4, background: "rgba(48,28,125,0.06)", ..._M.label(9) }}>A+</span>
      </div>
      <span style={{ width: 1, height: 14, background: "rgba(48,28,125,0.12)" }}></span>
      <div style={{ display: "flex", gap: 3 }}>
        <span style={{ padding: "3px 6px", borderRadius: 4, background: "var(--amber)", ..._M.label(9) }}>EN</span>
        <span style={{ padding: "3px 6px", borderRadius: 4, background: "rgba(48,28,125,0.06)", ..._M.label(9) }}>हि</span>
      </div>
    </div>
  ),

  // ─── Capture ─────────────────────────────────────────────────────
  "Biometric Capture": () => (
    <div style={{ position: "relative", width: 80, height: 80, borderRadius: 12, background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 12px 24px -8px rgba(48,28,125,0.5)" }}>
      {["tl","tr","bl","br"].map(c => (
        <span key={c} style={{
          position: "absolute", width: 12, height: 12,
          borderColor: "var(--amber)", borderStyle: "solid",
          borderWidth: c === "tl" ? "2.5px 0 0 2.5px" : c === "tr" ? "2.5px 2.5px 0 0" : c === "bl" ? "0 0 2.5px 2.5px" : "0 2.5px 2.5px 0",
          top: c.startsWith("t") ? 6 : "auto",
          bottom: c.startsWith("b") ? 6 : "auto",
          left: c.endsWith("l") ? 6 : "auto",
          right: c.endsWith("r") ? 6 : "auto",
        }}></span>
      ))}
      <svg width="36" height="42" viewBox="0 0 80 96" fill="none">
        <path d="M40 8c-16 0-28 12-28 28v18c0 9 2 18 6 26" stroke="var(--primary-dark)" strokeWidth="3" strokeLinecap="round"/>
        <path d="M40 20c-10 0-18 8-18 18v18c0 7 1 14 4 20" stroke="var(--primary-dark)" strokeWidth="3" strokeLinecap="round"/>
        <path d="M40 32c-6 0-10 4-10 10v14c0 6 1 12 3 16" stroke="var(--amber)" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    </div>
  ),
};

/* ───────────────── Legacy preview library kept (unused inline) ───────────────── */
const _PreviewsUnused = {
  /* ── Form Elements ── */
  Button: () => (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
      <button className="ux4g-btn-primary ux4g-btn-md">Submit</button>
      <button className="ux4g-btn-outline-primary ux4g-btn-md">Cancel</button>
    </div>
  ),
  Link: () => (
    <a className="ux4g-text-link-md" href="#" onClick={e => e.preventDefault()}>
      View grievance status →
    </a>
  ),
  Input: () => (
    <div className="ux4g-input-container ux4g-input-md" style={{ width: "100%" }}>
      <div className="ux4g-input">
        <input type="text" className="ux4g-input-input" defaultValue="+91 98765 43210" readOnly />
      </div>
    </div>
  ),
  Textarea: () => (
    <textarea
      className="ux4g-textarea"
      rows={3}
      readOnly
      style={{ width: "100%", boxSizing: "border-box", resize: "none" }}
      defaultValue="Briefly describe the issue you faced with the service…"
    />
  ),
  Checkbox: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <label className="ux4g-checkbox">
        <input type="checkbox" className="ux4g-checkbox-input" defaultChecked readOnly />
        <div className="ux4g-checkbox-control"><span className="ux4g-checkmark"></span></div>
        <div className="ux4g-checkbox-content">
          <div className="ux4g-checkbox-header"><span className="ux4g-checkbox-label">I consent under DPDP Act 2023</span></div>
        </div>
      </label>
      <label className="ux4g-checkbox">
        <input type="checkbox" className="ux4g-checkbox-input" readOnly />
        <div className="ux4g-checkbox-control"><span className="ux4g-checkmark"></span></div>
        <div className="ux4g-checkbox-content">
          <div className="ux4g-checkbox-header"><span className="ux4g-checkbox-label">Send SMS updates</span></div>
        </div>
      </label>
    </div>
  ),
  Radio: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <label className="ux4g-radio">
        <input type="radio" name="auth-pv" className="ux4g-radio-input" defaultChecked readOnly />
        <div className="ux4g-radio-control"><span className="ux4g-radiomark"></span></div>
        <div className="ux4g-radio-content">
          <div className="ux4g-radio-header"><span className="ux4g-radio-label">Aadhaar OTP</span></div>
        </div>
      </label>
      <label className="ux4g-radio">
        <input type="radio" name="auth-pv" className="ux4g-radio-input" readOnly />
        <div className="ux4g-radio-control"><span className="ux4g-radiomark"></span></div>
        <div className="ux4g-radio-content">
          <div className="ux4g-radio-header"><span className="ux4g-radio-label">DigiLocker SSO</span></div>
        </div>
      </label>
    </div>
  ),
  Toggle: () => (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <label className="ux4g-switch">
        <input type="checkbox" className="ux4g-switch-input" defaultChecked readOnly />
        <div className="ux4g-switch-control">
          <div className="ux4g-switch-track">
            <div className="ux4g-switch-thumb"></div>
          </div>
        </div>
      </label>
      <span style={{ fontSize: 13, color: "var(--ux4g-text-neutral-primary)" }}>High-contrast</span>
    </div>
  ),
  Dropdown: () => (
    <div className="ux4g-dropdown" style={{ width: "100%" }}>
      <div className="ux4g-dropdown-control">
        <div className="ux4g-dropdown-value">
          <span className="ux4g-dropdown-text">English (en-IN)</span>
        </div>
        <span className="ux4g-dropdown-caret ux4g-icon-outlined">arrow_drop_down</span>
      </div>
    </div>
  ),
  Combobox: () => (
    <div className="ux4g-dropdown" style={{ width: "100%" }}>
      <div className="ux4g-dropdown-control">
        <div className="ux4g-dropdown-value">
          <span className="ux4g-dropdown-text is-placeholder">District…</span>
        </div>
        <span className="ux4g-dropdown-caret ux4g-icon-outlined">arrow_drop_down</span>
      </div>
    </div>
  ),
  Search: () => (
    <div className="ux4g-search" style={{ width: "100%" }}>
      <span className="ux4g-search-leading-icon ux4g-icon-outlined">search</span>
      <input type="text" className="ux4g-search-input" placeholder="Search 55+ components" readOnly />
    </div>
  ),
  Slider: () => (
    <div className="ux4g-slider-field ux4g-slider-md" style={{ width: "100%", padding: "0 4px" }}>
      <div className="ux4g-slider ux4g-slider-md">
        <input type="range" className="ux4g-slider-input" min="0" max="100" defaultValue="62" readOnly />
        <div className="ux4g-slider-track">
          <div className="ux4g-slider-fill" style={{ width: "62%" }}></div>
          <div className="ux4g-slider-thumb" style={{ left: "62%" }}></div>
        </div>
      </div>
    </div>
  ),
  FormFieldGroup: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 4, width: "100%" }}>
      <label style={{ fontSize: 13, fontWeight: 500, color: "var(--ux4g-text-neutral-primary)" }}>Aadhaar number</label>
      <div className="ux4g-input-container ux4g-input-md" style={{ width: "100%" }}>
        <div className="ux4g-input">
          <input type="text" className="ux4g-input-input" defaultValue="XXXX XXXX 4271" readOnly />
        </div>
      </div>
      <span style={{ fontSize: 11, color: "var(--ux4g-text-neutral-secondary)" }}>12 digits · verified</span>
    </div>
  ),
  OTP: () => (
    <div className="pv-otp">
      {["4", "8", "3", "7", "", ""].map((v, i) => (
        <div key={i} className={"pv-otp-cell" + (v ? " f" : "") + (i === 4 ? " active" : "")}>{v}</div>
      ))}
    </div>
  ),
  DatePicker: () => (
    <div className="ux4g-input-container ux4g-input-md" style={{ width: "100%" }}>
      <div className="ux4g-input">
        <span className="ux4g-input-leading-icon ux4g-icon-outlined">calendar_today</span>
        <input type="text" className="ux4g-input-input" defaultValue="28 / 04 / 2026" readOnly />
      </div>
    </div>
  ),

  /* ── Feedback ── */
  AlertToast: () => (
    <div className="ux4g-alert ux4g-alert-success">
      <span className="ux4g-alert-icon ux4g-icon-outlined">check_circle</span>
      <div className="ux4g-alert-content">
        <p className="ux4g-alert-title">Application submitted</p>
        <p className="ux4g-alert-message">Reference AP-2026-DM-83942</p>
      </div>
    </div>
  ),
  Progress: () => (
    <div className="pv-prog">
      <div className="track"><div className="fill"></div></div>
      <div className="meta"><span>STEP 4 OF 6</span><span>68%</span></div>
    </div>
  ),
  Rating: () => (
    <div style={{ textAlign: "center" }}>
      <div className="pv-rate">
        <span className="star">★</span><span className="star">★</span><span className="star">★</span><span className="star">★</span><span className="star dim">★</span>
      </div>
      <div style={{ fontSize: 11, color: "var(--ux4g-text-neutral-secondary)", marginTop: 6, letterSpacing: "0.04em" }}>4.2 · 1,284 RESPONSES</div>
    </div>
  ),
  DraftBanner: () => (
    <div className="pv-draft">
      <span className="ti">Draft saved</span>
      <span className="sb">2 MIN AGO</span>
    </div>
  ),
  SLAProgress: () => (
    <div className="pv-sla">
      <div className="head"><span>Income certificate</span><span className="rem">18d left</span></div>
      <div className="bar"><div className="seg"></div></div>
    </div>
  ),
  Spinner: () => (
    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
      <span className="ux4g-spinner ux4g-spinner-sm"></span>
      <span className="ux4g-spinner ux4g-spinner-md"></span>
      <span className="ux4g-spinner ux4g-spinner-lg"></span>
    </div>
  ),
  Badge: () => (
    <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
      <span className="ux4g-badge-dot-primary ux4g-badge-m"></span>
      <span className="ux4g-badge-dot-success ux4g-badge-m"></span>
      <span className="ux4g-badge-dot-warning ux4g-badge-m"></span>
      <span className="ux4g-badge-dot-danger ux4g-badge-m"></span>
      <span className="ux4g-badge-digit-primary ux4g-badge-m">3</span>
    </div>
  ),
  Tag: () => (
    <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
      <span className="ux4g-tag-tonal-primary">DPDP 2023</span>
      <span className="ux4g-tag-tonal-success">Verified</span>
      <span className="ux4g-tag-tonal-neutral">v3.0</span>
    </div>
  ),
  EmptyState: () => (
    <div className="pv-empty">
      <div className="box">∅</div>
      <div className="lbl">No applications yet</div>
    </div>
  ),
  Modal: () => (
    <div className="ux4g-modal-box ux4g-modal-s" style={{ position: "relative", display: "flex", flexDirection: "column" }}>
      <div className="ux4g-modal-header">
        <div className="ux4g-modal-header-title-content">
          <p className="ux4g-modal-header-title">Confirm submission</p>
          <p className="ux4g-modal-header-sub-heading">Once submitted, this cannot be edited.</p>
        </div>
      </div>
      <div className="ux4g-modal-footer" style={{ display: "flex", gap: 8, justifyContent: "flex-end" }}>
        <button className="ux4g-btn-outline-primary ux4g-btn-md">Cancel</button>
        <button className="ux4g-btn-primary ux4g-btn-md">Submit</button>
      </div>
    </div>
  ),
  Dialog: () => (
    <div className="ux4g-alert ux4g-alert-warning">
      <span className="ux4g-alert-icon ux4g-icon-outlined">warning</span>
      <div className="ux4g-alert-content">
        <p className="ux4g-alert-title">Discard draft?</p>
        <p className="ux4g-alert-message">Your changes since 09:14 will be lost.</p>
      </div>
    </div>
  ),
  Popover: () => (
    <div className="pv-pop">
      <div className="ti">Service availability</div>
      <div className="sb">This service is online for all 36 states and UTs from Apr 2026.</div>
    </div>
  ),

  /* ── Data Display ── */
  FileUpload: () => (
    <div className="pv-upload">
      <div className="ic-box">PDF</div>
      <div>
        <div className="lbl">aadhaar-card.pdf</div>
        <div className="sb">312 KB · UPLOADED</div>
      </div>
    </div>
  ),
  AutoComplete: () => (
    <div className="ux4g-search" style={{ width: "100%" }}>
      <span className="ux4g-search-leading-icon ux4g-icon-outlined">person_search</span>
      <input type="text" className="ux4g-search-input" defaultValue="Anjali Bha" readOnly />
    </div>
  ),
  Card: () => (
    <div className="ux4g-card ux4g-card-solid" style={{ width: "100%" }}>
      <div className="ux4g-card-body">
        <h5 className="ux4g-card-title">Income Certificate</h5>
        <h5 className="ux4g-card-sub-title">Issued by SDM office</h5>
        <div style={{ marginTop: 8 }}>
          <span className="ux4g-tag-tonal-success">Verified</span>
        </div>
      </div>
    </div>
  ),
  Table: () => (
    <div className="pv-table">
      <div className="h"><span>Service</span><span>Status</span><span>SLA</span></div>
      <div className="r"><span>Income cert.</span><span className="ok">Verified</span><span>18d</span></div>
      <div className="r"><span>PAN update</span><span className="ok">Active</span><span>4d</span></div>
    </div>
  ),
  Accordion: () => (
    <div className="ux4g-accordion">
      <div className="ux4g-accordion__item">
        <h2 className="ux4g-accordion__header" style={{ margin: 0 }}>
          <button className="ux4g-accordion__button">
            <span className="ux4g-accordion__title">Required documents</span>
          </button>
        </h2>
        <div className="ux4g-accordion__collapse show">
          <div className="ux4g-accordion__body" style={{ fontSize: 12 }}>Aadhaar, income proof</div>
        </div>
      </div>
      <div className="ux4g-accordion__item">
        <h2 className="ux4g-accordion__header" style={{ margin: 0 }}>
          <button className="ux4g-accordion__button collapsed">
            <span className="ux4g-accordion__title">Eligibility criteria</span>
          </button>
        </h2>
      </div>
    </div>
  ),
  Carousel: () => (
    <div>
      <div className="pv-carousel">
        <div className="slide"></div>
        <div className="slide main"></div>
        <div className="slide"></div>
      </div>
      <div className="pv-carousel" style={{ marginTop: 0 }}>
        <div className="dots" style={{ margin: "8px auto 0" }}>
          <span className="d"></span><span className="d on"></span><span className="d"></span><span className="d"></span>
        </div>
      </div>
    </div>
  ),
  StatusPipeline: () => (
    <ul className="ux4g-stepper ux4g-stepper-horizontal ux4g-stepper-small" style={{ width: "100%", paddingLeft: 0, margin: 0 }}>
      <li className="ux4g-stepper-step ux4g-stepper-completed ux4g-stepper-done">
        <span className="ux4g-stepper-head-icon">1</span>
      </li>
      <li className="ux4g-stepper-step ux4g-stepper-completed ux4g-stepper-done">
        <span className="ux4g-stepper-head-icon">2</span>
      </li>
      <li className="ux4g-stepper-step ux4g-stepper-completed">
        <span className="ux4g-stepper-head-icon ux4g-stepper-head-icon-active">
          <span className="ux4g-stepper-head-check ux4g-stepper-head-check-active">3</span>
        </span>
      </li>
      <li className="ux4g-stepper-step">
        <span className="ux4g-stepper-head-icon"><span className="ux4g-stepper-head-check">4</span></span>
      </li>
    </ul>
  ),
  EscalationTree: () => (
    <div className="pv-tree">
      <div className="item lv1">Citizen complaint</div>
      <div className="item l2 active"><span className="tw">└</span>SDM office (Lv. 1)</div>
      <div className="item l3"><span className="tw">└</span>DM office (Lv. 2)</div>
      <div className="item l3"><span className="tw">└</span>Commissioner (Lv. 3)</div>
    </div>
  ),
  JourneyTimeline: () => (
    <div className="pv-jt">
      <div className="step">
        <div className="marker"><div className="dot"></div><div className="ln done"></div></div>
        <div className="info"><div className="ti">Application filed</div><div className="meta">14 APR · 09:24</div></div>
      </div>
      <div className="step">
        <div className="marker"><div className="dot act"></div><div className="ln"></div></div>
        <div className="info"><div className="ti">Field verification</div><div className="meta">IN PROGRESS</div></div>
      </div>
      <div className="step">
        <div className="marker"><div className="dot pen"></div></div>
        <div className="info"><div className="ti">Certificate issued</div><div className="meta">PENDING</div></div>
      </div>
    </div>
  ),
  Checklist: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {[["Aadhaar verified", true], ["Address proof uploaded", true], ["Photograph attached", false]].map(([label, checked], i) => (
        <label key={i} className="ux4g-checkbox">
          <input type="checkbox" className="ux4g-checkbox-input" defaultChecked={checked} readOnly />
          <div className="ux4g-checkbox-control"><span className="ux4g-checkmark"></span></div>
          <div className="ux4g-checkbox-content">
            <div className="ux4g-checkbox-header"><span className="ux4g-checkbox-label">{label}</span></div>
          </div>
        </label>
      ))}
    </div>
  ),
  SlotGrid: () => (
    <div className="pv-slots">
      <div className="slot">09:00</div>
      <div className="slot full">10:00</div>
      <div className="slot on">11:00</div>
      <div className="slot">12:00</div>
      <div className="slot">14:00</div>
      <div className="slot">15:00</div>
    </div>
  ),
  ResultListRow: () => (
    <div className="pv-rl">
      <div className="ti">Pan card correction · ITD</div>
      <div className="meta"><span>FILED 12 APR</span><span className="ok">● ACTIVE</span></div>
    </div>
  ),
  ReceiptCard: () => (
    <div className="pv-receipt">
      <div className="hdr">Receipt · RCT-89234</div>
      <div className="amt">₹50.00</div>
      <div className="sb">Property tax · Q4 FY26</div>
      <div className="seal">PAID</div>
    </div>
  ),
  List: () => (
    <div className="pv-list">
      <div className="item"><div className="av">AB</div>Anjali Bhattacharya</div>
      <div className="item"><div className="av">VR</div>Vikram Reddy</div>
      <div className="item"><div className="av">PJ</div>Priya Joshi</div>
    </div>
  ),
  DigiLocker: () => (
    <div className="pv-dl">
      <div className="sq">DL</div>
      <div>
        <div className="ti">Add to DigiLocker</div>
        <div className="sb">SECURE · GOVT VERIFIED</div>
      </div>
    </div>
  ),
  CalendarEvent: () => (
    <div className="pv-cal">
      <div className="row">
        <div className="day">
          <span className="m">MAY</span>
          <span className="d">12</span>
        </div>
        <div className="info">
          <div className="ti">Verification appointment</div>
          <div className="sb">10:30, 11:00 IST</div>
        </div>
      </div>
    </div>
  ),
  Payment: () => (
    <div className="pv-pay">
      <div className="head"><span>PROPERTY TAX</span><span>₹</span></div>
      <div className="amt">₹2,450</div>
      <div className="opts">
        <span className="o on">UPI</span>
        <span className="o">CARD</span>
        <span className="o">NB</span>
      </div>
    </div>
  ),
  Chart: () => (
    <div className="pv-chart">
      <div className="bar muted" style={{ height: "30%" }}></div>
      <div className="bar muted" style={{ height: "45%" }}></div>
      <div className="bar" style={{ height: "62%" }}></div>
      <div className="bar" style={{ height: "80%" }}></div>
      <div className="bar amber" style={{ height: "92%" }}></div>
      <div className="bar muted" style={{ height: "55%" }}></div>
    </div>
  ),
  Scheduler: () => (
    <div className="pv-sched">
      <div className="top">MAY 2026</div>
      <div className="grid">
        {["S","M","T","W","T","F","S"].map((d, i) => (
          <div key={"h"+i} className="c muted">{d}</div>
        ))}
        <div className="c muted">28</div><div className="c muted">29</div><div className="c muted">30</div>
        <div className="c">1</div><div className="c">2</div><div className="c">3</div><div className="c">4</div>
        <div className="c">5</div><div className="c dot">6</div><div className="c">7</div>
        <div className="c">8</div><div className="c on">9</div><div className="c">10</div><div className="c">11</div>
      </div>
    </div>
  ),

  /* ── Navigation ── */
  Chip: () => (
    <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
      <span className="ux4g-filter-chip-md active">All</span>
      <span className="ux4g-filter-chip-md">Live</span>
      <span className="ux4g-filter-chip-md">Coming</span>
    </div>
  ),
  ChipGroup: () => (
    <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
      <span className="ux4g-filter-chip-md active">All services</span>
      <span className="ux4g-filter-chip-md">Identity</span>
      <span className="ux4g-filter-chip-md">Property</span>
      <span className="ux4g-filter-chip-md">Welfare</span>
    </div>
  ),
  Pagination: () => (
    <div className="ux4g-pagination-wrapper">
      <div className="ux4g-pagination">
        <button className="ux4g-page-nav prev ux4g-icon-outlined" disabled>chevron_left</button>
        <button className="ux4g-page-number">1</button>
        <button className="ux4g-page-number active">2</button>
        <button className="ux4g-page-number">3</button>
        <span className="ux4g-page-number-more">…</span>
        <button className="ux4g-page-number">9</button>
        <button className="ux4g-page-nav next ux4g-icon-outlined">chevron_right</button>
      </div>
    </div>
  ),
  Stepper: () => (
    <ul className="ux4g-stepper ux4g-stepper-horizontal ux4g-stepper-small" style={{ width: "100%", paddingLeft: 0, margin: 0 }}>
      <li className="ux4g-stepper-step ux4g-stepper-completed ux4g-stepper-done">
        <span className="ux4g-stepper-head-icon">1</span>
      </li>
      <li className="ux4g-stepper-step ux4g-stepper-completed">
        <span className="ux4g-stepper-head-icon ux4g-stepper-head-icon-active">
          <span className="ux4g-stepper-head-check ux4g-stepper-head-check-active">2</span>
        </span>
      </li>
      <li className="ux4g-stepper-step">
        <span className="ux4g-stepper-head-icon"><span className="ux4g-stepper-head-check">3</span></span>
      </li>
      <li className="ux4g-stepper-step">
        <span className="ux4g-stepper-head-icon"><span className="ux4g-stepper-head-check">4</span></span>
      </li>
    </ul>
  ),
  Tab: () => (
    <div className="ux4g-tab ux4g-tab-underline ux4g-tab-md">
      <ul className="ux4g-tab-list" role="tablist" style={{ listStyle: "none", padding: 0, margin: 0 }}>
        <li className="ux4g-tab-item is-active" role="tab" tabIndex="0">Overview</li>
        <li className="ux4g-tab-item" role="tab" tabIndex="-1">Documents</li>
        <li className="ux4g-tab-item" role="tab" tabIndex="-1">History</li>
      </ul>
    </div>
  ),
  Segmented: () => (
    <div className="ux4g-tab ux4g-tab-pill ux4g-tab-sm">
      <ul className="ux4g-tab-list" role="tablist" style={{ listStyle: "none", padding: 0, margin: 0 }}>
        <li className="ux4g-tab-item is-active" role="tab">Today</li>
        <li className="ux4g-tab-item" role="tab">Week</li>
        <li className="ux4g-tab-item" role="tab">Month</li>
      </ul>
    </div>
  ),
  Navbar: () => (
    <div className="pv-nav">
      <span className="lg">UX4G</span>
      <div className="nv">
        <span>FND</span><span className="on">COMP</span><span>PAT</span>
      </div>
    </div>
  ),
  Breadcrumb: () => (
    <nav className="ux4g-breadcrumb ux4g-breadcrumb-divider">
      <ol className="ux4g-breadcrumb-list" style={{ display: "flex", alignItems: "center", flexWrap: "wrap", listStyle: "none", padding: 0, margin: 0 }}>
        <li className="ux4g-breadcrumb-item" style={{ display: "flex", alignItems: "center" }}>
          <a className="ux4g-breadcrumb-link" href="#" onClick={e => e.preventDefault()}>Services</a>
        </li>
        <li className="ux4g-breadcrumb-item" style={{ display: "flex", alignItems: "center" }}>
          <a className="ux4g-breadcrumb-link" href="#" onClick={e => e.preventDefault()}>Identity</a>
        </li>
        <li className="ux4g-breadcrumb-item active">Aadhaar</li>
      </ol>
    </nav>
  ),
  Drawer: () => (
    <div className="pv-drawer-wrap">
      <div className="pv-drawer">
        <div className="ti">Filters</div>
        <div className="ln"></div>
        <div className="ln"></div>
        <div className="ln"></div>
      </div>
    </div>
  ),

  /* ── Capture & Verification ── */
  Biometric: () => (
    <div className="pv-bio">
      <span className="corner tl"></span><span className="corner tr"></span>
      <span className="corner bl"></span><span className="corner br"></span>
      <span className="glyph">⌘</span>
    </div>
  ),

  /* ── Utility ── */
  Footer: () => (
    <div className="pv-foot">
      <div className="wm">UX4G</div>
      <div className="tri"><span className="s"></span><span className="w"></span><span className="g"></span></div>
      <div className="cp">© 2026 · NEGD · MEITY</div>
    </div>
  ),
  Divider: () => (
    <div style={{ width: "100%", display: "flex", alignItems: "center", gap: 8 }}>
      <div className="ux4g-divider-horizontal" style={{ flex: 1 }}></div>
      <span style={{ fontSize: 12, color: "var(--ux4g-text-neutral-secondary)", whiteSpace: "nowrap" }}>OR CONTINUE WITH</span>
      <div className="ux4g-divider-horizontal" style={{ flex: 1 }}></div>
    </div>
  ),
  Avatar: () => (
    <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
      <span className="ux4g-avatar ux4g-avatar-m">AB</span>
      <span className="ux4g-avatar ux4g-avatar-m">VR</span>
      <span className="ux4g-avatar ux4g-avatar-m">PJ</span>
      <span className="ux4g-avatar ux4g-avatar-m">+6</span>
    </div>
  ),
  Image: () => <div className="pv-img">DOCUMENT SCAN</div>,
  IconButton: () => (
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <button className="ux4g-icon-btn ux4g-icon-btn-md">
        <span className="ux4g-icon-outlined">add</span>
      </button>
      <button className="ux4g-icon-btn ux4g-icon-btn-md">
        <span className="ux4g-icon-outlined">search</span>
      </button>
      <button className="ux4g-icon-btn ux4g-icon-btn-md">
        <span className="ux4g-icon-outlined">tune</span>
      </button>
      <button className="ux4g-icon-btn ux4g-icon-btn-md">
        <span className="ux4g-icon-outlined">more_vert</span>
      </button>
    </div>
  ),
  Tooltip: () => (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
      <div className="ux4g-tooltip ux4g-tooltip-s show" style={{ position: "relative", transform: "none" }}>
        Verified by Aadhaar OTP
      </div>
      <button className="ux4g-btn-outline-primary ux4g-btn-md">Hover me</button>
    </div>
  ),
  SocialLinks: () => (
    <div className="pv-soc">
      <div className="ic">X</div>
      <div className="ic">in</div>
      <div className="ic">G</div>
      <div className="ic">▶</div>
    </div>
  ),
  AccessibilityBar: () => (
    <div className="pv-ab">
      <div className="grp"><span className="b">A−</span><span className="b on">A</span><span className="b">A+</span></div>
      <div className="grp"><span className="b">हि</span><span className="b">EN</span></div>
      <div className="grp"><span className="b">☼</span><span className="b">☾</span></div>
    </div>
  ),
  FocusRing: () => <div className="pv-focus">Submit</div>,
};

/* ───────────────── Component → page route map ───────────────── */
const PAGE_MAP = {
  "Button": "UX4G Button.html",
  "Input": "UX4G Input.html",
  "Textarea": "UX4G Textarea.html",
  "Checkbox": "UX4G Checkbox.html",
  "Radio Button": "UX4G Radio.html",
  "Switch / Toggle": "UX4G Switch.html",
  "Dropdown Menu": "UX4G Dropdown.html",
  "Combobox": "UX4G Combobox.html",
  "Search": "UX4G Search.html",
  "Slider": "UX4G Slider.html",
  "Form Field Group": "UX4G Form Field Group.html",
  "Input OTP": "UX4G Input OTP.html",
  "Date Picker": "UX4G Date Picker.html",
  "Time Picker": "UX4G Time Picker.html",
  "File Upload": "UX4G File Upload.html",
  "Link": "UX4G Link.html",
  "Alert / Toast": "UX4G Alert.html",
  "Badge": "UX4G Badge.html",
  "Tag": "UX4G Tag.html",
  "Spinner": "UX4G Spinner.html",
  "Progress Indicator": "UX4G Progress.html",
  "Tooltip": "UX4G Tooltip.html",
  "Modal": "UX4G Modal.html",
  "Dialog": "UX4G Dialog.html",
  "Popover": "UX4G Popover.html",
  "Empty State": "UX4G Empty State.html",
  "Card": "UX4G Card.html",
  "Table": "UX4G Table.html",
  "Accordion": "UX4G Accordion.html",
  "List": "UX4G List.html",
  "Avatar": "UX4G Avatar.html",
  "Image": "UX4G Image.html",
  "Breadcrumb": "UX4G Breadcrumb.html",
  "Tab": "UX4G Tab.html",
  "Stepper": "UX4G Stepper.html",
  "Pagination": "UX4G Pagination.html",
  "Navbar": "UX4G Navbar.html",
  "Drawer": "UX4G Drawer.html",
  "Chip": "UX4G Chip.html",
  "Chip Group": "UX4G Chip Group.html",
  "Divider": "UX4G Divider.html",
  "Icon Button": "UX4G Icon Button.html",
  "Footer": "UX4G Footer.html",
  "Accessibility Bar": "UX4G Accessibility Bar.html",
  "Feedback (Rating)": "UX4G Feedback Rating.html",
  "Draft Status Banner": "UX4G Draft Status Banner.html",
  "SLA Progress Indicator": "UX4G SLA Progress Indicator.html",
  "Carousel": "UX4G Carousel.html",
  "Status Pipeline": "UX4G Status Pipeline.html",
  "Escalation Tree": "UX4G Escalation Tree.html",
  "Journey Timeline": "UX4G Journey Timeline.html",
  "Checklist": "UX4G Checklist.html",
  "Slot Grid": "UX4G Slot Grid.html",
  "Social Links": "UX4G Social Links.html",
  "Biometric Capture": "UX4G Biometric Capture.html",
};

/* ───────────────── Banner variant map (mirrors component pages) ───────────────── */
const BANNER_VARIANT = {
  "Button": "button",
  "Input": "input",
  "Textarea": "input",
  "Link": "input",
  "Form Field Group": "input",
  "Search": "search",
  "Combobox": "dropdown",
  "Dropdown Menu": "dropdown",
  "Checkbox": "checkbox",
  "Radio Button": "radio",
  "Switch / Toggle": "toggle",
  "Slider": "slider",
  "Input OTP": "otp",
  "Date Picker": "card",
  "Time Picker": "card",
  "File Upload": "card",
  "Image": "card",
  "Card": "card",
  "Empty State": "card",
  "List": "card",
  "Carousel": "card",
  "Biometric Capture": "card",
  "Alert / Toast": "alert",
  "Draft Status Banner": "alert",
  "Badge": "badge",
  "Tag": "badge",
  "Chip": "badge",
  "Chip Group": "badge",
  "Feedback (Rating)": "badge",
  "Spinner": "spinner",
  "Progress Indicator": "spinner",
  "SLA Progress Indicator": "spinner",
  "Modal": "modal",
  "Dialog": "modal",
  "Popover": "modal",
  "Drawer": "modal",
  "Table": "table",
  "Slot Grid": "table",
  "Accordion": "accordion",
  "Checklist": "accordion",
  "Stepper": "stepper",
  "Status Pipeline": "stepper",
  "Pagination": "stepper",
  "Icon Button": "stepper",
  "Escalation Tree": "stepper",
  "Journey Timeline": "stepper",
  "Tab": "tab",
  "Navbar": "tab",
  "Accessibility Bar": "tab",
  "Breadcrumb": "breadcrumb",
  "Avatar": "avatar",
  "Social Links": "avatar",
  "Tooltip": "tooltip",
  "Divider": "divider",
  "Footer": "divider",
};

/* ───────────────── Group data (mirrors the per-page quick-nav) ───────────────── */
const GROUPS = [
  {
    id: "form",
    name: "Form Elements",
    short: "Inputs, controls and selection for every form.",
    desc: "Inputs, controls and selection — the foundation of every citizen-facing form, from a 2-field login to a 40-field welfare application.",
    components: [
      { name: "Button",            desc: "Primary action surface to commit choices and progress through a flow." },
      { name: "Input",             desc: "Single-line text entry — prefix, suffix, validation and Indic scripts." },
      { name: "Textarea",          desc: "Multi-line input for grievance text, address details and longform fields." },
      { name: "Checkbox",          desc: "Multi-select control for consent, opt-ins and document checklists." },
      { name: "Radio Button",      desc: "Single-choice control for mutually exclusive options, e.g. auth method." },
      { name: "Switch / Toggle",   desc: "Immediate-effect on/off control for preferences and accessibility modes." },
      { name: "Dropdown Menu",     desc: "Compact single-select for fixed-length lists like state, district, language." },
      { name: "Combobox",          desc: "Searchable dropdown for long lists, pincodes, districts, organisations." },
      { name: "Search",            desc: "Type-ahead search across services, documents and the component library." },
      { name: "Slider",            desc: "Range and single-thumb input for income brackets, age and filter ranges." },
      { name: "Form Field Group",  desc: "Composed label + input + help text + error — the canonical form unit." },
      { name: "Input OTP",         desc: "6-digit segmented input with auto-advance, paste support and resend timer." },
      { name: "Date Picker",       desc: "Calendar-based date selection — single date or range, DD/MM/YYYY, with month and year quick-jump." },
      { name: "Time Picker",       desc: "Time-of-day entry — scroll hours and minutes, AM/PM or 24-hour, for appointments and reminders." },
      { name: "File Upload",       desc: "Drag-and-drop and click-to-browse with progress, mime checks and previews." },
    ]
  },
  {
    id: "feedback",
    name: "Feedback",
    short: "Status, progress and confirmation, made clear.",
    desc: "Telling people what just happened, what's happening now and what they need to do next — without overwhelming.",
    components: [
      { name: "Alert / Toast",            desc: "Inline and floating notifications across success, warning, danger and info." },
      { name: "Badge",                    desc: "Notification count for nav items, inbox and pending action surfaces." },
      { name: "Tag",                      desc: "Removable label for applied filters, attached documents and category markers." },
      { name: "Spinner",                  desc: "Indeterminate loader for short waits, API calls, validation, search." },
      { name: "Progress Indicator",       desc: "Linear and stepped progress for forms, uploads and multi-page journeys." },
      { name: "Feedback (Rating)",        desc: "Star rating + free-text capture for post-service experience surveys." },
      { name: "Draft Status Banner",      desc: "Persistent banner that confirms drafts are auto-saved and recoverable." },
      { name: "SLA Progress Indicator",   desc: "Right-to-Service Act timer that shows time remaining against statutory deadline." },
      { name: "Empty State",              desc: "Helpful, never apologetic — guides the next action when there's no data." },
      { name: "Tooltip",                  desc: "Contextual hint on hover or focus for icon-button labels and abbreviation expansions." },
      { name: "Modal",                    desc: "Blocking overlay for confirmations, submissions and consent capture." },
      { name: "Dialog",                   desc: "Destructive-action confirmation with explicit accept and dismiss paths." },
      { name: "Popover",                  desc: "Anchored helper for contextual content, date pickers, menus, info." },
    ]
  },
  {
    id: "data",
    name: "Data Display",
    short: "How citizens see their data and progress.",
    desc: "How citizens see their data, their progress and their entitlements — from a single badge to a full case-tracking timeline.",
    components: [
      { name: "Card",              desc: "Surface for a discrete unit of content — service, certificate, scheme." },
      { name: "Table",             desc: "Sortable, paginated rows for transaction history, applications and audit logs." },
      { name: "Accordion",         desc: "Vertically stacked sections for long-form content like FAQs and eligibility." },
      { name: "Carousel",          desc: "Slideshow for announcements, schemes and featured services." },
      { name: "List",              desc: "Vertically stacked records — people, documents, addresses." },
      { name: "Avatar",            desc: "Profile representation with initials, image and stacked group variants." },
      { name: "Image",             desc: "Loading, error and lazy-load behaviour for document scans and photos." },
      { name: "Status Pipeline",   desc: "Horizontal stepper for application status — Filed → Verified → Issued." },
      { name: "Journey Timeline",  desc: "Vertical chronological log of every event in a citizen's case." },
      { name: "Escalation Tree",   desc: "Hierarchical view of grievance levels — SDM, DM, Commissioner." },
      { name: "Checklist",         desc: "Required-documents view with completion state and inline upload hooks." },
      { name: "Slot Grid",         desc: "Time-slot selection for appointments and biometric capture." },
    ]
  },
  {
    id: "nav",
    name: "Navigation",
    short: "Wayfinding through deep service catalogues.",
    desc: "Wayfinding and orientation components to help citizens move through deep service catalogues.",
    components: [
      { name: "Link",         desc: "In-line and standalone text navigation that respects underline, focus and visited states." },
      { name: "Breadcrumb",   desc: "Where am I, and how did I get here — for deep service catalogues." },
      { name: "Tab",          desc: "Mutually exclusive content panels within a single page." },
      { name: "Stepper",      desc: "Multi-step process indicator with completed, active and pending states." },
      { name: "Pagination",   desc: "Page-by-page navigation for tables and long result sets." },
      { name: "Navbar",       desc: "Top-level navigation with logo, links, language switch and search." },
      { name: "Drawer",       desc: "Side-anchored panel for filters, side navigation and secondary detail." },
      { name: "Chip",         desc: "Toggleable filter for faceted navigation across long service catalogues." },
      { name: "Chip Group",   desc: "Grouped filter chips with single- or multi-select behaviour." },
    ]
  },
  {
    id: "utility",
    name: "Utility",
    short: "Overlays, primitives and accessibility helpers.",
    desc: "The connective tissue — overlays, primitives and accessibility helpers that hold every page together.",
    components: [
      { name: "Divider",            desc: "Visual separator for sections, lists and form groups, with optional label." },
      { name: "Icon Button",        desc: "When you need a Button but have no space for a label. Tooltip + aria-label required." },
      { name: "Footer",             desc: "Statutory disclosures, helplines and the tricolour bar — every page ends here." },
      { name: "Social Links",       desc: "Row of social media icons linking to the department's official accounts." },
      { name: "Accessibility Bar",  desc: "Always-on toolbar surfacing text size, language and contrast controls." },
    ]
  },
  {
    id: "capture",
    name: "Capture & Verification",
    short: "Identity, documents and payments, verified.",
    desc: "The hard bits — pulling identity, documents and payments out of the real world and into a verified record.",
    components: [
      { name: "Biometric Capture",  desc: "Fingerprint and face capture frame with retry, quality check and timeout." },
    ]
  },
];

/* ───────────────── Header ───────────────── */
function Header({ onStub }) {
  return (
    <section className="cx-header">
      <div className="container">
        <div className="cx-crumb">
          <a href="index.html">Home</a>
          <span className="sep">/</span>
          <span className="current">Components</span>
        </div>
        <div className="cx-title-row">
          <h1 className="cx-title">Components</h1>
          <p className="cx-desc">
            Building blocks for every government digital service, from a simple button
            to a complete identity verification flow.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ───────────────── Category cover visuals ─────────────────
   Small SVG illustrations sitting inside each showcase card. Each runs a
   single primary-led ramp with one accent. Elements carrying cx-* classes
   are animated on card hover — see the hover keyframes in components-page.css. */
const CATEGORY_VISUALS = {
  form: (
    <svg viewBox="0 0 220 90" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      <rect x="2" y="12" width="138" height="30" rx="7" fill="#fff" stroke="var(--ux4g-color-primary-200)" strokeWidth="1.4" />
      <rect x="14" y="23" width="54" height="6" rx="3" fill="var(--ux4g-color-primary-300)" />
      <rect className="cx-cursor" x="72" y="19" width="2.4" height="16" rx="1.2" fill="var(--amber)" />
      <rect x="150" y="15" width="50" height="24" rx="12" fill="var(--primary)" />
      <circle className="cx-knob" cx="187" cy="27" r="8" fill="#fff" />
      <rect x="2" y="56" width="20" height="20" rx="5" fill="var(--primary)" />
      <path d="M7 66 L11 70 L17 62" stroke="#fff" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="30" y="60" width="76" height="6" rx="3" fill="var(--ux4g-color-primary-200)" />
      <rect x="30" y="70" width="48" height="4" rx="2" fill="var(--ux4g-color-primary-100)" />
      <circle cx="124" cy="66" r="10" fill="#fff" stroke="var(--ux4g-color-primary-300)" strokeWidth="1.8" />
      <circle cx="124" cy="66" r="4.5" fill="var(--primary)" />
      <rect x="150" y="56" width="50" height="20" rx="6" fill="var(--primary-darker)" />
      <rect x="159" y="64" width="32" height="4" rx="2" fill="#fff" />
    </svg>
  ),
  feedback: (
    <svg viewBox="0 0 220 90" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      <rect x="2" y="8" width="150" height="34" rx="8" fill="#fff" stroke="var(--ux4g-color-primary-200)" strokeWidth="1.3" />
      <circle cx="22" cy="25" r="9" fill="var(--success)" />
      <path d="M17.5 25 L21 28.5 L27 21" stroke="#fff" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="40" y="19" width="96" height="5" rx="2.5" fill="var(--ux4g-color-primary-300)" />
      <rect x="40" y="28" width="66" height="4" rx="2" fill="var(--ux4g-color-primary-100)" />
      <g className="cx-spinner">
        <circle cx="186" cy="25" r="14" fill="none" stroke="var(--ux4g-color-primary-100)" strokeWidth="3.4" />
        <path d="M186 11 A14 14 0 0 1 200 25" fill="none" stroke="var(--primary)" strokeWidth="3.4" strokeLinecap="round" />
      </g>
      <rect x="2" y="56" width="216" height="9" rx="4.5" fill="var(--ux4g-color-primary-100)" />
      <rect className="cx-progress-fill" x="2" y="56" width="138" height="9" rx="4.5" fill="var(--primary)" />
      <rect x="2" y="74" width="62" height="14" rx="7" fill="var(--primary-darker)" />
      <rect x="11" y="79.6" width="44" height="3.4" rx="1.7" fill="#fff" />
      <rect x="72" y="74" width="62" height="14" rx="7" fill="#fff" stroke="var(--ux4g-color-primary-200)" strokeWidth="1.2" />
      <rect x="81" y="79.6" width="44" height="3.4" rx="1.7" fill="var(--ux4g-color-primary-300)" />
    </svg>
  ),
  data: (
    <svg viewBox="0 0 220 90" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      <rect x="2" y="6" width="216" height="22" rx="6" fill="#fff" stroke="var(--ux4g-color-primary-200)" strokeWidth="1.2" />
      <g className="cx-av cx-av-1">
        <circle cx="17" cy="17" r="7" fill="var(--primary-darker)" />
        <text x="17" y="20.5" fontFamily="var(--font-body)" fontSize="9" fontWeight="700" fill="#fff" textAnchor="middle">A</text>
      </g>
      <rect x="32" y="12" width="104" height="4.5" rx="2.25" fill="var(--ux4g-color-primary-300)" />
      <rect x="32" y="20" width="62" height="3.5" rx="1.75" fill="var(--ux4g-color-primary-100)" />
      <rect x="182" y="10" width="32" height="13" rx="6.5" fill="var(--amber)" />
      <text x="198" y="19.2" fontFamily="var(--font-mono)" fontSize="7.5" fontWeight="700" fill="var(--amber-ink)" textAnchor="middle">PAID</text>
      <rect x="2" y="34" width="216" height="22" rx="6" fill="#fff" stroke="var(--ux4g-color-primary-200)" strokeWidth="1.2" />
      <g className="cx-av cx-av-2">
        <circle cx="17" cy="45" r="7" fill="var(--primary-deep)" />
        <text x="17" y="48.5" fontFamily="var(--font-body)" fontSize="9" fontWeight="700" fill="#fff" textAnchor="middle">R</text>
      </g>
      <rect x="32" y="40" width="104" height="4.5" rx="2.25" fill="var(--ux4g-color-primary-300)" />
      <rect x="32" y="48" width="62" height="3.5" rx="1.75" fill="var(--ux4g-color-primary-100)" />
      <rect x="182" y="38" width="32" height="13" rx="6.5" fill="var(--ux4g-color-primary-100)" />
      <text x="198" y="47.2" fontFamily="var(--font-mono)" fontSize="7.5" fontWeight="700" fill="var(--primary-deep)" textAnchor="middle">DUE</text>
      <rect x="2" y="62" width="216" height="22" rx="6" fill="#fff" stroke="var(--ux4g-color-primary-200)" strokeWidth="1.2" />
      <g className="cx-av cx-av-3">
        <circle cx="17" cy="73" r="7" fill="var(--primary)" />
        <text x="17" y="76.5" fontFamily="var(--font-body)" fontSize="9" fontWeight="700" fill="#fff" textAnchor="middle">M</text>
      </g>
      <rect x="32" y="68" width="104" height="4.5" rx="2.25" fill="var(--ux4g-color-primary-300)" />
      <rect x="32" y="76" width="62" height="3.5" rx="1.75" fill="var(--ux4g-color-primary-100)" />
    </svg>
  ),
  nav: (
    <svg viewBox="0 0 220 90" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      <text x="2" y="13" fontFamily="var(--font-mono)" fontSize="9" fill="var(--ux4g-color-primary-300)">Home</text>
      <text x="32" y="13" fontFamily="var(--font-mono)" fontSize="9" fill="var(--ux4g-color-primary-200)">/</text>
      <text x="40" y="13" fontFamily="var(--font-mono)" fontSize="9" fill="var(--ux4g-color-primary-300)">Services</text>
      <text x="86" y="13" fontFamily="var(--font-mono)" fontSize="9" fill="var(--ux4g-color-primary-200)">/</text>
      <text x="94" y="13" fontFamily="var(--font-mono)" fontSize="9" fontWeight="700" fill="var(--primary-darker)">Aadhaar</text>
      <circle cx="12" cy="42" r="10" fill="var(--primary-darker)" />
      <path d="M7.5 42 L11 45.5 L16.5 38" stroke="#fff" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="22" y1="42" x2="78" y2="42" stroke="var(--primary)" strokeWidth="2.6" />
      <g className="cx-step">
        <circle cx="88" cy="42" r="10" fill="var(--amber)" />
        <text x="88" y="46" fontFamily="var(--font-body)" fontSize="11" fontWeight="700" fill="var(--amber-ink)" textAnchor="middle">2</text>
      </g>
      <line className="cx-dash" x1="98" y1="42" x2="154" y2="42" stroke="var(--ux4g-color-primary-200)" strokeWidth="2.6" strokeDasharray="3 4" />
      <circle cx="164" cy="42" r="10" fill="#fff" stroke="var(--ux4g-color-primary-200)" strokeWidth="1.8" />
      <text x="164" y="46" fontFamily="var(--font-body)" fontSize="11" fontWeight="700" fill="var(--ux4g-color-primary-300)" textAnchor="middle">3</text>
      <rect x="2" y="68" width="20" height="20" rx="5" fill="#fff" stroke="var(--ux4g-color-primary-200)" strokeWidth="1.2" />
      <text x="12" y="82" fontFamily="var(--font-mono)" fontSize="10" fill="var(--ux4g-color-primary-300)" textAnchor="middle">‹</text>
      <rect x="26" y="68" width="20" height="20" rx="5" fill="#fff" stroke="var(--ux4g-color-primary-200)" strokeWidth="1.2" />
      <text x="36" y="82" fontFamily="var(--font-mono)" fontSize="10" fill="var(--primary-deep)" textAnchor="middle">1</text>
      <rect x="50" y="68" width="20" height="20" rx="5" fill="var(--primary)" />
      <text x="60" y="82" fontFamily="var(--font-mono)" fontSize="10" fontWeight="700" fill="#fff" textAnchor="middle">2</text>
      <rect x="74" y="68" width="20" height="20" rx="5" fill="#fff" stroke="var(--ux4g-color-primary-200)" strokeWidth="1.2" />
      <text x="84" y="82" fontFamily="var(--font-mono)" fontSize="10" fill="var(--primary-deep)" textAnchor="middle">3</text>
      <text x="108" y="82" fontFamily="var(--font-mono)" fontSize="10" fill="var(--ux4g-color-primary-300)" textAnchor="middle">…</text>
      <rect x="116" y="68" width="20" height="20" rx="5" fill="#fff" stroke="var(--ux4g-color-primary-200)" strokeWidth="1.2" />
      <text x="126" y="82" fontFamily="var(--font-mono)" fontSize="10" fill="var(--primary-deep)" textAnchor="middle">9</text>
      <rect x="140" y="68" width="20" height="20" rx="5" fill="#fff" stroke="var(--ux4g-color-primary-200)" strokeWidth="1.2" />
      <text x="150" y="82" fontFamily="var(--font-mono)" fontSize="10" fill="var(--ux4g-color-primary-300)" textAnchor="middle">›</text>
    </svg>
  ),
  utility: (
    <svg viewBox="0 0 220 90" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      <line x1="2" y1="13" x2="88" y2="13" stroke="var(--ux4g-color-primary-200)" strokeWidth="1.4" />
      <text x="110" y="17" fontFamily="var(--font-mono)" fontSize="10" letterSpacing="2" fill="var(--ux4g-color-primary-400)" textAnchor="middle">OR</text>
      <line x1="132" y1="13" x2="218" y2="13" stroke="var(--ux4g-color-primary-200)" strokeWidth="1.4" />
      <g className="cx-ub cx-ub-1">
        <rect x="2" y="28" width="36" height="36" rx="8" fill="var(--primary)" />
        <text x="20" y="52" fontFamily="var(--font-body)" fontSize="18" fontWeight="700" fill="#fff" textAnchor="middle">A</text>
      </g>
      <g className="cx-ub cx-ub-2">
        <rect x="44" y="28" width="36" height="36" rx="8" fill="#fff" stroke="var(--ux4g-color-primary-200)" strokeWidth="1.3" />
        <line x1="62" y1="38" x2="62" y2="54" stroke="var(--primary-deep)" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="54" y1="46" x2="70" y2="46" stroke="var(--primary-deep)" strokeWidth="2.2" strokeLinecap="round" />
      </g>
      <g className="cx-ub cx-ub-3">
        <rect x="86" y="28" width="36" height="36" rx="8" fill="#fff" stroke="var(--ux4g-color-primary-200)" strokeWidth="1.3" />
        <circle cx="104" cy="46" r="7.5" fill="var(--amber)" />
      </g>
      <g className="cx-ub cx-ub-4">
        <rect x="128" y="28" width="36" height="36" rx="8" fill="#fff" stroke="var(--ux4g-color-primary-200)" strokeWidth="1.3" />
        <path d="M138 46 L146 54 L158 40" stroke="var(--primary-deep)" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <g className="cx-ub cx-ub-5">
        <rect x="170" y="28" width="48" height="36" rx="8" fill="var(--primary-dark)" />
        <rect x="178" y="42" width="32" height="8" rx="4" fill="rgba(255,255,255,0.16)" />
        <circle cx="184" cy="46" r="4" fill="var(--ux4g-color-primary-300)" />
      </g>
      <rect x="2" y="72" width="216" height="14" rx="4" fill="var(--primary-dark)" />
      <rect x="8" y="77" width="9" height="4" rx="1.4" fill="var(--ux4g-color-primary-300)" />
      <rect x="21" y="77" width="9" height="4" rx="1.4" fill="rgba(255,255,255,0.22)" />
      <rect x="34" y="77" width="9" height="4" rx="1.4" fill="rgba(255,255,255,0.22)" />
      <text x="60" y="82" fontFamily="var(--font-mono)" fontSize="7" fill="var(--ux4g-color-primary-200)">A−  A  A+</text>
    </svg>
  ),
  capture: (
    <svg viewBox="0 0 220 90" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      <rect x="60" y="6" width="100" height="78" rx="10" fill="var(--primary-tint)" stroke="var(--primary)" strokeWidth="1.6" />
      <path d="M50 6 L60 6 M60 6 L60 16" stroke="var(--primary-darker)" strokeWidth="2.2" fill="none" strokeLinecap="round" />
      <path d="M170 6 L160 6 M160 6 L160 16" stroke="var(--primary-darker)" strokeWidth="2.2" fill="none" strokeLinecap="round" />
      <path d="M50 84 L60 84 M60 84 L60 74" stroke="var(--primary-darker)" strokeWidth="2.2" fill="none" strokeLinecap="round" />
      <path d="M170 84 L160 84 M160 84 L160 74" stroke="var(--primary-darker)" strokeWidth="2.2" fill="none" strokeLinecap="round" />
      <g className="cx-print" fill="none" stroke="var(--primary-darker)" strokeWidth="2" strokeLinecap="round">
        <path d="M104 47 C104 36 116 36 116 47" />
        <path d="M99 50 C99 28 121 28 121 50" />
        <path d="M94 52 C94 23 126 23 126 52" />
        <path d="M89 54 C89 19 131 19 131 54" />
        <path d="M110 47 L110 41" />
      </g>
      <g className="cx-scan">
        <line x1="68" y1="46" x2="152" y2="46" stroke="var(--amber)" strokeWidth="2.2" />
        <circle cx="68" cy="46" r="2.4" fill="var(--amber)" />
        <circle cx="152" cy="46" r="2.4" fill="var(--amber)" />
      </g>
      <text x="110" y="78" fontFamily="var(--font-mono)" fontSize="7" letterSpacing="2" fill="var(--primary-deep)" textAnchor="middle">SCAN</text>
    </svg>
  ),
};

/* ───────────────── Category Showcase (hero fold above components) ─────────────────
   Replaces the chip strip on first view. Six detailed cards stand-in for the chip
   tabs — each card is a clickable jump target. Fills the remaining viewport so
   the first group section is below the fold. */
function CategoryShowcase({ showcaseRef }) {
  const go = (id) => {
    const el = document.getElementById("g-" + id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 130;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };
  const total = GROUPS.reduce((n, g) => n + g.components.length, 0);
  return (
    <section className="cx-showcase" ref={showcaseRef}>
      <div className="container">
        <div className="cx-showcase-grid">
          {GROUPS.map((g) => (
            <button
              key={g.id}
              type="button"
              className={"cx-sc-card cx-sc-card--" + g.id}
              onClick={() => go(g.id)}
              aria-label={g.name + ", " + g.components.length + " components"}
            >
              <div className="cx-sc-panel">
                <div className="cx-sc-art">{CATEGORY_VISUALS[g.id]}</div>
                <div className="cx-sc-titlebar">
                  <h3 className="cx-sc-name">{g.name}</h3>
                  <span className="cx-sc-count">{g.components.length}</span>
                </div>
              </div>
              <p className="cx-sc-desc">{g.short}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ───────────────── Sticky group nav + view toggle ───────────────── */
function GroupTabs({ active, setActive, viewMode, setViewMode }) {
  const onClick = (id) => {
    const el = document.getElementById("g-" + id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 130;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setActive(id);
  };
  return (
    <div className="cx-tabs-wrap">
      <div className="cx-tabs">
        <div className="cx-tabs-scroll">
          {GROUPS.map((g) => (
            <button
              key={g.id}
              className={"cx-tab" + (active === g.id ? " active" : "")}
              onClick={() => onClick(g.id)}
            >
              {g.name}
              <span className="tab-count">{g.components.length}</span>
            </button>
          ))}
        </div>
        <ViewToggle viewMode={viewMode} setViewMode={setViewMode} />
      </div>
    </div>
  );
}

function ViewToggle({ viewMode, setViewMode }) {
  return (
    <div className="cx-view-toggle" role="group" aria-label="View mode">
      <button
        type="button"
        className={"cx-vt-btn" + (viewMode === "grid" ? " active" : "")}
        onClick={() => setViewMode("grid")}
        aria-pressed={viewMode === "grid"}
        aria-label="Grid view"
      >
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <rect x="1.5" y="1.5" width="5.5" height="5.5" rx="1" stroke="currentColor" strokeWidth="1.4" />
          <rect x="9" y="1.5" width="5.5" height="5.5" rx="1" stroke="currentColor" strokeWidth="1.4" />
          <rect x="1.5" y="9" width="5.5" height="5.5" rx="1" stroke="currentColor" strokeWidth="1.4" />
          <rect x="9" y="9" width="5.5" height="5.5" rx="1" stroke="currentColor" strokeWidth="1.4" />
        </svg>
        <span>Grid</span>
      </button>
      <button
        type="button"
        className={"cx-vt-btn" + (viewMode === "list" ? " active" : "")}
        onClick={() => setViewMode("list")}
        aria-pressed={viewMode === "list"}
        aria-label="List view"
      >
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <rect x="1.5" y="2.5" width="3" height="3" rx="0.6" stroke="currentColor" strokeWidth="1.4" />
          <rect x="1.5" y="10.5" width="3" height="3" rx="0.6" stroke="currentColor" strokeWidth="1.4" />
          <line x1="6.5" y1="4" x2="14.5" y2="4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          <line x1="6.5" y1="12" x2="14.5" y2="12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
        <span>List</span>
      </button>
    </div>
  );
}

/* ───────────────── Thumbnail (shrunken version of the hero banner) ───────────────── */
function Thumb({ component, viewMode }) {
  const variant = BANNER_VARIANT[component.name] || "default";
  const Hero = MINI_HEROES[component.name];
  return (
    <div className={"cx-thumb cx-thumb--" + variant + " cx-thumb--" + viewMode}>
      <span className="cx-thumb-grain" aria-hidden="true"></span>
      <span className="cx-thumb-glow" aria-hidden="true"></span>
      <div className="cx-thumb-stage">
        {Hero ? <Hero /> : null}
      </div>
    </div>
  );
}

/* ───────────────── Group section ───────────────── */
function GroupSection({ group, alt, onStub, viewMode }) {
  const go = (name) => {
    if (PAGE_MAP[name]) window.location.href = PAGE_MAP[name];
    else onStub(name);
  };
  return (
    <section id={"g-" + group.id} className={"cx-group-section" + (alt ? " alt" : "")}>
      <div className="container">
        <div className="cx-group-head">
          <h2 className="cx-group-name">{group.name}</h2>
          <p className="cx-group-desc">{group.desc}</p>
        </div>
        <div className={"cx-grid cx-grid--" + viewMode}>
          {group.components.map((c) => (
            <div
              key={c.name + group.id}
              className={"cx-card cx-card--" + viewMode + (c.status === "wip" ? " wip" : "")}
             
              onClick={() => go(c.name)}
              role="link"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); go(c.name); } }}
            >
              <Thumb component={c} viewMode={viewMode} />
              <div className="cx-meta">
                <div className="cx-meta-left">
                  <h3 className="cx-name">{c.name}</h3>
                  {viewMode === "list" && <p className="cx-text">{c.desc}</p>}
                </div>
                {viewMode === "list" && <span className="cx-arrow" aria-hidden="true">→</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────── Bottom link row ───────────────── */
function Bottom({ onStub }) {
  return (
    <section className="cx-bottom">
      <div className="container">
        <div className="line">
          Looking for developer docs, API references, or code snippets?
          <a href="#storybook">Visit our Storybook →</a>
        </div>

      </div>
    </section>
  );
}


/* ───────────────── App ───────────────── */
function App() {
  const { toasts, push } = useToasts();
  const [active, setActive] = useState("form");
  const [viewMode, setViewMode] = useState(() => {
    try { return localStorage.getItem("cx-view") || "grid"; } catch { return "grid"; }
  });
  const showcaseRef = useRef(null);

  useEffect(() => {
    try { localStorage.setItem("cx-view", viewMode); } catch {}
  }, [viewMode]);

  // Sticky chip tabs are hidden while the category showcase is in view,
  // and revealed once the user scrolls past it. Uses a scroll listener
  // (rather than IntersectionObserver) for reliability in iframed previews.
  useEffect(() => {
    const tabBar = document.querySelector(".cx-tabs-wrap");
    if (!tabBar) return;
    const onScroll = () => {
      const el = showcaseRef.current;
      if (!el) return;
      const bottom = el.getBoundingClientRect().bottom;
      // Reveal chips when the showcase bottom passes above the navbar (72px).
      if (bottom < 100) {
        tabBar.classList.add("cx-tabs-wrap--show");
      } else {
        tabBar.classList.remove("cx-tabs-wrap--show");
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const stub = (name) => push(`${name}, page coming soon`);

  // Card entrance animation: observe cards and add cx-anim-in when in view
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("cx-anim-in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05, rootMargin: "0px 0px -16px 0px" });

    const observe = () => {
      const cards = document.querySelectorAll(".cx-card:not(.cx-anim-in)");
      cards.forEach((card, i) => {
        card.style.setProperty("--anim-delay", `${(i % 7) * 45}ms`);
        io.observe(card);
      });
    };
    // Small delay to let React finish painting
    const t = setTimeout(observe, 50);
    return () => { clearTimeout(t); io.disconnect(); };
  }, [viewMode]);

  // Update active group based on scroll position
  useEffect(() => {
    const onScroll = () => {
      const probe = 200;
      let current = GROUPS[0].id;
      for (const g of GROUPS) {
        const el = document.getElementById("g-" + g.id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top < probe) current = g.id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Navbar onStub={stub} active="Components" />
      <main className="cx-page">
        <Header onStub={stub} />
        <CategoryShowcase showcaseRef={showcaseRef} />
        <GroupTabs active={active} setActive={setActive} viewMode={viewMode} setViewMode={setViewMode} />
        {GROUPS.map((g, i) => (
          <GroupSection key={g.id} group={g} alt={i % 2 === 1} onStub={stub} viewMode={viewMode} />
        ))}
        <Bottom onStub={stub} />
        <SiteFooter />
      </main>
      <Toasts items={toasts} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
