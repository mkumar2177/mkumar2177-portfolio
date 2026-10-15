import { useEffect, useState, type ReactNode } from 'react'
import { Github, Mail, Linkedin, ArrowUpRight, Menu, X } from 'lucide-react'
import { profile, projects, filters, skills, nav, type Tag } from './data'

const repoUrl = (r: string) => `${profile.github}/${r}`
const Eyebrow = ({ children }: { children: ReactNode }) => <p className="text-eyebrow text-xs tracking-[.22em] uppercase mb-3">{children}</p>
const H2 = ({ children }: { children: ReactNode }) => <h2 className="font-serif font-bold text-3xl md:text-5xl leading-tight mb-5">{children}</h2>
const Chip = ({ on, onClick, children }: { on: boolean; onClick: () => void; children: ReactNode }) => (
  <button onClick={onClick} aria-pressed={on} className={`text-xs tracking-wide px-4 py-2 rounded-full border transition ${on ? 'border-accent bg-accent/10 text-ink' : 'border-line text-mute hover:border-accent'}`}>{children}</button>)
const Btn = ({ href, primary, children, ext }: { href: string; primary?: boolean; children: ReactNode; ext?: boolean }) => (
  <a href={href} {...(ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className={`inline-block px-6 py-3 text-xs tracking-[.14em] uppercase font-semibold border transition ${primary ? 'bg-accent border-accent text-white shadow-[0_0_28px_rgba(15,118,110,.3)] hover:shadow-[0_0_40px_rgba(15,118,110,.5)]' : 'border-[#cfd6e0] hover:border-accent'}`}>{children}</a>)

function useActive() {
  const [a, setA] = useState('')
  useEffect(() => {
    const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && setA(e.target.id)), { rootMargin: '-45% 0px -50% 0px' })
    nav.forEach(id => { const el = document.getElementById(id); if (el) io.observe(el) })
    return () => io.disconnect()
  }, [])
  return a
}

function Header() {
  const [open, setOpen] = useState(false), active = useActive()
  return (
    <header className="fixed inset-x-0 top-0 z-30 bg-bg/80 backdrop-blur border-b border-[#e3e8ef]">
      <div className="flex items-center justify-between px-[5vw] py-3.5">
        <a href="#top" className="font-serif font-bold text-2xl">K<span className="text-accent">U</span>.</a>
        <nav aria-label="Primary" className={`${open ? 'flex' : 'hidden'} md:flex absolute md:static top-full inset-x-0 flex-col md:flex-row gap-5 md:gap-7 bg-panel md:bg-transparent p-[8vw] md:p-0 border-b md:border-0 border-line`}>
          {nav.map(n => <a key={n} href={`#${n}`} onClick={() => setOpen(false)} className={`text-xs tracking-[.14em] uppercase pb-0.5 border-b ${active === n ? 'text-ink border-accent' : 'text-mute border-transparent hover:text-ink'}`}>{n}</a>)}
        </nav>
        <div className="flex items-center gap-3">
          <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="hidden md:block border border-[#cfd6e0] hover:border-accent px-5 py-2 text-xs tracking-[.14em] uppercase">Resume</a>
          <button className="md:hidden p-2 border border-line" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X size={18} /> : <Menu size={18} />}</button>
        </div>
      </div>
    </header>)
}

function Photo() {
  return (
    <figure className="relative w-full max-w-[290px] mx-auto md:ml-auto">
      <img src="/khalid.jpg" width={640} height={800} alt="Mohd Khalid Umar" className="aspect-square w-full object-cover object-top rounded-full border-4 border-panel shadow-[0_20px_50px_rgba(17,24,39,.15)]" />
      <figcaption className="absolute -bottom-4 left-4 right-4 bg-panel border border-line px-4 py-2.5 text-sm"><span className="font-serif font-bold">Mohd Khalid Umar</span><span className="block text-xs text-mute">B.Tech IT · ADGIPS, Delhi</span></figcaption>
    </figure>)
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen grid md:grid-cols-[1.1fr_.9fr] gap-10 items-center px-[8vw] pt-28 max-w-[1240px] mx-auto">
      <div>
        <Eyebrow>Data Science · Machine Learning · AI</Eyebrow>
        <h1 className="font-serif font-bold text-[#123b63] text-5xl md:text-8xl leading-none mb-6">Mohd Khalid Umar</h1>
        <p className="text-mute text-lg max-w-lg">I turn data into insights and machine learning models into practical applications.</p>
        <p className="text-mute text-[15px] max-w-lg mt-3">B.Tech IT student at ADGIPS, Delhi, building projects in predictive modelling, clustering and Streamlit dashboards.</p>
        <div className="flex flex-wrap gap-3.5 mt-8"><Btn primary href="#projects">Explore projects</Btn><Btn ext href={profile.resume}>View resume</Btn></div>
        <div className="flex gap-5 mt-6 text-mute text-sm">
          <a className="hover:text-accent inline-flex gap-1.5 items-center" href={profile.github} target="_blank" rel="noopener noreferrer"><Github size={15} />GitHub</a>
          {profile.linkedin && <a className="hover:text-accent inline-flex gap-1.5 items-center" href={profile.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={15} />LinkedIn</a>}
          <a className="hover:text-accent inline-flex gap-1.5 items-center" href={`mailto:${profile.email}`}><Mail size={15} />Email</a>
        </div>
      </div>
      <Photo />
      <div className="absolute bottom-6 left-1/2 text-[11px] tracking-[.2em] text-dim text-center">SCROLL<i className="block w-px h-9 bg-accent mx-auto mt-2" /></div>
    </section>)
}

