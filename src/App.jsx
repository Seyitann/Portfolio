import { useState, useEffect } from 'react'
import Reveal from './Reveal.jsx'
import Ph from './Ph.jsx'
import Lightbox, { openLightbox } from './Lightbox.jsx'
import TansKitchen, { meta as tk } from './projects/TansKitchen.jsx'
import SmartIrrigation, { meta as si } from './projects/SmartIrrigation.jsx'
import GymTracker, { meta as gt } from './projects/GymTracker.jsx'
import RealEstateSite, { meta as re } from './projects/RealEstateSite.jsx'

// ---- EDIT YOUR DETAILS HERE ----
const PHOTO = '/images/Engr.png' // your picture, e.g. '/images/me.jpg' (put the file in public/images)
const ME = { name: 'Tolulope', email: 'olaleyetolulope11@gmail.com', phone: '+234 810 393 8914', github: '/Seyitann', linkedin: '/olaleye-tolulope/' }
// Works with or without slashes around your GitHub and LinkedIn names
const strip = s => s.replace(/^\/+|\/+$/g, '')
const gh = strip(ME.github), li = strip(ME.linkedin)
const WA_TEXT = 'Hi, I found your portfolio and I would like to talk.'
// WhatsApp uses the phone number unless you add whatsapp: '+234...' to ME. Keep the country code.
const tel = '+2348103938914' + ME.phone.replace(/[^\d+]/g, '')
const wa = 'https://wa.me/' + (ME.whatsapp || ME.phone).replace(/\D/g, '') + '?text=' + encodeURIComponent(WA_TEXT)

const NAV = [['about', 'About'], ['work', 'Portfolio'], ['services', 'Services'], ['process', 'Process'], ['contact', 'Contact']]
// Rows are [small label, title, description]
const SERVICES = [
  ['Web development', 'Websites and Web Apps', 'Business websites, ordering systems and admin dashboards, built end to end.'],
  ['IoT and embedded', 'Connected Hardware Systems', 'Sensor-based, automated systems, from the hardware to the dashboard that shows the data.'],
  ['Networking', 'Network Setup and Support', 'Network setup and troubleshooting.'],
]
// A general delivery process. Change it to match how you really work.
const PROCESS = [
  ['Discovery', 'Understand what you need', 'Your goals, your users and the problem to solve.'],
  ['Planning', 'Map out the build', 'Features, tools and clear milestones.'],
  ['Build', 'Make it work', 'Interface, backend and, where needed, the hardware.'],
  ['Testing', 'Check everything', 'Fix bugs and test on real devices before launch.'],
  ['Launch', 'Go live and keep it running', 'Deploy, then keep improving it.'],
]
const STACK = [
  ['Frontend', ['React', 'Tailwind CSS', 'TypeScript']],
  ['Backend and data', ['TypeScript', 'Supabase']],
  ['IoT and embedded', ['Sensors', 'Microcontrollers', 'Electronics']],
  ['Networking', ['Network setup', 'Troubleshooting']],
]
// Each entry becomes its own section. Add a new project here.
const PROJECTS = [
  { id: 'tans-kitchen', Component: TansKitchen, meta: tk },
  { id: 'smart-irrigation', Component: SmartIrrigation, meta: si },
  { id: 'gym-tracker', Component: GymTracker, meta: gt },
  { id: 'real-estate-site', Component: RealEstateSite, meta: re },
]
// Add more here, e.g. ['2+', 'Years of experience'], ['5+', 'Happy clients']
const STATS = [[String(PROJECTS.length), 'Projects'], [String(STACK.length), 'Skill areas']]

const Rows = ({ items }) => items.map(([k, t, d], i) => (
  <Reveal key={t} className="trow" delay={i * 60}>
    <span className="n">{String(i + 1).padStart(2, '0')}</span>
    <div><p className="eyebrow">{k}</p><h3>{t}</h3><p className="mute">{d}</p></div>
  </Reveal>
))

