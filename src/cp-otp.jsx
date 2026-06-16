/* global React */
(function () {
  function OTP({ digits = ["", "", "", "", "", ""], active, error, disabled }) {
    return (
      <div style={{ display: "flex", gap: 8 }}>
        {digits.map((d, i) => {
          const cls = "ux4g-otp-cell" + (d ? " is-filled" : "") + (i === active ? " is-active" : "") + (error ? " state-error" : "") + (disabled ? " state-disabled" : "");
          return (
            <div key={i} className={cls} style={{ width: 44, height: 56, border: `2px solid ${error ? "var(--ux4g-border-color-error-strong, #dc2626)" : i === active ? "var(--ux4g-border-color-primary-strong)" : "var(--ux4g-border-color-neutral-subtle)"}`, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, fontWeight: 600, color: disabled ? "var(--ux4g-text-neutral-tertiary)" : "var(--ux4g-text-neutral-primary)", background: disabled ? "var(--ux4g-bg-neutral-soft)" : "var(--ux4g-bg-neutral-elevated)" }}>{d}</div>
          );
        })}
      </div>
    );
  }

  function Hero() {
    return (
      <React.Fragment>
        <div className="hb-grain"></div>
        <div className="hb-soft-blur"></div>
        <div className="hb-otp-mock">
          <div className="hb-otp-cell filled">4</div>
          <div className="hb-otp-cell filled">8</div>
          <div className="hb-otp-cell filled">3</div>
          <div className="hb-otp-cell filled">7</div>
          <div className="hb-otp-cell active">2</div>
          <div className="hb-otp-cell"></div>
        </div>
      </React.Fragment>
    );
  }

  const IMG = "assets/images/component-anatomy/otp/";

  const config = {
    name: "Input OTP",
    navName: "Input OTP",
    group: "Form Elements",
    desc: "6-digit segmented input with auto-advance, paste support, and resend timer. The canonical SMS or email OTP flow for citizen authentication.",
    bannerVariant: "otp",
    hero: Hero,

    anatomyImg: IMG + "anatomy.png",
    anatomyImgAlt: "OTP input anatomy. A label 'Enter OTP' sits above a row of six single-digit cells, with a caption 'Didn't receive OTP? Resend in 00:17' below. Three numbered markers point to the Label, the OTP cells, and the Caption.",
    anatomy: [
      { n: 1, label: "Label", desc: "Names the code field, e.g. 'Enter OTP'." },
      { n: 2, label: "OTP cells", desc: "One outlined box per digit; focus advances automatically." },
      { n: 3, label: "Caption / resend", desc: "Countdown, status or a resend action below the cells." },
    ],

    properties: [
      {
        label: "Length",
        desc: "4 digits for legacy systems and OTPs delivered over voice call. 6 is standard for SMS - what NPCI and most banks use.",
        img: IMG + "properties-length.png",
        imgAlt: "A six-digit OTP shown ungrouped, and the same OTP with separators grouping it into segments.",
        demos: [
          { label: "4 digits", node: <OTP digits={["4", "8", "3", "7"]} /> },
          { label: "6 digits", node: <OTP digits={["4", "8", "3", "7", "2", "1"]} /> },
        ],
      },
      {
        label: "State",
        desc: "Empty waits for input; partial shows progress; filled is ready to submit. Error indicates an incorrect or expired code; disabled locks after too many tries.",
        img: IMG + "properties-state.png",
        imgAlt: "A six-cell OTP in five labelled states, each annotated with its name: Empty, Partial, Filled, Error (red cells), and Disabled (greyed).",
        demos: [
          { label: "Empty", node: <OTP active={0} /> },
          { label: "Partial", node: <OTP digits={["4", "8", "3", "", "", ""]} active={3} /> },
          { label: "Filled", node: <OTP digits={["4", "8", "3", "7", "2", "1"]} /> },
          { label: "Error", node: <OTP digits={["4", "8", "3", "7", "9", "9"]} error /> },
          { label: "Disabled", node: <OTP digits={["4", "8", "3", "7", "2", "1"]} disabled /> },
        ],
      },
    ],

    scenarios: [
      {
        title: "Auto-advance on input",
        desc: "Typing a digit moves focus to the next cell immediately. Backspace empties the current cell, then moves to the previous. No tab needed.",
        img: IMG + "scenarios-autoadvance.png",
        imgAlt: "An OTP partially filled, with focus auto-advanced to the next empty cell.",
        stage: (
          <React.Fragment>
            <OTP digits={["4", "", "", "", "", ""]} active={1} />
            <span className="scn-arrow" aria-hidden="true">→</span>
            <OTP digits={["4", "8", "", "", "", ""]} active={2} />
          </React.Fragment>
        ),
      },
      {
        title: "Paste from SMS",
        desc: "When users paste a 6-digit OTP from SMS, all cells fill at once. Works whether they paste in cell 1 or anywhere in the input.",
        img: IMG + "scenarios-paste.png",
        imgAlt: "A fully filled OTP after pasting a code from an SMS.",
        stage: <OTP digits={["4", "8", "3", "7", "2", "1"]} />,
      },
      {
        title: "Resend timer",
        desc: "After sending, lock the resend link for 30 seconds. The countdown sits below the input; the link becomes tappable when the timer ends.",
        img: IMG + "scenarios-resend.png",
        imgAlt: "An empty OTP with a resend countdown reading Resend in 00:17.",
        stage: (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
            <OTP digits={["4", "8", "", "", "", ""]} active={2} />
            <div style={{ fontSize: 13, color: "var(--ux4g-text-neutral-secondary)" }}>Didn't get the code? Resend in <strong>00:24</strong></div>
          </div>
        ),
      },
      {
        title: "Wrong OTP",
        desc: "On submission failure, highlight all cells in error. Clear the cells on a single backspace - don't force the user to backspace 6 times.",
        img: IMG + "scenarios-wrong.png",
        imgAlt: "An OTP in error state with the message Incorrect OTP — 2 attempts left.",
        stage: (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
            <OTP digits={["4", "8", "3", "7", "9", "9"]} error />
            <div style={{ fontSize: 13, color: "var(--ux4g-text-error-default)" }}>Incorrect OTP. 2 attempts remaining.</div>
          </div>
        ),
      },
      {
        title: "Expired OTP",
        desc: "OTPs expire after 5 minutes. Show the expiry inline and offer a resend - never silently fail the submission.",
        img: IMG + "scenarios-expired.png",
        imgAlt: "An OTP in error state with the message This OTP has expired — request a new one.",
        stage: (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
            <OTP digits={["4", "8", "3", "7", "2", "1"]} error />
            <div style={{ fontSize: 13, color: "var(--ux4g-text-error-default)" }}>This code expired. <a href="#" onClick={(e) => e.preventDefault()}>Resend new code →</a></div>
          </div>
        ),
      },
      {
        title: "Locked after 3 failures",
        desc: "After 3 wrong OTPs, lock the input for 5 minutes. Disabled cells stay visible so users see what they entered while reading the cooldown message.",
        img: IMG + "scenarios-locked.png",
        imgAlt: "A locked-out OTP with the message Too many attempts — try again in 30 minutes.",
        stage: (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
            <OTP digits={["4", "8", "3", "7", "9", "9"]} disabled />
            <div style={{ fontSize: 13, color: "var(--ux4g-text-neutral-secondary)" }}>Too many attempts. Try again in 5 minutes.</div>
          </div>
        ),
      },
    ],

    responsive: [
      {
        title: "Cells grow to thumb-friendly size on mobile",
        desc: "On viewports below 480px, cells become 48 × 56px so each digit is easily tappable. Gap between cells stays 8px regardless of breakpoint.",
        img: IMG + "responsive-cells.png",
        imgAlt: "An OTP whose cells grow to a thumb-friendly size on mobile.",
        sample: <OTP digits={["4", "8", "3", "", "", ""]} active={3} />,
      },
      {
        title: "Auto-fill from SMS uses Web OTP API",
        desc: "On Android Chrome, the Web OTP API surfaces the SMS code as an autofill suggestion. Tapping the suggestion fills all 6 cells instantly.",
        img: IMG + "responsive-autofill.png",
        imgAlt: "A filled OTP auto-filled from SMS via the Web OTP API.",
        sample: <OTP digits={["4", "8", "3", "7", "2", "1"]} />,
      },
      {
        title: "Numeric keyboard on focus",
        desc: "The OTP input sets `inputMode='numeric'` so mobile keyboards open the numeric layout. Faster entry, no language switching.",
        img: IMG + "responsive-numeric.png",
        imgAlt: "An OTP focused, prompting a numeric keyboard.",
        sample: <OTP digits={["", "", "", "", "", ""]} active={0} />,
      },
    ],

    practices: [
      {
        do: {
          img: IMG + "best-practices-1-do.png",
          imgAlt: "An OTP error reading Incorrect OTP — 2 attempts left.",
          rule: "Tell the user what went wrong and how many attempts remain.",
        },
        dont: {
          img: IMG + "best-practices-1-dont.png",
          imgAlt: "An OTP error reading only Invalid OTP.",
          rule: "Do not use a bare 'Invalid OTP' that gives the user nothing to act on.",
        },
      },
      {
        do: {
          img: IMG + "best-practices-2-do.png",
          imgAlt: "An OTP with a visible resend countdown.",
          rule: "Always offer a way to resend the code, with a clear countdown.",
        },
        dont: {
          img: IMG + "best-practices-2-dont.png",
          imgAlt: "An OTP with no resend option.",
          rule: "Do not leave users stuck with no way to request a new code.",
        },
      },
      {
        do: {
          img: IMG + "best-practices-3-do.png",
          imgAlt: "An OTP in success state confirming the code was accepted.",
          rule: "Confirm success clearly once the code verifies.",
        },
        dont: {
          img: IMG + "best-practices-3-dont.png",
          imgAlt: "A filled OTP with no confirmation of whether it was accepted.",
          rule: "Do not leave a filled OTP ambiguous about whether it worked.",
        },
      },
      {
        do: {
          img: IMG + "best-practices-4-do.png",
          imgAlt: "A clean six-cell OTP with no separators.",
          rule: "Keep the cells clean and evenly spaced so the code reads as one unit.",
        },
        dont: {
          img: IMG + "best-practices-4-dont.png",
          imgAlt: "An OTP broken up by heavy separators.",
          rule: "Do not over-segment the cells; it makes the code feel like multiple fields.",
        },
      },
    ],

    accessibility: [
      { t: "Each cell is a separate input.", b: "Use 6 `<input type='text' inputMode='numeric' maxLength='1'>` elements. Each cell is individually focusable and announced by screen readers." },
      { t: "aria-label on each cell describes position.", b: "'Digit 1 of 6', 'Digit 2 of 6'… Screen reader users know which cell they're in without seeing the layout." },
      { t: "Auto-advance moves focus.", b: "After a digit is entered, programmatically move focus to the next cell. Screen readers announce the new field's label." },
      { t: "Paste fills all cells at once.", b: "Intercept the paste event and distribute digits across cells. Single-cell paste behaviour traps the OTP in cell 1." },
      { t: "Live region announces errors.", b: "Wrap the error message in `aria-live='polite'`. Screen-reader users hear 'Incorrect OTP, 2 attempts remaining' without having to seek the message." },
      { t: "Resend link stays in the tab order.", b: "Even while disabled by the timer, the resend button stays in tab order with `aria-disabled='true'`. Users hear the cooldown reason." },
      { t: "Numeric keyboard via inputMode.", b: "`inputMode='numeric' pattern='\\d*'` opens the numeric keyboard on mobile and prevents non-digit input." },
    ],

    related: [
      {
        name: "Input",
        note: "For longer free-text entry (not segmented), use Input. OTP is a fixed-length numeric specialisation of Input.",
        preview: (
          <div className="ux4g-input-container ux4g-input-md" style={{ width: "100%" }}>
            <div className="ux4g-input">
              <input type="text" className="ux4g-input-input" defaultValue="+91 98765 43210" readOnly />
            </div>
          </div>
        ),
      },
      {
        name: "Button",
        note: "Submit and Resend OTP buttons sit below the OTP input. Submit is Primary; Resend is Text or Outlined.",
        preview: <button className="ux4g-btn-primary ux4g-btn-md">Verify OTP</button>,
      },
      {
        name: "Alert / Toast",
        note: "Server-side OTP errors (system down, rate-limited) surface via an Alert above the OTP, not as inline error.",
        preview: (
          <div className="ux4g-alert ux4g-alert-error" style={{ padding: 10 }}>
            <span className="ux4g-alert-icon ux4g-icon-outlined">error</span>
            <div className="ux4g-alert-content"><p className="ux4g-alert-title" style={{ fontSize: 13 }}>OTP service busy. Try again.</p></div>
          </div>
        ),
      },
      {
        name: "Spinner",
        note: "While verifying OTP server-side, replace the Submit button label with a Spinner to confirm the request is in flight.",
        preview: <span className="ux4g-spinner ux4g-spinner-md"></span>,
      },
    ],
  };

  if (window.UX4G_CP && window.UX4G_CP.render) window.UX4G_CP.render(config);
  else window.UX4G_COMPONENT_CONFIG = config;
})();