const Sec = ({ id, children }: { id: string; children: ReactNode }) => <section id={id} className="relative px-[6vw] md:px-[8vw] py-24 max-w-[1240px] mx-auto">{children}</section>

function About() {
  const rows = [['Education', 'B.Tech IT, 2024 – 2028 · 5th semester'], ['Focus', 'Regression, classification, clustering, EDA'], ['Currently', 'BHOOMI-AI · Smart India Hackathon 2026'], ['Goal', 'Data Science / ML / AI / Analyst internship']]
  return (
    <Sec id="about"><Eyebrow>About</Eyebrow>
      <div className="grid md:grid-cols-[1.2fr_1fr] gap-14">
        <div className="text-mute space-y-4 max-w-[60ch]">
          <H2>I learn by putting models through <span className="text-accent">real data.</span></H2>
          <p>I'm a third-year B.Tech Information Technology student at ADGIPS, Delhi (GGSIPU), interested in extracting insight from data and building models that predict something useful.</p>
          <p>My projects run end to end: cleaning a dataset, engineering features, training regression, classification or clustering models, evaluating them, and presenting results in a Streamlit app. I'm also contributing to BHOOMI-AI, a Smart India Hackathon 2026 project on predicting delays in land acquisition.</p>
          <p>I'm looking for Data Science, ML, AI and Data Analyst internships.</p>
        </div>
        <div>{rows.map(([k, v]) => <div key={k} className="grid sm:grid-cols-[120px_1fr] gap-1 sm:gap-3 border border-line bg-panel px-5 py-4 mb-3 hover:border-accent transition"><span className="text-[11px] tracking-[.14em] uppercase text-[#0f766e] pt-0.5">{k}</span><span>{v}</span></div>)}</div>
      </div></Sec>)
}

function Projects() {
  const [f, setF] = useState<Tag | 'all'>('all')
  const list = projects.filter(p => f === 'all' || p.tags.includes(f))
  return (
    <Sec id="projects"><Eyebrow>Selected work</Eyebrow><H2>Projects that run <span className="text-accent">end to end.</span></H2>
      <div className="flex flex-wrap gap-2.5 my-5 mb-8" role="group" aria-label="Filter projects">{filters.map(x => <Chip key={x.k} on={f === x.k} onClick={() => setF(x.k)}>{x.label}</Chip>)}</div>
      <div className="grid md:grid-cols-2 gap-5">
        {list.map(p => (
          <article key={p.repo} className={`group border border-line bg-panel p-7 flex flex-col transition hover:-translate-y-1 hover:border-accent hover:shadow-[0_12px_40px_rgba(17,24,39,.1)] ${p.flow ? 'md:col-span-2 md:grid md:grid-cols-[1.3fr_1fr] gap-8' : ''}`}>
            <div className="flex flex-col">
              <h3 className="font-serif font-bold text-[#123b63] text-2xl mb-2">{p.name}</h3>
              <p className="text-[15px] mb-2.5">{p.problem}</p>
              <p className="text-mute text-sm mb-3">{p.about}</p>
              <div className="flex flex-wrap gap-1.5 my-3">{p.stack.map(s => <span key={s} className="text-xs px-2.5 py-0.5 border border-[#cfd6e0] text-mute">{s}</span>)}</div>
              <a href={repoUrl(p.repo)} target="_blank" rel="noopener noreferrer" className="mt-auto self-start inline-flex items-center gap-1 text-accent text-xs tracking-[.14em] uppercase border-b border-accent pb-0.5">View repository <ArrowUpRight size={14} /></a>
            </div>
            {p.flow && <ol className="flex flex-col gap-4 justify-center mt-6 md:mt-0">{p.flow.map(s => <li key={s} className="border border-dashed border-[#c3ccd8] px-3.5 py-2.5 text-[13px] text-mute">{s}</li>)}</ol>}
          </article>))}
      </div>
      <p className="text-xs text-dim mt-4">Descriptions come from my resume. No unverified metrics are shown.</p></Sec>)
}

