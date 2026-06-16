/* global React, window */
/* UX4G Verify Flow — shared atoms + modal shell.
   Exposes building blocks on window for verify-flow.jsx. */
(function () {
const { useState, useEffect, useRef, useMemo, useCallback } = React;

/* ───── Icons ───── */
const VfyIcon = {
  close: (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <path d="m3 3 10 10M13 3 3 13"/>
    </svg>
  ),
  caret: (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m3 4.5 3 3 3-3"/>
    </svg>
  ),
  check: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <path d="m5 12 4.5 4.5L19 7"/>
    </svg>
  ),
  alert: (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="8" cy="8" r="6.5"/>
      <path d="M8 5v3.5M8 11v.01"/>
    </svg>
  ),
  edit: (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="m11.5 2.5 2 2L5 13H3v-2z"/>
    </svg>
  ),
  info: (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="8" cy="8" r="6.5"/>
      <path d="M8 7.5v3.5M8 5v.01"/>
    </svg>
  ),
  arrowRight: (
    <span style={{ fontFamily: "var(--font-mono)", display: "inline-block", transition: "transform 160ms" }}>→</span>
  ),
  arrowLeft: (
    <span style={{ fontFamily: "var(--font-mono)" }}>←</span>
  ),
  figma: (
    <svg viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M6.5 2h2v4h-2a2 2 0 010-4z" fill="currentColor"/>
      <path d="M8.5 2h2a2 2 0 010 4h-2V2z" fill="currentColor" opacity="0.7"/>
      <path d="M6.5 6h2v4h-2a2 2 0 010-4z" fill="currentColor" opacity="0.5"/>
      <path d="M8.5 6h2a2 2 0 010 4h-2V6z" fill="currentColor" opacity="0.4"/>
      <circle cx="9.5" cy="12" r="2" fill="currentColor" opacity="0.5"/>
    </svg>
  ),
  github: (
    <svg viewBox="0 0 18 18" fill="currentColor" aria-hidden="true">
      <path d="M9 1.5a7.5 7.5 0 0 0-2.37 14.62c.37.07.5-.16.5-.36v-1.25c-2.08.45-2.52-1-2.52-1-.34-.87-.83-1.1-.83-1.1-.68-.46.05-.45.05-.45.75.05 1.15.77 1.15.77.67 1.15 1.76.82 2.18.62.07-.48.26-.82.47-1-1.66-.19-3.4-.83-3.4-3.69 0-.82.29-1.48.78-2-.08-.2-.34-.96.07-2 0 0 .63-.2 2.07.76A7.2 7.2 0 0 1 9 5.16a7.2 7.2 0 0 1 1.88.25c1.44-.96 2.07-.76 2.07-.76.41 1.04.15 1.8.07 2 .49.52.78 1.18.78 2 0 2.87-1.75 3.5-3.41 3.68.27.23.5.68.5 1.37v2.04c0 .2.13.43.5.36A7.5 7.5 0 0 0 9 1.5z"/>
    </svg>
  ),
  doc: (
    <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 2h7l3 3v11H4z"/>
      <path d="M11 2v3h3"/>
      <path d="M6.5 9h5M6.5 11.5h5M6.5 14h3.5"/>
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 1.5 2.5 4v4.5c0 3 2.2 5.3 5.5 6 3.3-.7 5.5-3 5.5-6V4z"/>
      <path d="m6 8 1.5 1.5L11 6"/>
    </svg>
  ),
};

/* ───── Modal shell ───── */
function VfyModal({ source, onClose, children, hideClose, wide }) {
  // ESC to close
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape" && onClose) onClose(); };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="vfy-scrim" onClick={(e) => { if (e.target === e.currentTarget && onClose) onClose(); }} data-screen-label="Verify modal scrim">
      <div className={"vfy-modal" + (wide ? " vfy-modal--wide" : "")} role="dialog" aria-modal="true">
        {!hideClose && (
          <button type="button" className="vfy-close" onClick={onClose} aria-label="Close">
            {VfyIcon.close}
          </button>
        )}
        {children}
      </div>
    </div>
  );
}

/* ───── Step indicator ───── */
function VfyStepBar({ step, total = 3 }) {
  return (
    <div className="vfy-stepbar">
      {Array.from({ length: total }).map((_, i) => (
        <span key={i}
          className={"seg" + (i + 1 === step ? " on" : i + 1 < step ? " done" : "")} />
      ))}
      <span className="lbl">
        Step <strong>{step}</strong> of <strong>{total}</strong>
      </span>
    </div>
  );
}

