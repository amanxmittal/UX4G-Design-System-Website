/* global React, ReactDOM */
const { useState, useCallback } = React;

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

const FUND_IMGS = {
  a11y:     "assets/images/accessibility%20thumbnail.png",
  content:  "assets/images/content%20design%20thumbnail.png",
  inclusive:"assets/images/inclusive%20design%20thumbnail.png",
};

function FundGraphic({ kind }) {
  return (
    <img
      src={FUND_IMGS[kind]}
      alt=""
      aria-hidden="true"
      style={{ width: "54%", height: "auto", maxHeight: "59%", display: "block", objectFit: "contain" }}
    />
  );
}

function FundCard({ name, desc, href, graphic }) {
  const go = () => { if (href) window.location.href = href; };
  return (
    <div className="fuv" onClick={go}>
      <div className="fuv__panel"><FundGraphic kind={graphic} /></div>
      <div className="fuv__body">
        <h3 className="fuv__name">{name}</h3>
        <p className="fuv__desc">{desc}</p>
      </div>
    </div>
  );
}

function App() {
  const { toasts, push } = useToasts();
  const stub = (n) => push(`${n}, page coming soon`);

  return (
    <>
      <Navbar onStub={stub} />
      <main className="fu-page">
        <section className="fu-header">
          <div className="container">
            <div className="fu-crumb">
              <a href="index.html">Home</a>
              <span className="sep">/</span>
              <span className="current">Fundamentals</span>
            </div>
            <div className="fu-title-row">
              <h1 className="fu-h">Fundamentals</h1>
              <p className="fu-desc">
                The principles and guidance behind every UX4G decision. Understanding these makes every component and pattern easier to apply correctly.
              </p>
            </div>
          </div>
        </section>

        <section className="fu-grid-wrap">
          <div className="container">
            <div className="fuv-grid">
              <FundCard name="Accessibility" desc="How UX4G meets WCAG 2.1 AA, supports assistive technologies, and ensures every citizen can use government digital services regardless of ability." href="UX4G Accessibility.html" graphic="a11y" />
              <FundCard name="Content" desc="Writing principles, plain language standards, and guidance for communicating clearly in English and across 22 Indian languages." href="UX4G Content.html" graphic="content" />
              <FundCard name="Inclusive Design" desc="Guidance for designing services that work for low-literacy users, first-time smartphone users, and citizens in low-bandwidth environments." href={null} graphic="inclusive" />
            </div>
          </div>
        </section>

      </main>

      <SiteFooter />
      <Toasts items={toasts} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
