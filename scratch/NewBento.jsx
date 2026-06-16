import React, { useState, useRef, useEffect } from 'react';

// To avoid syntax errors if not imported, we assume React is in scope for app.jsx.
// We will simply write the functions and replace them in app.jsx.

export const bentoFunctions = `
function BentoFormElements() {
  const [otp, setOtp] = React.useState(['', '', '', '', '']);
  const otpRefs = React.useRef([]);
  const [categoryOpen, setCategoryOpen] = React.useState(false);
  const [category, setCategory] = React.useState('General');
  const [gender, setGender] = React.useState('Male');
  const [domains, setDomains] = React.useState({ Agriculture: false, Horticulture: true, Fisheries: false, AnimalHusbandry: true });
  const [range, setRange] = React.useState(25);
  const [darkMode, setDarkMode] = React.useState(false);
  const [selDate, setSelDate] = React.useState(23);

  const handleOtpChange = (i, val) => {
    if (!/^[0-9]?$/.test(val)) return;
    const newOtp = [...otp]; newOtp[i] = val; setOtp(newOtp);
    if (val && i < 4) otpRefs.current[i + 1]?.focus();
  };

  return (
    <div className="bento-cell" style={{ gridColumn: 'span 12', background: 'var(--ux4g-color-primary-50)', height: '767px', display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '32px 24px 0 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', zIndex: 10 }}>
        <div style={{ fontFamily: 'var(--ux4g-font-family-sans)', fontSize: '28px', fontWeight: 700, color: 'var(--ux4g-color-primary-600)' }}>Form Elements</div>
        <button style={{ border: '1px solid var(--ux4g-color-primary-300)', background: 'transparent', color: 'var(--ux4g-color-primary-600)', borderRadius: 'var(--ux4g-radius-full)', padding: '8px 16px', fontSize: '14px', cursor: 'pointer' }}>Explore components →</button>
      </div>
      <div style={{ marginTop: '36px', position: 'relative', overflow: 'hidden', flex: 1, display: 'flex' }}>
        <div style={{ flex: '1 1 33%', position: 'relative' }}>
          <div style={{ position: 'absolute', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(106,78,255,0.18) 0%, transparent 70%)', top: '50%', left: 0, transform: 'translateY(-50%)', zIndex: 1 }}></div>
          <img src="assets/images/Form_elements_woman.png" alt="Woman" draggable="false" style={{ position: 'absolute', bottom: 0, left: 0, height: '90%', objectFit: 'contain', objectPosition: 'bottom left', zIndex: 2 }} />
          <div style={{ position: 'absolute', top: 0, left: '16px', right: '16px', background: '#fff', borderRadius: 'var(--ux4g-radius-xl)', padding: '16px 20px', boxShadow: '0 2px 8px var(--ux4g-elevation-color-2)', zIndex: 3 }}>
            <div style={{ fontSize: '14px', fontWeight: 600, marginBottom: '8px', color: 'var(--ux4g-color-neutral-900)' }}>Enter OTP</div>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
              {[0, 1, 2, 3, 4].map(i => (
                <input key={i} ref={el => otpRefs.current[i] = el} value={otp[i]} onChange={e => handleOtpChange(i, e.target.value)} maxLength={1} style={{ width: '48px', height: '56px', border: \`1.5px solid \${otp[i] || document.activeElement === otpRefs.current[i] ? 'var(--ux4g-color-primary-500)' : 'var(--ux4g-color-neutral-300)'}\`, borderRadius: 'var(--ux4g-radius-md)', textAlign: 'center', fontSize: '20px', fontWeight: 600, outline: 'none' }} />
              ))}
            </div>
            <div style={{ fontSize: '12px', color: 'var(--ux4g-color-neutral-600)' }}>
              Didn\\'t receive OTP? <span style={{ color: 'var(--ux4g-color-primary-500)', cursor: 'pointer' }}>Resend in 00:17</span>
            </div>
          </div>
        </div>
        <div style={{ flex: '1 1 33%', background: '#fff', borderRadius: 'var(--ux4g-radius-xl)', margin: '0 8px', padding: '20px', boxShadow: '0 2px 8px var(--ux4g-elevation-color-2)', zIndex: 3, alignSelf: 'flex-start' }}>
          <div style={{ display: 'flex', border: '1px solid var(--ux4g-border-color-neutral-default)', borderRadius: 'var(--ux4g-radius-full)', padding: '4px', alignItems: 'center', marginBottom: '24px' }}>
            <div style={{ padding: '0 12px', color: 'var(--ux4g-color-neutral-500)' }}>🔍</div>
            <input placeholder="Search" style={{ flex: 1, border: 'none', outline: 'none', fontSize: '14px' }} />
            <div style={{ padding: '0 12px', color: 'var(--ux4g-color-neutral-500)' }}>🎤</div>
            <button style={{ background: 'var(--ux4g-color-primary-600)', color: '#fff', border: 'none', borderRadius: 'var(--ux4g-radius-full)', width: '32px', height: '32px', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}>→</button>
          </div>
          <div style={{ marginBottom: '16px' }}>
            <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--ux4g-color-neutral-700)', marginBottom: '4px' }}>Full name (As on Aadhaar) *</div>
            <input placeholder="Full Name" style={{ width: '100%', padding: '10px 12px', border: '1px solid var(--ux4g-border-color-neutral-default)', borderRadius: 'var(--ux4g-radius-md)', fontSize: '14px', outline: 'none' }} />
          </div>
          <div style={{ marginBottom: '16px', position: 'relative' }}>
            <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--ux4g-color-neutral-700)', marginBottom: '4px' }}>Select Category *</div>
            <div onClick={() => setCategoryOpen(!categoryOpen)} style={{ width: '100%', padding: '10px 12px', border: '1px solid var(--ux4g-border-color-neutral-default)', borderRadius: 'var(--ux4g-radius-md)', fontSize: '14px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              {category} <span>⌄</span>
            </div>
            {categoryOpen && (
              <div style={{ position: 'absolute', top: '60px', left: 0, width: '100%', background: '#fff', border: '1px solid var(--ux4g-border-color-neutral-default)', borderRadius: 'var(--ux4g-radius-md)', zIndex: 10, boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                {['General', 'SC', 'ST', 'OBC'].map(c => (
                  <div key={c} onClick={() => { setCategory(c); setCategoryOpen(false); }} style={{ padding: '8px 12px', cursor: 'pointer', fontSize: '14px' }}>{c}</div>
                ))}
              </div>
            )}
            <div style={{ fontSize: '12px', color: 'var(--ux4g-color-neutral-500)', marginTop: '4px' }}>ⓘ It\\'s punishable by law to lie here</div>
          </div>
          <div style={{ marginBottom: '16px' }}>
            <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--ux4g-color-neutral-700)', marginBottom: '8px' }}>Select gender *</div>
            <div style={{ display: 'flex', gap: '16px' }}>
              {['Male', 'Female', 'Other'].map(g => (
                <label key={g} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px', cursor: 'pointer' }}>
                  <input type="radio" name="gender" checked={gender === g} onChange={() => setGender(g)} style={{ accentColor: 'var(--ux4g-color-primary-600)' }} /> {g}
                </label>
              ))}
            </div>
          </div>
          <div style={{ marginBottom: '16px' }}>
            <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--ux4g-color-neutral-700)', marginBottom: '8px' }}>Select domains</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {['Agriculture', 'Horticulture', 'Fisheries', 'AnimalHusbandry'].map(d => (
                <label key={d} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', cursor: 'pointer' }}>
                  <input type="checkbox" checked={domains[d]} onChange={(e) => setDomains({...domains, [d]: e.target.checked})} style={{ accentColor: 'var(--ux4g-color-primary-600)', width: '16px', height: '16px' }} /> {d.replace('AnimalHusbandry', 'Animal Husbandry')}
                </label>
              ))}
            </div>
          </div>
          <div style={{ marginBottom: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', fontWeight: 600, color: 'var(--ux4g-color-neutral-700)', marginBottom: '8px' }}>
              <span>How much %</span>
              <span style={{ color: 'var(--ux4g-color-primary-600)' }}>{range}%</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '12px' }}>0%</span>
              <input type="range" min="0" max="100" value={range} onChange={e => setRange(e.target.value)} style={{ flex: 1, accentColor: 'var(--ux4g-color-primary-600)' }} />
              <span style={{ fontSize: '12px' }}>25%</span>
            </div>
          </div>
          <button style={{ width: '100%', background: 'var(--ux4g-color-primary-700)', color: '#fff', border: 'none', borderRadius: 'var(--ux4g-radius-lg)', height: '40px', fontWeight: 600, cursor: 'pointer' }}>Submit Application</button>
        </div>
        <div style={{ flex: '1 1 33%', position: 'relative', display: 'flex', justifyContent: 'center' }}>
          <img src="assets/images/Form_elements_phone.png" alt="Phone" draggable="false" style={{ height: '100%', objectFit: 'contain', objectPosition: 'top center', zIndex: 2 }} />
          <div style={{ position: 'absolute', top: '8%', left: '16%', right: '16%', bottom: '4%', borderRadius: '40px', overflow: 'hidden', background: darkMode ? '#1C1C1E' : '#fff', zIndex: 3, padding: '24px 16px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <div style={{ color: darkMode ? '#fff' : '#000', fontSize: '14px', fontWeight: 600 }}>Dark Mode</div>
              <div onClick={() => setDarkMode(!darkMode)} style={{ width: '44px', height: '24px', borderRadius: '12px', background: darkMode ? 'var(--ux4g-color-primary-500)' : 'var(--ux4g-color-neutral-300)', position: 'relative', cursor: 'pointer', transition: '0.2s' }}>
                <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#fff', position: 'absolute', top: '2px', left: darkMode ? '22px' : '2px', transition: '0.2s' }}></div>
              </div>
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <div style={{ color: darkMode ? 'var(--ux4g-color-primary-400)' : 'var(--ux4g-color-primary-600)', fontWeight: 600, fontSize: '16px' }}>April 2026 ↓</div>
                <div style={{ display: 'flex', gap: '8px', color: darkMode ? '#fff' : '#000' }}><span>←</span><span>→</span></div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '4px', textAlign: 'center', fontSize: '12px', marginBottom: '8px', color: 'var(--ux4g-color-neutral-500)' }}>
                <div>Mo</div><div>Tu</div><div>We</div><div>Th</div><div>Fr</div><div>Sa</div><div>Su</div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '4px', textAlign: 'center', fontSize: '14px', color: darkMode ? '#fff' : '#000' }}>
                {[...Array(30)].map((_, i) => {
                  const day = i + 1;
                  const isHighlightedRow = (day >= 9 && day <= 12) || (day >= 13 && day <= 19);
                  const isSelected = selDate === day || day === 9;
                  return (
                    <div key={day} onClick={() => setSelDate(day)} style={{ padding: '8px 0', background: isSelected ? (darkMode ? 'var(--ux4g-color-primary-500)' : 'var(--ux4g-color-primary-600)') : (isHighlightedRow ? (darkMode ? 'rgba(106,78,255,0.25)' : 'var(--ux4g-color-primary-50)') : 'transparent'), color: isSelected ? '#fff' : (darkMode ? '#fff' : '#000'), borderRadius: isSelected ? '50%' : '4px', cursor: 'pointer' }}>{day}</div>
                  );
                })}
              </div>
              <div style={{ display: 'flex', gap: '8px', marginTop: 'auto' }}>
                <button style={{ flex: 1, background: 'transparent', border: \`1px solid \${darkMode ? 'rgba(255,255,255,0.3)' : 'var(--ux4g-color-neutral-300)'}\`, color: darkMode ? '#fff' : '#000', borderRadius: 'var(--ux4g-radius-md)', padding: '10px 0', fontWeight: 600, cursor: 'pointer' }}>Cancel</button>
                <button style={{ flex: 1, background: darkMode ? 'transparent' : 'var(--ux4g-color-primary-600)', border: \`1px solid \${darkMode ? 'var(--ux4g-color-primary-400)' : 'transparent'}\`, color: darkMode ? 'var(--ux4g-color-primary-400)' : '#fff', borderRadius: 'var(--ux4g-radius-md)', padding: '10px 0', fontWeight: 600, cursor: 'pointer' }}>Confirm</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BentoNavigation() {
  return (
    <div className="bento-cell" style={{ gridColumn: 'span 7', background: 'var(--ux4g-color-secondary-50)', height: '525px', display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '32px 24px 0 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', zIndex: 10 }}>
        <div style={{ fontFamily: 'var(--ux4g-font-family-sans)', fontSize: '28px', fontWeight: 700, color: 'var(--ux4g-color-primary-600)' }}>Navigation</div>
        <button style={{ border: '1px solid var(--ux4g-color-primary-300)', background: 'transparent', color: 'var(--ux4g-color-primary-600)', borderRadius: 'var(--ux4g-radius-full)', padding: '8px 16px', fontSize: '14px', cursor: 'pointer' }}>Explore components →</button>
      </div>
      <div style={{ marginTop: '36px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div style={{ background: '#fff', borderRadius: 'var(--ux4g-radius-xl)', padding: '16px 20px', margin: '0 24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '32px', height: '32px', background: '#ccc', borderRadius: '50%' }}></div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '14px', fontWeight: 'bold' }}>Title</span>
                <span style={{ fontSize: '12px', color: 'var(--ux4g-color-neutral-500)' }}>Description</span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <span>🔍</span>
              <button style={{ background: 'var(--ux4g-color-primary-600)', color: '#fff', border: 'none', padding: '6px 16px', borderRadius: 'var(--ux4g-radius-full)', fontSize: '14px' }}>Button</button>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '8px', fontSize: '12px', color: 'var(--ux4g-color-neutral-500)', alignItems: 'center' }}>
            <span>🏠 Home</span> <span>›</span> <span>Components</span> <span>›</span> <span>Navigation</span> <span>›</span> <span style={{ color: 'var(--ux4g-color-primary-600)', fontWeight: 'bold' }}>Breadcrumb</span>
          </div>
        </div>
        <div style={{ background: '#fff', borderRadius: 'var(--ux4g-radius-xl)', padding: '24px', margin: '0 24px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <div style={{ display: 'flex', gap: '16px', borderBottom: '1px solid var(--ux4g-border-color-neutral-subtle)', paddingBottom: '12px' }}>
            <div style={{ color: 'var(--ux4g-color-primary-700)', fontWeight: 'bold', background: 'var(--ux4g-color-primary-100)', padding: '4px 12px', borderRadius: 'var(--ux4g-radius-full)' }}>Overview</div>
            <div style={{ color: 'var(--ux4g-color-neutral-700)', padding: '4px 12px' }}>Usage</div>
            <div style={{ color: 'var(--ux4g-color-neutral-700)', padding: '4px 12px' }}>Specs</div>
            <div style={{ color: 'var(--ux4g-color-neutral-700)', padding: '4px 12px' }}>Resources</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ width: 24, height: 24, borderRadius: '50%', background: 'var(--ux4g-color-primary-600)', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '12px' }}>✓</div>
            <div style={{ flex: 1, height: 2, background: 'var(--ux4g-color-primary-600)' }}></div>
            <div style={{ width: 24, height: 24, borderRadius: '50%', border: '2px solid var(--ux4g-color-primary-600)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><div style={{ width: 8, height: 8, background: 'var(--ux4g-color-primary-600)', borderRadius: '50%' }}></div></div>
            <div style={{ flex: 1, height: 2, borderTop: '2px dashed var(--ux4g-color-neutral-300)' }}></div>
            <div style={{ width: 24, height: 24, borderRadius: '50%', border: '2px solid var(--ux4g-color-neutral-300)', color: 'var(--ux4g-color-neutral-500)', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '12px' }}>3</div>
            <div style={{ flex: 1, height: 2, borderTop: '2px dashed var(--ux4g-color-neutral-300)' }}></div>
            <div style={{ width: 24, height: 24, borderRadius: '50%', border: '2px solid var(--ux4g-color-neutral-300)', color: 'var(--ux4g-color-neutral-500)', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '12px' }}>4</div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', alignItems: 'center', marginTop: '12px' }}>
            <span>←</span>
            <div style={{ width: 24, height: 8, borderRadius: '4px', background: 'var(--ux4g-color-primary-600)' }}></div>
            {[...Array(6)].map((_, i) => <div key={i} style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--ux4g-color-neutral-300)' }}></div>)}
            <span>→</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function BentoIndia() {
  return (
    <div className="bento-cell" style={{ gridColumn: 'span 5', background: 'linear-gradient(135deg, var(--ux4g-color-primary-100) 0%, var(--ux4g-color-primary-200) 100%)', height: '525px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1 }}></div>
      <div style={{ position: 'absolute', bottom: '32px', left: '32px', zIndex: 3 }}>
        <div style={{ fontSize: '20px', fontWeight: 600, color: 'var(--ux4g-color-primary-700)' }}>Built for</div>
        <div style={{ fontFamily: 'var(--ux4g-font-family-sans)', fontSize: '96px', fontWeight: 800, color: 'var(--ux4g-color-primary-600)', lineHeight: 1 }}>INDIA</div>
      </div>
      <img src="assets/images/Built_for_india_man.png" alt="Indian Man" draggable="false" style={{ position: 'absolute', bottom: 0, right: 0, height: '90%', objectFit: 'contain', objectPosition: 'bottom right', zIndex: 2 }} />
    </div>
  );
}

function BentoDataDisplay() {
  const [candidates, setCandidates] = React.useState([
    { id: 1, name: 'Arjun Rao', init: 'AR', att: 'Present', dept: 'Active', role: 'Developer', sel: false },
    { id: 2, name: 'Priya Mehta', init: 'PM', att: 'Absent', dept: 'Active', role: 'Designer', sel: false },
    { id: 3, name: 'Suresh Kumar', init: 'SK', att: 'Present', dept: 'Inactive', role: 'Manager', sel: false },
    { id: 4, name: 'Neha Agarwal', init: 'NA', att: 'Absent', dept: 'Active', role: 'Analyst', sel: false },
    { id: 5, name: 'Rahul Srivastava', init: 'NA', att: 'Absent', dept: 'Active', role: 'Analyst', sel: false },
  ]);
  const [selSlot, setSelSlot] = React.useState('12:30 PM');

  return (
    <div className="bento-cell" style={{ gridColumn: 'span 12', background: 'var(--ux4g-color-primary-50)', height: '1116px', display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '32px 24px 0 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', zIndex: 10 }}>
        <div style={{ fontFamily: 'var(--ux4g-font-family-sans)', fontSize: '28px', fontWeight: 700, color: 'var(--ux4g-color-primary-600)' }}>Data Display</div>
        <button style={{ border: '1px solid var(--ux4g-color-primary-300)', background: 'transparent', color: 'var(--ux4g-color-primary-600)', borderRadius: 'var(--ux4g-radius-full)', padding: '8px 16px', fontSize: '14px', cursor: 'pointer' }}>Explore components →</button>
      </div>
      <div style={{ marginTop: '36px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{ display: 'flex', width: '100%' }}>
          <div style={{ flex: '0 0 37%', padding: '0 0 0 24px' }}>
            <div style={{ background: '#fff', borderRadius: 'var(--ux4g-radius-xl)', overflow: 'hidden' }}>
              <img src="assets/images/Data_display_students.png" alt="Students" draggable="false" style={{ width: '100%', height: '200px', objectFit: 'cover', objectPosition: 'center' }} />
              <div style={{ padding: '16px' }}>
                <div style={{ fontSize: '14px', fontWeight: 'bold' }}>Post Graduate Indira Gandhi Scholarship For Single Girl Child →</div>
                <div style={{ fontSize: '12px', color: 'var(--ux4g-color-neutral-500)', marginTop: '4px' }}>Ministry of Education</div>
                <div style={{ fontSize: '12px', color: 'var(--ux4g-color-neutral-500)', marginTop: '8px' }}>A scholarship scheme by the University Grants Commission for Girl students</div>
                <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
                  <span style={{ background: 'var(--ux4g-color-primary-50)', border: '1px solid var(--ux4g-color-primary-200)', color: 'var(--ux4g-color-primary-700)', borderRadius: 'var(--ux4g-radius-full)', padding: '4px 10px', fontSize: '12px' }}>Girl Child</span>
                  <span style={{ background: 'var(--ux4g-color-primary-50)', border: '1px solid var(--ux4g-color-primary-200)', color: 'var(--ux4g-color-primary-700)', borderRadius: 'var(--ux4g-radius-full)', padding: '4px 10px', fontSize: '12px' }}>Scholarship</span>
                </div>
                <div style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
                  <button style={{ flex: 1, border: '1.5px solid var(--ux4g-color-primary-600)', background: 'transparent', color: 'var(--ux4g-color-primary-600)', padding: '8px 0', borderRadius: 'var(--ux4g-radius-md)', fontWeight: 600 }}>Check eligibility</button>
                  <button style={{ flex: 1, border: 'none', background: 'var(--ux4g-color-primary-700)', color: '#fff', padding: '8px 0', borderRadius: 'var(--ux4g-radius-md)', fontWeight: 600 }}>Apply</button>
                </div>
              </div>
            </div>
          </div>
          <div style={{ flex: '1 1 63%', position: 'relative', margin: '0 24px 0 16px' }}>
            <img src="assets/images/Data_display_laptop.png" alt="Laptop" draggable="false" style={{ width: '100%', borderRadius: 'var(--ux4g-radius-xl)' }} />
            <div style={{ position: 'absolute', top: '12%', left: '4%', right: '2%', bottom: '10%', overflow: 'hidden' }}>
              <div style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '16px' }}>List of Candidates</div>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
                {['All', 'Group-A', 'Group-B', 'Group-C', 'Only defaulters'].map((c, i) => (
                  <span key={c} style={{ background: (i===1||i===3) ? 'var(--ux4g-color-primary-600)' : '#fff', color: (i===1||i===3) ? '#fff' : '#000', border: (i===1||i===3) ? 'none' : '1px solid #ccc', padding: '4px 12px', borderRadius: '16px', fontSize: '12px' }}>{c}</span>
                ))}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '40px 2fr 1fr 1fr 1fr', gap: '8px', borderBottom: '1px solid #eee', paddingBottom: '8px', fontSize: '12px', fontWeight: 'bold', color: '#666' }}>
                <div></div><div>Name</div><div>Attendance</div><div>Department</div><div>Status</div>
              </div>
              {candidates.map((c, i) => (
                <div key={c.id} style={{ display: 'grid', gridTemplateColumns: '40px 2fr 1fr 1fr 1fr', gap: '8px', borderBottom: '1px solid #eee', padding: '12px 0', fontSize: '13px', alignItems: 'center' }}>
                  <input type="checkbox" checked={c.sel} onChange={() => { const nc = [...candidates]; nc[i].sel = !nc[i].sel; setCandidates(nc); }} style={{ width: '16px', height: '16px' }} />
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '24px', height: '24px', background: 'var(--ux4g-color-primary-100)', color: 'var(--ux4g-color-primary-600)', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '10px', fontWeight: 'bold' }}>{c.init}</div>
                    {c.name}
                  </div>
                  <div>
                    <span style={{ padding: '4px 8px', borderRadius: '4px', background: c.att === 'Present' ? 'var(--ux4g-bg-success-soft)' : 'var(--ux4g-bg-error-soft)', color: c.att === 'Present' ? 'var(--ux4g-text-status-success)' : 'var(--ux4g-text-status-error)', fontSize: '11px', fontWeight: 600 }}>{c.att}</span>
                  </div>
                  <div>{c.dept}</div>
                  <div>{c.role}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', marginTop: '16px', flex: 1 }}>
          <div style={{ flex: '0 0 40%', display: 'flex', flexDirection: 'column' }}>
            <div style={{ margin: '0 24px', padding: '16px', background: '#fff', borderRadius: 'var(--ux4g-radius-xl)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex' }}>
                {[1,2,3,4].map(i => <div key={i} style={{ width: 32, height: 32, borderRadius: '50%', background: '#ccc', marginLeft: i===1 ? 0 : '-12px', border: '2px solid #fff' }}></div>)}
              </div>
              <div style={{ border: '1px solid var(--ux4g-border-color-neutral-default)', padding: '6px 12px', borderRadius: '8px', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>Present × Absent × <span>⌄</span></div>
            </div>
            <div style={{ margin: '12px 24px 0 24px', padding: '16px', background: '#fff', borderRadius: 'var(--ux4g-radius-xl)', flex: 1 }}>
              <div style={{ display: 'flex', gap: '16px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ width: 20, height: 20, background: 'var(--ux4g-color-green-500)', borderRadius: '50%', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '10px' }}>✓</div>
                  <div style={{ width: 2, height: '40px', background: 'var(--ux4g-color-green-500)' }}></div>
                  <div style={{ width: 20, height: 20, background: 'var(--ux4g-color-primary-500)', borderRadius: '50%' }}></div>
                  <div style={{ width: 2, height: '40px', background: '#eee' }}></div>
                  <div style={{ width: 20, height: 20, border: '2px solid #ccc', borderRadius: '50%', color: '#999', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '10px' }}>4</div>
                  <div style={{ width: 2, height: '40px', background: '#eee' }}></div>
                  <div style={{ width: 20, height: 20, border: '2px solid #ccc', borderRadius: '50%', color: '#999', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '10px' }}>5</div>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '14px', color: 'var(--ux4g-color-neutral-500)', height: '20px' }}>Submitted</div>
                  <div style={{ height: '40px' }}></div>
                  <div>
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                      <span style={{ fontWeight: 'bold' }}>Income Certificate</span>
                      <span style={{ background: 'var(--ux4g-bg-warning-soft)', color: 'var(--ux4g-color-orange-700)', padding: '2px 6px', borderRadius: '4px', fontSize: '10px' }}>Under review</span>
                      <span style={{ marginLeft: 'auto', fontSize: '12px', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Track ↓</span>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', fontSize: '11px', marginTop: '8px', color: 'var(--ux4g-color-neutral-500)' }}>
                      <div><div>Reference Number</div><div style={{ color: '#000' }}>INC-2026-MH-04127</div></div>
                      <div><div>Submitted Date</div><div style={{ color: '#000' }}>1 Apr 2026</div></div>
                      <div><div>Assigned Officer</div><div style={{ color: '#000' }}>Rahul Sharma</div></div>
                      <div><div>Department</div><div style={{ color: '#000' }}>Revenue Department</div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ flex: '0 0 35%', margin: '0 8px', background: '#fff', borderRadius: 'var(--ux4g-radius-xl)', padding: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <div style={{ color: 'var(--ux4g-color-primary-600)', fontWeight: 600, fontSize: '16px' }}>April 2026</div>
              <div style={{ display: 'flex', gap: '8px' }}><span>←</span><span>→</span></div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '4px', textAlign: 'center', fontSize: '12px', marginBottom: '8px', color: 'var(--ux4g-color-neutral-500)' }}>
              <div>Mo</div><div>Tu</div><div>We</div><div>Th</div><div>Fr</div><div>Sa</div><div>Su</div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '4px', textAlign: 'center', fontSize: '14px' }}>
              {[...Array(30)].map((_, i) => {
                const day = i + 1;
                let bg = 'transparent', color = '#000';
                if (day === 9 || day === 21) { bg = 'var(--ux4g-bg-warning-soft)'; color = 'var(--ux4g-color-orange-600)'; }
                if (day === 15) { bg = '#eee'; }
                if (day === 23) { bg = 'var(--ux4g-color-primary-600)'; color = '#fff'; }
                return <div key={day} style={{ padding: '8px 0', background: bg, color: color, borderRadius: day===23?'50%':'4px' }}>{day}</div>;
              })}
            </div>
          </div>
          <div style={{ flex: '0 0 25%', margin: '0 24px 0 0', background: '#fff', borderRadius: 'var(--ux4g-radius-xl)', padding: '24px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ color: 'var(--ux4g-color-primary-600)', fontWeight: 'bold', fontSize: '14px', marginBottom: '16px' }}>23rd April 2026</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
              {['9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM'].map((t, i) => {
                let style = { border: '1px solid #ccc', padding: '6px', borderRadius: '4px', fontSize: '12px', textAlign: 'center', cursor: 'pointer' };
                if (i === 4) style = { ...style, color: '#ccc', textDecoration: 'line-through' };
                if (t === selSlot) style = { ...style, background: 'var(--ux4g-color-primary-600)', color: '#fff', border: 'none' };
                return <div key={i} onClick={() => i!==4 && setSelSlot(t)} style={style}>{t}</div>;
              })}
            </div>
            <div style={{ display: 'flex', gap: '8px', marginTop: 'auto' }}>
              <button style={{ flex: 1, background: 'transparent', border: '1px solid var(--ux4g-color-neutral-300)', color: '#000', borderRadius: 'var(--ux4g-radius-md)', padding: '10px 0', fontWeight: 600, cursor: 'pointer' }}>Cancel</button>
              <button style={{ flex: 1, background: 'var(--ux4g-color-primary-600)', border: 'none', color: '#fff', borderRadius: 'var(--ux4g-radius-md)', padding: '10px 0', fontWeight: 600, cursor: 'pointer' }}>Confirm</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BentoAlertsFeedback() {
  const [rating, setRating] = React.useState(3);
  const [feedback, setFeedback] = React.useState('');
  return (
    <div className="bento-cell" style={{ gridColumn: 'span 8', background: 'var(--ux4g-color-secondary-50)', height: '545px', display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '32px 24px 0 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', zIndex: 10 }}>
        <div style={{ fontFamily: 'var(--ux4g-font-family-sans)', fontSize: '28px', fontWeight: 700, color: 'var(--ux4g-color-primary-600)' }}>Alerts & Feedback</div>
        <button style={{ border: '1px solid var(--ux4g-color-primary-300)', background: 'transparent', color: 'var(--ux4g-color-primary-600)', borderRadius: 'var(--ux4g-radius-full)', padding: '8px 16px', fontSize: '14px', cursor: 'pointer' }}>Explore components →</button>
      </div>
      <div style={{ marginTop: '36px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{ margin: '0 24px', display: 'flex', gap: '8px', overflowX: 'hidden' }}>
          <span style={{ padding: '6px 14px', background: 'var(--ux4g-color-neutral-900)', color: '#fff', borderRadius: 'var(--ux4g-radius-full)', fontSize: '12px' }}>Neutral</span>
          <span style={{ padding: '6px 14px', background: 'var(--ux4g-color-primary-600)', color: '#fff', borderRadius: 'var(--ux4g-radius-full)', fontSize: '12px' }}>Brand</span>
          <span style={{ padding: '6px 14px', background: 'var(--ux4g-color-green-600)', color: '#fff', borderRadius: 'var(--ux4g-radius-full)', fontSize: '12px' }}>Success</span>
          <span style={{ padding: '6px 14px', background: 'var(--ux4g-color-orange-500)', color: '#fff', borderRadius: 'var(--ux4g-radius-full)', fontSize: '12px' }}>Warning</span>
          <span style={{ padding: '6px 14px', background: 'var(--ux4g-color-red-600)', color: '#fff', borderRadius: 'var(--ux4g-radius-full)', fontSize: '12px' }}>Error</span>
        </div>
        <div style={{ display: 'flex', marginTop: '24px', flex: 1 }}>
          <div style={{ flex: 1, position: 'relative' }}>
            <img src="assets/images/Alerts___Feedback_laptop.png" alt="Laptop" draggable="false" style={{ position: 'absolute', bottom: '-20px', left: '-20px', width: '80%', opacity: 0.9 }} />
            <div style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', margin: '0 24px', background: '#fff', borderRadius: 'var(--ux4g-radius-xl)', padding: '16px', boxShadow: '0 4px 16px var(--ux4g-elevation-color-4)', zIndex: 2, width: 'calc(100% - 48px)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 'bold', fontSize: '14px' }}>
                  <span style={{ color: 'var(--ux4g-color-orange-500)' }}>⚠️</span> Aadhaar Verification Pending
                </div>
                <div>×</div>
              </div>
              <div style={{ fontSize: '13px', color: 'var(--ux4g-color-neutral-700)', marginBottom: '16px' }}>Your Aadhaar is not yet linked to your account. Link it now to access government services easily.</div>
              <div style={{ width: '100%', height: '4px', background: '#eee', borderRadius: '2px', marginBottom: '16px' }}>
                <div style={{ width: '80%', height: '100%', background: 'var(--ux4g-color-primary-500)', borderRadius: '2px' }}></div>
              </div>
              <div style={{ display: 'flex', gap: '16px', fontSize: '13px', fontWeight: 'bold', color: 'var(--ux4g-color-primary-600)' }}>
                <span>Link Aadhaar</span><span>Remind Later</span>
              </div>
            </div>
          </div>
          <div style={{ width: '300px', background: '#fff', borderRadius: 'var(--ux4g-radius-xl)', padding: '20px', margin: '0 24px 0 12px', alignSelf: 'flex-start' }}>
            <div style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '16px' }}>How do you feel about this service?</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              {['😞','😟','😐','😊','😄'].map((em, i) => (
                <div key={i} onClick={() => setRating(i)} style={{ width: '40px', height: '40px', borderRadius: '50%', border: \`2px solid \${rating===i ? 'var(--ux4g-color-green-500)' : 'transparent'}\`, background: rating===i ? 'var(--ux4g-bg-success-soft)' : 'transparent', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '20px', cursor: 'pointer' }}>{em}</div>
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#999', marginBottom: '16px' }}>
              <span>← Bad</span><span>Good →</span>
            </div>
            <div style={{ position: 'relative' }}>
              <textarea placeholder="Please tell us how can we improve" value={feedback} onChange={e => setFeedback(e.target.value)} maxLength={200} style={{ width: '100%', height: '80px', border: '1px solid var(--ux4g-border-color-neutral-default)', borderRadius: 'var(--ux4g-radius-md)', padding: '12px', fontSize: '14px', resize: 'none', outline: 'none' }}></textarea>
              <div style={{ position: 'absolute', bottom: '12px', right: '12px', fontSize: '11px', color: '#999' }}>{feedback.length}/200</div>
            </div>
            <button style={{ width: '100%', background: 'var(--ux4g-color-primary-700)', color: '#fff', border: 'none', borderRadius: 'var(--ux4g-radius-lg)', height: '40px', fontWeight: 600, marginTop: '16px', cursor: 'pointer' }}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Bento80PlusComponents() {
  return (
    <div className="bento-cell" style={{ gridColumn: 'span 4', background: 'linear-gradient(135deg, var(--ux4g-color-primary-600) 0%, var(--ux4g-color-primary-800) 100%)', height: '545px', position: 'relative', padding: '32px' }}>
      <div style={{ fontFamily: 'var(--ux4g-font-family-sans)', fontSize: '72px', fontWeight: 800, color: '#fff', lineHeight: 1 }}>80+</div>
      <div style={{ fontFamily: 'var(--ux4g-font-family-sans)', fontSize: '40px', fontWeight: 700, color: '#fff', lineHeight: 1, marginTop: '4px' }}>Components</div>
      <div style={{ fontSize: '16px', color: 'rgba(255,255,255,0.75)', marginTop: '16px', lineHeight: 1.5 }}>Tailored to the needs of Indian government services.</div>
      <button style={{ position: 'absolute', bottom: '32px', left: '32px', background: '#fff', color: 'var(--ux4g-color-primary-700)', border: 'none', borderRadius: 'var(--ux4g-radius-full)', padding: '12px 24px', fontWeight: 600, cursor: 'pointer' }}>Explore →</button>
    </div>
  );
}
`;