/* ───── Form atoms ───── */
function VfyField({ label, required, optional, error, hint, counter, children }) {
  return (
    <div className="vfy-field">
      <label className="vfy-label">
        {label}
        {required && <span className="req" aria-hidden="true">*</span>}
        {optional && <span className="opt">Optional</span>}
      </label>
      {children}
      {(hint || counter || error) && (
        <div className="vfy-input-meta">
          <span>
            {error ? (
              <span className="vfy-err-msg">{VfyIcon.alert}{error}</span>
            ) : hint}
          </span>
          {counter && (
            <span className={"counter" + (counter.over ? " over" : counter.warn ? " warn" : "")}>
              {counter.value}/{counter.max}
            </span>
          )}
        </div>
      )}
    </div>
  );
}

function VfyInput({ value, onChange, placeholder, error, type = "text", autoFocus, onBlur, onKeyDown }) {
  return (
    <div className={"ux4g-input-container ux4g-input-md vfy-input-wrap" + (error ? " ux4g-input-error" : "") + (value ? " ux4g-has-value" : "")}>
      <div className="ux4g-input">
        <input
          type={type}
          className="ux4g-input-input"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          autoFocus={autoFocus}
          onBlur={onBlur}
          onKeyDown={onKeyDown}
        />
      </div>
    </div>
  );
}

function VfyTextarea({ value, onChange, placeholder, error, rows = 3 }) {
  return (
    <div className={"ux4g-textarea-container vfy-textarea-wrap" + (error ? " ux4g-textarea-error" : "")}>
      <div className="ux4g-textarea">
        <textarea
          className="ux4g-textarea-input"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={rows}
        />
      </div>
    </div>
  );
}