export default function App() {
  const [open, setOpen] = useState(false)
  // Any link to #contact (menu, cover) also opens the contact panel
  useEffect(() => {
    const f = e => { if (e.target.closest('a[href="#contact"]')) setOpen(true) }
    document.addEventListener('click', f)
    if (location.hash === '#contact') setOpen(true)
    return () => document.removeEventListener('click', f)
  }, [])
  return (<>
    <nav><div className="wrap"><b>{ME.name.toUpperCase()}</b>
      {NAV.map(([h, l]) => <a key={h} href={'#' + h}>{l}</a>)}
      <a className="navcta" href={wa} target="_blank" rel="noopener noreferrer">Let&rsquo;s Talk</a></div></nav>

    {/* 1. HOME = ABOUT ME: picture, bio, education, connect buttons and contact panel in one page */}
    <header id="about" className="hero"><div className="wrap" style={{ paddingTop: 40, paddingBottom: 60 }}>
      <Reveal className="brk herogrid">
        <div className="hl">
          <a className="avail" href="#contact"><i />Available for <b>new projects</b></a>
          <div className="eyebrow" style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}><span>About</span><h2 style={{ margin: 0 }}>Tolulope</h2></div>
          
          <p className="sub">Full-stack web &middot; IoT &middot; Embedded systems</p>
          <p className="lead intro">I&rsquo;m a software developer and Computer Engineering graduate. I build web applications and hardware-backed systems, from sensors and microcontrollers to the dashboards and APIs that make their data useful.</p>
          <p className="intro mute">I work across the whole stack: the interface, the backend and database behind it, and, when a project calls for it, the electronics and network underneath.</p>
          <div className="cta" id="contact">
            <button className="pill" aria-expanded={open} aria-controls="contact-panel" onClick={() => setOpen(o => !o)}>
              {open ? 'Close' : 'Let\u2019s Connect'}
            </button>
            <a className="ghost" href="#work">View work <span aria-hidden="true">&rarr;</span></a>
            {/* Put your PDF at public/cv.pdf; the app serves it at /cv.pdf. */}
            <a className="ghost" href="/images/Olaleye_Tolulope_Joseph_CV (4).pdf" download>Download CV <span aria-hidden="true">&darr;</span></a>
          </div>
          <div id="contact-panel" className={'panel' + (open ? ' open' : '')}><div>
            <ul className="contact">
              <li><b>Email</b><a href={'mailto:' + ME.email}>{ME.email}</a></li>
              <li><b>Phone</b><span className="acts">
                <a className="callnum" href={tel}>{ME.phone}</a>
                <a className="wa" href={wa} target="_blank" rel="noopener noreferrer">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 21l1.6-4.7A8.5 8.5 0 1 1 8 19.6L3 21z" /><path d="M9 9.5c.5 2.2 2.3 4 4.5 4.5l1.3-1.3-1.8-1-.8.6a3.2 3.2 0 0 1-1.5-1.5l.6-.8-1-1.8L9 9.5z" /></svg>
                  WhatsApp</a></span></li>
              <li><b>GitHub</b><a href={'https://github.com/' + gh}>github.com/{gh}</a></li>
              <li><b>LinkedIn</b><a href={'https://linkedin.com/in/' + li}>linkedin.com/in/{li}</a></li>
            </ul>
          </div></div>
          <div className="stats">{STATS.map(([n, l]) => <div key={l}><b>{n}</b><span>{l}</span></div>)}</div>
        </div>
        <div className="hr">
 <Ph className="portrait" src={PHOTO} alt={ME.name} onOpen={() => openLightbox([{ src: PHOTO, alt: ME.name }])}>Your picture</Ph>          
 <div className="edubadge"><span></span><b>Olaleye Tolulope</b><small></small></div>
        </div>
      </Reveal>
    </div></header>

    {/* 2. PORTFOLIO: a different design, a gallery of tiles that link to each project's details */}
    <section id="work" className="folio"><div className="wrap">
      <Reveal><p className="eyebrow">Selected work</p><h2 className="bigtitle">PORTFOLIO</h2>
        <p className="sub">{PROJECTS.length} projects &middot; tap one for the details</p></Reveal>
      <div className="bento">
        {PROJECTS.map(({ id, meta }, i) => (
          <Reveal key={id} className={'tile t' + i} delay={i * 90}>
            <a href={'#' + id}>
              <Ph src={meta.image} alt={meta.name} />
              <div className="cap"><span>{String(i + 1).padStart(2, '0')}</span><b>{meta.name}</b><small>{meta.tag}</small></div>
              <i className="go" aria-hidden="true"></i>
            </a>
          </Reveal>
        ))}
      </div>
    </div></section>

    {/* 3b. PROJECT DETAILS: each project in its own section (components live in src/projects) */}
    {PROJECTS.map(({ id, Component }, i) => (
      <section key={id} id={id} className={'project' + (i % 2 ? ' flip' : '')}><div className="wrap">
        <Reveal><p className="eyebrow">Project {String(i + 1).padStart(2, '0')}</p></Reveal>
        <Reveal><Component /></Reveal>
      </div></section>
    ))}

    {/* 3. SERVICES */}
    <section id="services"><div className="wrap">
      <Reveal><p className="eyebrow">Services</p><h2>What I provide</h2>
        <p className="mute" style={{ maxWidth: '56ch' }}>Clear services, one connected system, from the first idea to something running for real users.</p></Reveal>
      <div className="trows"><Rows items={SERVICES} /></div>
    </div></section>

    {/* 4. PROCESS */}
    <section id="process"><div className="wrap">
      <Reveal><p className="eyebrow">Process</p><h2>How a project runs</h2></Reveal>
      <div className="trows"><Rows items={PROCESS} /></div>
    </div></section>

    {/* 6. TECH STACK */}
    <section id="stack"><div className="wrap">
      <Reveal><p className="eyebrow">Tech stack</p><h2>The tools I build with</h2></Reveal>
      <div className="stackgrid">
        {STACK.map(([g, items], i) => (
          <Reveal key={g} delay={i * 80}><h3>{g}</h3>
            <div className="chips">{items.map(t => <span key={t}>{t}</span>)}</div></Reveal>
        ))}
      </div>
    </div></section>

    {/* 7. CLOSING CALL TO ACTION */}
    <section id="talk" className="endcta"><div className="wrap">
      <Reveal><p className="eyebrow">Contact</p><h2>You bring the idea. I help turn it into something real.</h2>
        <p className="mute" style={{ maxWidth: '54ch', margin: '16px auto 0' }}>Tell me what you&rsquo;re building, whether it&rsquo;s a web app, a connected device or a network setup, and I&rsquo;ll help take it from concept to something working.</p>
        <div className="cta"><a className="pill" href={wa} target="_blank" rel="noopener noreferrer">Let&rsquo;s Talk</a></div>
        <p className="eyebrow" style={{ marginTop: 44 }}>Find me on</p>
        <div className="socials"><a href={'https://github.com/' + gh} target="_blank" rel="noopener noreferrer">GitHub</a><a href={'https://linkedin.com/in/' + li} target="_blank" rel="noopener noreferrer">LinkedIn</a><a href={'mailto:' + ME.email}>Email</a></div>
      </Reveal>
    </div></section>
    <Lightbox />
    <footer><div className="wrap">&copy; {new Date().getFullYear()} {ME.name} &middot; Portfolio</div></footer>
  </>)
}
