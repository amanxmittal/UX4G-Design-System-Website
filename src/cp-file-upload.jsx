/* global React */
(function () {
  function Up({ state = "empty", file }) {
    if (state === "uploaded") {
      return (
        <div style={{ display: "flex", alignItems: "center", gap: 12, padding: 12, border: "1px solid var(--ux4g-border-color-neutral-subtle)", borderRadius: 8, width: "100%" }}>
          <div style={{ width: 40, height: 40, background: "var(--ux4g-bg-primary-subtle)", color: "var(--ux4g-text-primary-default)", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 11 }}>PDF</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, fontWeight: 500 }}>{file || "aadhaar-card.pdf"}</div>
            <div style={{ fontSize: 11, color: "var(--ux4g-text-neutral-secondary)" }}>312 KB · UPLOADED</div>
          </div>
          <span className="ux4g-icon-outlined" style={{ color: "var(--ux4g-text-success-default)" }}>check_circle</span>
        </div>
      );
    }
    if (state === "uploading") {
      return (
        <div style={{ padding: 12, border: "1px solid var(--ux4g-border-color-neutral-subtle)", borderRadius: 8, width: "100%" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6, fontSize: 12 }}><span>aadhaar-card.pdf</span><span style={{ color: "var(--ux4g-text-neutral-secondary)" }}>42%</span></div>
          <div style={{ height: 6, background: "var(--ux4g-bg-neutral-soft)", borderRadius: 3, overflow: "hidden" }}><div style={{ width: "42%", height: "100%", background: "var(--ux4g-bg-primary-strong)" }}></div></div>
        </div>
      );
    }
    return (
      <div style={{ padding: 24, border: "2px dashed var(--ux4g-border-color-neutral-subtle)", borderRadius: 8, textAlign: "center", width: "100%", background: "var(--ux4g-bg-neutral-soft)" }}>
        <span className="ux4g-icon-outlined" style={{ fontSize: 32, color: "var(--ux4g-text-neutral-secondary)" }}>cloud_upload</span>
        <div style={{ fontSize: 14, fontWeight: 500, marginTop: 8 }}>Drop file here or <a href="#" onClick={(e) => e.preventDefault()} style={{ color: "var(--ux4g-text-primary-default)" }}>browse</a></div>
        <div style={{ fontSize: 11, color: "var(--ux4g-text-neutral-secondary)", marginTop: 4 }}>PDF, JPG, PNG · up to 5 MB</div>
      </div>
    );
  }
  function Hero() {
    return (
      <React.Fragment>
        <div className="hb-grain"></div>
        <div className="hb-soft-blur"></div>
        <div className="hb-modal-mock" style={{ width: 460, padding: "28px", display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ width: 56, height: 64, borderRadius: 8, background: "var(--amber)", color: "var(--primary-dark)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--ux4g-ff-display, sans-serif)", fontWeight: 800, fontSize: 14, letterSpacing: "0.04em", flexShrink: 0 }}>PDF</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontFamily: "var(--ux4g-ff-display, sans-serif)", fontSize: 16, fontWeight: 700, color: "var(--primary-dark)" }}>aadhaar-card.pdf</div>
              <div style={{ fontSize: 12, color: "var(--primary-dark)", opacity: 0.55, marginTop: 2, fontFamily: "var(--ux4g-ff-display, sans-serif)", letterSpacing: "0.04em" }}>312 KB · UPLOADED</div>
            </div>
            <div style={{ width: 28, height: 28, borderRadius: "50%", background: "rgba(22,163,74,0.15)", color: "#16a34a", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800 }}>✓</div>
          </div>
          <div style={{ height: 6, borderRadius: 3, background: "rgba(48,28,125,0.1)", overflow: "hidden" }}>
            <div style={{ width: "100%", height: "100%", background: "var(--amber)" }}></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
  const IMG = "assets/images/component-anatomy/file-upload/";

  const config = {
    name: "File Upload", navName: "File Upload", group: "Form Elements",
    desc: "A drag-and-drop dropzone with click-to-browse, per-file progress, format and size limits, and success / error states — for document uploads in verification flows.",
    bannerVariant: "card", hero: Hero,

    anatomyImg: IMG + "anatomy.png",
    anatomyImgAlt: "File Upload anatomy. A dashed-border dropzone with a cloud-upload icon, a ‘Drop file here’ prompt, a ‘File type: PDF JPG PNG Max size: 5 MB’ hint, an ‘Or’ divider, and an Upload button — with an uploaded file row below reading ‘income-certificate.pdf · 312 KB · Uploaded’ with a success tick and a remove control. Six numbered markers point to the drop zone, the upload icon, the prompt, the format and size hint, the Upload button, and the uploaded file row.",
    anatomy: [
      { n: 1, label: "Drop zone", desc: "Dashed target that accepts dragged files." },
      { n: 2, label: "Upload icon", desc: "Cloud-upload glyph cueing the drop action." },
      { n: 3, label: "Prompt", desc: "Primary instruction, e.g. ‘Drop file here’." },
      { n: 4, label: "Format & size hint", desc: "Accepted file types and the maximum size." },
      { n: 5, label: "Browse / Upload button", desc: "Click-to-browse alternative to drag-and-drop." },
      { n: 6, label: "Uploaded file row", desc: "Shows the file's icon, name, status, and a remove control." },
    ],
    properties: [
      { label: "Drop-zone state", desc: "Idle shows the dashed target with the prompt and hint. On drag-over the zone lights up with a filled background and solid border to confirm ‘drop here’.", img: IMG + "properties-state.png", imgAlt: "Two dropzones side by side: ‘Idle’ with a dashed border, and ‘Drag over’ with a filled light-purple background and solid border." },
      { label: "File-row status", desc: "Each file in the list carries its own status — uploading with a progress bar and percentage, success with a tick, or error with a message and a Retry action.", img: IMG + "properties-rows.png", imgAlt: "Three file rows: ‘address-proof.pdf’ uploading at 45%, ‘income-certificate.pdf’ uploaded with a success tick, and ‘scan.pdf’ in error reading ‘Exceeds the 5 MB limit’ with a Retry action." },
    ],
    scenarios: [
      { title: "Multi-document upload", desc: "Supporting documents are uploaded together — each appears as its own row with an independent status, so users can watch progress and remove individual files.", img: IMG + "scenarios-multi.png", imgAlt: "A dropzone above a list of file rows: income-certificate.pdf and caste-certificate.pdf uploaded, and bank-passbook.pdf uploading at 60%." },
      { title: "Assisted upload (VLE)", desc: "In assisted / Village-Level-Entrepreneur mode, a Scan action sits alongside Upload so an operator can capture a paper document with the device camera.", img: IMG + "scenarios-vle.png", imgAlt: "A dropzone reading ‘Upload or scan document’ with both an Upload button and a filled Scan button for assisted capture." },
      { title: "Oversized-file error", desc: "When a file exceeds the limit it lands in an error row with the reason and a clear recovery path, while the dropzone stays ready for another attempt.", img: IMG + "scenarios-error.png", imgAlt: "A dropzone above an error file row: ‘scan.pdf — Exceeds the 5 MB limit — compress and retry’ with a Retry action." },
    ],
    responsive: [
      { title: "Mobile: browse stays primary", desc: "On small screens the dropzone fills the width and the Upload button is the primary path — drag-and-drop is rare on touch, so tapping to browse leads.", img: IMG + "responsive-mobile.png", imgAlt: "A full-width dropzone with the Upload button and an uploaded ‘income-certificate.pdf · 312 KB’ row below." },
      { title: "File list scrolls", desc: "As more files are added the list grows full-width and scrolls within a fixed height; each row keeps its icon, name, size, and status.", img: IMG + "responsive-list.png", imgAlt: "A scrolling list of four full-width file rows — three uploaded and one (photograph.jpg) uploading at 75%." },
    ],
    practices: [
      { do: { img: IMG + "best-practices-1-do.png", imgAlt: "A dropzone that states ‘File type: PDF JPG PNG  Max size: 5 MB’.", rule: "State the accepted formats and size limit up front — users avoid wasted uploads." },
        dont: { img: IMG + "best-practices-1-dont.png", imgAlt: "A dropzone with only a vague ‘Upload your file’ line and no format or size limit.", rule: "A bare prompt with no format or size limit invites rejected files." } },
      { do: { img: IMG + "best-practices-2-do.png", imgAlt: "An error file row with the specific message ‘Exceeds the 5 MB limit — compress and retry’.", rule: "Make upload errors specific and recoverable — say what failed and how to fix it." },
        dont: { img: IMG + "best-practices-2-dont.png", imgAlt: "An error file row whose message just reads ‘Error’.", rule: "A row that just says ‘Error’ leaves the user stuck." } },
    ],
    accessibility: [
      { t: "Drop zone has explicit file input fallback.", b: "Native `<input type='file'>` for keyboard users. Drag-drop is enhancement; browse button is the primary path." },
      { t: "Progress announces via aria-valuenow.", b: "Upload bar uses `role='progressbar' aria-valuenow='42'`. Screen readers say '42 percent'." },
      { t: "Errors link to the file row.", b: "Error message uses `aria-describedby` to attach to the relevant file row in multi-file uploads." },
      { t: "Format constraints in helper text.", b: "Helper text 'PDF, JPG, PNG · up to 5 MB' is always visible. Reading the rules shouldn't require trial and error." },
      { t: "Successful uploads announce 'uploaded'.", b: "When file finishes, live region announces 'aadhaar.pdf uploaded successfully'. Confirms the action." },
    ],
    related: [
      { name: "Progress Indicator", note: "Upload progress uses the Progress component inline below the file name. Same animation, same severity logic.", preview: (<div style={{ width: "100%" }}><div style={{ height: 6, background: "var(--ux4g-bg-neutral-soft)", borderRadius: 3, overflow: "hidden" }}><div style={{ width: "68%", height: "100%", background: "var(--ux4g-bg-primary-strong)" }}></div></div></div>) },
      { name: "Alert / Toast", note: "Upload success / failure surfaces via Alert. Inline Alert above the upload area for failed uploads.", preview: (<div className="ux4g-alert ux4g-alert-error" style={{ padding: 10 }}><span className="ux4g-alert-icon ux4g-icon-outlined">error</span><div className="ux4g-alert-content"><p className="ux4g-alert-title" style={{ fontSize: 13 }}>Upload failed</p></div></div>) },
      { name: "Image", note: "Uploaded images show as Image previews with proper aspect ratio and lazy loading.", preview: (<div style={{ width: 80, height: 60, background: "linear-gradient(135deg, #a78bfa, #6366f1)", borderRadius: 4 }}></div>) },
      { name: "Checklist", note: "Required documents shown as a Checklist with upload affordance per item. Tracks completion.", preview: (<div style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 12 }}><div>☑ Aadhaar</div><div>☑ PAN</div><div>☐ Photo</div></div>) },
    ],
  };
  if (window.UX4G_CP && window.UX4G_CP.render) window.UX4G_CP.render(config);
  else window.UX4G_COMPONENT_CONFIG = config;
})();