/* ───── Custom select w/ optional search — built on UX4G dropdown / combobox ───── */
function VfySelect({ value, onChange, options, placeholder, searchable = false, error }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [kbIdx, setKbIdx] = useState(0);
  const rootRef = useRef(null);
  const searchRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    if (searchable && searchRef.current) searchRef.current.focus();
    const onDocClick = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) { setOpen(false); setQuery(""); }
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [open, searchable]);

  const filtered = useMemo(() => {
    if (!query) return options;
    const q = query.toLowerCase();
    return options.filter((o) => o.toLowerCase().includes(q));
  }, [options, query]);

  // Searchable variant uses UX4G combobox markup; non-searchable uses dropdown markup.
  if (searchable) {
    const showInput = open;
    return (
      <div ref={rootRef}
        className={"ux4g-combobox ux4g-combobox-md vfy-select-wrap"
          + (open ? " is-open" : "")
          + (value ? " has-selection" : "")
          + (error ? " ux4g-combobox-error" : "")}>
        <div className="ux4g-combobox-control" onClick={() => setOpen((x) => !x)}>
          <div className="ux4g-combobox-value">
            {showInput ? (
              <input ref={searchRef}
                type="text"
                className="ux4g-combobox-input"
                placeholder={value || placeholder || "Search…"}
                value={query}
                onClick={(e) => e.stopPropagation()}
                onChange={(e) => { setQuery(e.target.value); setKbIdx(0); }}
                onKeyDown={(e) => {
                  if (e.key === "ArrowDown") { e.preventDefault(); setKbIdx((i) => Math.min(i + 1, filtered.length - 1)); }
                  if (e.key === "ArrowUp")   { e.preventDefault(); setKbIdx((i) => Math.max(i - 1, 0)); }
                  if (e.key === "Enter" && filtered[kbIdx]) {
                    e.preventDefault();
                    onChange(filtered[kbIdx]);
                    setOpen(false);
                    setQuery("");
                  }
                  if (e.key === "Escape") { setOpen(false); setQuery(""); }
                }}
              />
            ) : (
              <span className={"ux4g-combobox-text vfy-combobox-text" + (value ? "" : " is-placeholder")}>
                {value || placeholder}
              </span>
            )}
          </div>
          <span className="ux4g-combobox-caret" aria-hidden="true">{VfyIcon.caret}</span>
        </div>
        {open && (
          <div className="ux4g-combobox-menu" onMouseDown={(e) => e.preventDefault()}>
            {filtered.length === 0 && (
              <div className="vfy-select-empty">No matches</div>
            )}
            {filtered.map((opt, i) => (
              <button key={opt}
                type="button"
                className={"ux4g-combobox-single-option"
                  + (opt === value ? " is-selected" : "")
                  + (i === kbIdx ? " active" : "")}
                onClick={() => { onChange(opt); setOpen(false); setQuery(""); }}>
                <span>{opt}</span>
                <span className="ux4g-combobox-single-check" aria-hidden="true">{VfyIcon.check}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  // Non-searchable: UX4G dropdown markup
  return (
    <div ref={rootRef}
      className={"ux4g-dropdown ux4g-dropdown-md vfy-select-wrap"
        + (open ? " is-open" : "")
        + (value ? " has-selection" : "")}>
      <button type="button"
        className="ux4g-dropdown-control"
        onClick={() => setOpen((x) => !x)}>
        <span className="ux4g-dropdown-value">
          <span className={"ux4g-dropdown-text" + (value ? "" : " is-placeholder")}>
            {value || placeholder}
          </span>
        </span>
        <span className="ux4g-dropdown-caret" aria-hidden="true">{VfyIcon.caret}</span>
      </button>
      {open && (
        <div className="ux4g-dropdown-menu">
          {options.map((opt) => (
            <button key={opt}
              type="button"
              className={"ux4g-dropdown-single-option" + (opt === value ? " is-selected" : "")}
              onClick={() => { onChange(opt); setOpen(false); }}>
              <span>{opt}</span>
              <span className="ux4g-dropdown-single-check" aria-hidden="true">{VfyIcon.check}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* ───── OTP input ───── */
function VfyOtp({ value, onChange, error, success, length = 6 }) {
  const refs = useRef([]);
  const digits = value.padEnd(length, " ").slice(0, length).split("");

  const setDigit = (i, d) => {
    const arr = value.padEnd(length, " ").slice(0, length).split("");
    arr[i] = d || " ";
    const next = arr.join("").trimEnd();
    onChange(next);
  };

  return (
    <div className="vfy-otp">
      {digits.map((d, i) => (
        <input key={i}
          ref={(el) => (refs.current[i] = el)}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={d.trim()}
          placeholder="—"
          className={"vfy-otp-cell"
            + (d.trim() ? " filled" : "")
            + (error ? " err" : "")
            + (success ? " success" : "")}
          onChange={(e) => {
            const v = e.target.value.replace(/\D/g, "");
            if (v.length > 1) {
              // paste handling
              const arr = v.padEnd(length, " ").slice(0, length).split("");
              onChange(arr.join("").trimEnd());
              const focusIdx = Math.min(v.length, length - 1);
              refs.current[focusIdx]?.focus();
              return;
            }
            setDigit(i, v);
            if (v && i < length - 1) refs.current[i + 1]?.focus();
          }}
          onKeyDown={(e) => {
            if (e.key === "Backspace") {
              if (!digits[i].trim() && i > 0) {
                refs.current[i - 1]?.focus();
                setDigit(i - 1, "");
                e.preventDefault();
              } else {
                setDigit(i, "");
              }
            }
            if (e.key === "ArrowLeft" && i > 0) refs.current[i - 1]?.focus();
            if (e.key === "ArrowRight" && i < length - 1) refs.current[i + 1]?.focus();
          }}
          onPaste={(e) => {
            const txt = (e.clipboardData.getData("text") || "").replace(/\D/g, "");
            if (txt) {
              e.preventDefault();
              const arr = txt.padEnd(length, " ").slice(0, length).split("");
              onChange(arr.join("").trimEnd());
              const focusIdx = Math.min(txt.length, length - 1);
              refs.current[focusIdx]?.focus();
            }
          }}
        />
      ))}
    </div>
  );
}

/* ───── Consent checkbox — built on UX4G checkbox ───── */
function VfyConsent({ checked, onChange, children }) {
  return (
    <label className={"ux4g-checkbox vfy-consent" + (checked ? " on" : "")}>
      <input type="checkbox"
        className="ux4g-checkbox-input"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)} />
      <span className="ux4g-checkbox-control">
        <span className="ux4g-checkmark" />
      </span>
      <span className="ux4g-checkbox-content">
        <span className="ux4g-checkbox-label vfy-consent-text">{children}</span>
      </span>
    </label>
  );
}

/* ───── Helpers ───── */
const GOV_EMAIL_RE = /^[a-zA-Z0-9._%+-]+@(?:[a-zA-Z0-9-]+\.)*gov\.in$/i;
const GOV_URL_RE   = /^https:\/\/[^\s]+\.(gov\.in|nic\.in|mil\.in)(\/.*)?$/i;

Object.assign(window, {
  VfyIcon, VfyModal, VfyStepBar,
  VfyField, VfyInput, VfyTextarea,
  VfySelect, VfyOtp, VfyConsent,
  GOV_EMAIL_RE, GOV_URL_RE,
});
})();