function Stack() {
  const [k, setK] = useState('all')
  return (
    <Sec id="stack"><Eyebrow>Stack</Eyebrow><H2>What I work with.</H2>
      <div className="flex flex-wrap gap-2.5 my-5 mb-8">{['all', ...Object.keys(skills)].map(c => <Chip key={c} on={k === c} onClick={() => setK(c)}>{c === 'all' ? 'All' : c}</Chip>)}</div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Object.entries(skills).filter(([c]) => k === 'all' || c === k).map(([c, v]) => (
          <div key={c} className="border border-line p-6 hover:border-accent transition"><h3 className="font-serif text-xl mb-3">{c}</h3>
            <div className="flex flex-wrap gap-1.5">{v.map(s => <span key={s} className="text-[13px] text-mute px-2.5 py-1 bg-[#eef1f5]">{s}</span>)}</div></div>))}
      </div></Sec>)
}

function Training() {
  return (
    <Sec id="training"><Eyebrow>Training</Eyebrow><H2>Data Science summer training.</H2>
      <div className="border-l-2 border-accent pl-6 max-w-[70ch]"><h3 className="font-serif text-xl">Data Science Summer Training · ADGIPS</h3>
        <p className="text-mute mt-2">Python, data analysis, EDA and visualization (Matplotlib, Seaborn, Power BI), plus ML algorithms for regression, classification and clustering. Applied to multiple projects on real datasets using Jupyter Notebook, Streamlit and Git/GitHub.</p>
        <p className="text-xs text-dim mt-2">No external credential link yet. It will be added when available.</p></div></Sec>)
}

function GitHub() {
  const [msg, setMsg] = useState('Loading live GitHub stats…')
  useEffect(() => {
    fetch(`https://api.github.com/users/${profile.githubUser}`).then(r => { if (!r.ok) throw 0; return r.json() })
      .then(d => setMsg(`Live from GitHub: ${d.public_repos} public repositories · ${d.followers} followers`)).catch(() => setMsg('Live stats unavailable right now.'))
  }, [])
  return (
    <Sec id="github"><Eyebrow>GitHub</Eyebrow><H2>Code, in the open.</H2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-6">{projects.map(p => <a key={p.repo} href={repoUrl(p.repo)} target="_blank" rel="noopener noreferrer" className="border border-line p-4 text-sm hover:border-accent hover:text-accent transition">{p.name}<small className="block text-dim text-xs mt-1 break-all">{profile.githubUser}/{p.repo}</small></a>)}</div>
      <p className="text-mute text-sm mt-7">{msg} <a className="text-accent" href={profile.github} target="_blank" rel="noopener noreferrer">Open profile</a></p></Sec>)
}

function Contact() {
  const [n, setN] = useState(''), [m, setM] = useState('')
  const send = (e: React.FormEvent) => { e.preventDefault(); location.href = `mailto:${profile.email}?subject=${encodeURIComponent('Hello from ' + n)}&body=${encodeURIComponent(m)}` }
  const inp = 'w-full bg-panel border border-line px-3.5 py-3 text-ink'
  return (
    <Sec id="contact"><div className="text-center"><Eyebrow>Contact</Eyebrow>
      <h2 className="font-serif font-bold text-4xl md:text-7xl leading-tight mb-5">Let's turn data into <span className="text-accent">something useful.</span></h2>
      <p className="text-mute">Open to Data Science, ML, AI and Data Analyst internships.</p>
      <div className="flex flex-wrap justify-center gap-3.5 mt-8">
        <Btn primary href={`mailto:${profile.email}`}>Email me</Btn>
        <Btn href={`tel:+91${profile.phone}`}>Call {profile.phone}</Btn>
        <Btn ext href={profile.github}>GitHub</Btn>
      </div>
      <div className="flex flex-col items-center gap-2 mt-6 text-sm">
        <a className="text-accent hover:underline" href={`mailto:${profile.email}`}>{profile.email}</a>
        <a className="text-accent hover:underline" href={`tel:+91${profile.phone}`}>+91 {profile.phone}</a>
      </div>
      <form onSubmit={send} className="max-w-lg mx-auto mt-11 grid gap-3 text-left">
        <input className={inp} placeholder="Your name" aria-label="Your name" required value={n} onChange={e => setN(e.target.value)} />
        <textarea className={inp} rows={4} placeholder="Message" aria-label="Message" required value={m} onChange={e => setM(e.target.value)} />
        <button className="bg-accent text-white px-6 py-3 text-xs tracking-[.14em] uppercase font-semibold" type="submit">Open in email app</button>
        <p className="text-xs text-dim">No server is connected. This opens your email app with the message filled in.</p>
      </form></div></Sec>)
}

export default function App() {
  return (<>
    <Header />
    <main className="relative z-10"><Hero /><About /><Projects /><Stack /><Training /><GitHub /><Contact /></main>
    <footer className="relative z-10 text-center py-9 text-dim text-sm border-t border-[#e3e8ef]">© {new Date().getFullYear()} Mohd Khalid Umar · Data Science & Machine Learning</footer>
  </>)
}
