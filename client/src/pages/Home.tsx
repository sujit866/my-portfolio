import {
  ArrowDownRight,
  ArrowUpRight,
  Braces,
  Check,
  ChevronDown,
  Code2,
  Database,
  Film,
  Gamepad2,
  Github,
  Globe2,
  Layers3,
  Linkedin,
  Mail,
  MessageCircle,
  Menu,
  MoveUpRight,
  Server,
  Sparkles,
  Terminal,
  Tv,
  X,
} from "lucide-react";
import { useState } from "react";

const contactInfo = {
  email: "sujitkumarbiswal23@gmail.com",
  whatsappUrl: "https://wa.me/REPLACE_WITH_NUMBER",
  linkedinUrl: "https://www.linkedin.com/in/REPLACE_WITH_PROFILE",
};

const projects = [
  {
    number: "01",
    type: "CURRENT FOCUS",
    title: "Building the foundations",
    description:
      "Right now I am focused on strengthening my core programming skills and preparing for the next chapter of my career.",
    tags: ["C Programming", "Data Structures", "Java", "Python"],
    accent: "lime",
    visual: "focus",
  },
  {
    number: "02",
    type: "DEVELOPER TOOLING",
    title: "Pulse API",
    description:
      "Observability for the APIs teams depend on — fast signal, clear context, zero dashboard fatigue.",
    tags: ["TypeScript", "Redis", "Docker"],
    accent: "cyan",
    visual: "pulse",
  },
  {
    number: "03",
    type: "COLLABORATION SUITE",
    title: "Frameboard",
    description:
      "A real-time canvas for product teams to move from rough idea to aligned execution in one place.",
    tags: ["React", "WebSockets", "Prisma"],
    accent: "violet",
    visual: "frame",
  },
];

const capabilityGroups = [
  {
    icon: Code2,
    title: "Frontend craft",
    copy: "Interfaces with a clear point of view, responsive by default and obsessive about the small moments.",
    skills: ["React / Next.js", "TypeScript", "Design systems"],
  },
  {
    icon: Server,
    title: "Backend systems",
    copy: "Reliable foundations for ambitious products — designed to stay legible as the team and traffic grow.",
    skills: ["Node.js / APIs", "Postgres / Redis", "Cloud architecture"],
  },
  {
    icon: Layers3,
    title: "Product thinking",
    copy: "I translate fuzzy problems into focused software that earns its place in someone's daily workflow.",
    skills: ["Prototyping", "Technical strategy", "Team enablement"],
  },
];

const gameHobbies = [
  ["FF", "Free Fire"],
  ["BG", "BGMI"],
  ["COD", "Call of Duty"],
  ["COC", "Clash of Clans"],
  ["VAL", "Valorant"],
  ["LOL", "League of Legends"],
  ["HOK", "Honor of Kings"],
  ["ML", "Mobile Legends"],
];

function ProjectVisual({ type }: { type: string }) {
  if (type === "focus") {
    return (
      <div className="project-visual visual-focus" aria-hidden="true">
        <div className="focus-terminal"><div className="focus-terminal-bar"><span /><span /><span /><i>learning_path.sh</i></div><div className="focus-terminal-body"><p><b>$</b> cat current_focus.txt</p><h4>BUILDING STRONG<br /><em>FOUNDATIONS.</em></h4><div className="focus-progress"><span><i>01</i> C / LOGIC</span><b><i /></b><small>learning</small></div><div className="focus-progress"><span><i>02</i> DATA STRUCTURES</span><b><i /></b><small>learning</small></div><div className="focus-progress"><span><i>03</i> JAVA + PYTHON</span><b><i /></b><small>building</small></div></div></div>
      </div>
    );
  }
  if (type === "commerce") {
    return (
      <div className="project-visual visual-commerce" aria-hidden="true">
        <div className="visual-window">
          <div className="window-top"><span /><span /><span /><i>orbit / admin</i></div>
          <div className="commerce-layout">
            <div className="commerce-side"><b>O</b><em /><em /><em /><em /></div>
            <div className="commerce-main">
              <div className="commerce-heading"><small>OVERVIEW</small><strong>Good morning, Ari</strong></div>
              <div className="commerce-chart"><span className="chart-label">REVENUE</span><b>$84,290</b><div className="chart-line"><i /><i /><i /><i /><i /><i /><i /><i /><i /></div></div>
              <div className="commerce-cards"><div><small>ORDERS</small><b>1,284</b></div><div><small>CONVERSION</small><b>4.82%</b></div></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "pulse") {
    return (
      <div className="project-visual visual-pulse" aria-hidden="true">
        <div className="pulse-code"><span className="code-muted">01</span><span><b>const</b> <em>request</em> = <strong>await</strong></span><span className="code-indent"><em>pulse</em>.observe(&#123;</span><span className="code-indent code-accent">service: <i>"checkout-api"</i>,</span><span className="code-indent code-accent">window: <i>"24h"</i></span><span className="code-indent">&#125;)</span><span className="code-muted">06</span></div>
        <div className="pulse-side"><div className="pulse-meter"><small>HEALTH SCORE</small><b>98<span>/100</span></b><i /></div><div className="pulse-spark"><small>LATENCY</small><div><i /><i /><i /><i /><i /><i /><i /><i /></div><b>42ms <span>↓ 8.4%</span></b></div></div>
      </div>
    );
  }
  return (
    <div className="project-visual visual-frame" aria-hidden="true">
      <div className="frame-toolbar"><span>FRAMEBOARD</span><i>⌘ K</i><b>SHARE</b></div>
      <div className="frame-canvas"><div className="sticky sticky-yellow">Ship the<br /><strong>feeling.</strong><small>mira · 2m ago</small></div><div className="sticky sticky-pink">Make it<br /><strong>obvious.</strong><small>jules · 8m ago</small></div><div className="sticky sticky-blue">Less, but<br /><strong>better.</strong><small>cam · 12m ago</small></div><div className="frame-cursor">mira</div></div>
    </div>
  );
}

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [siteOn, setSiteOn] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactInfo.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${contactInfo.email}`;
    }
  };

  if (!siteOn) {
    return (
      <main className="site-shell power-screen">
        <div className="grain" />
        <div className="power-console">
          <div className="power-console-top"><span className="brand-symbol">sk<span>/</span></span><span className="power-status">PORTFOLIO SYSTEM / STANDBY</span></div>
          <button className="power-core power-core-button" onClick={() => setSiteOn(true)} aria-label="Ready to explore"><div className="power-core-ring" /><Terminal size={34} /><span>READY TO EXPLORE</span></button>
          <p className="power-kicker">SUJIT KUMAR · FULL STACK DEVELOPER</p>
          <h1>Switch on<br /><em>the whole story.</em></h1>
          <p className="power-description">Enter to explore the complete portfolio — skills, projects, current focus, hobbies, and contact details.</p>
          <div className="power-footer"><span>ALL SYSTEMS READY</span><span>2025 / SK-01</span></div>
        </div>
      </main>
    );
  }

  return (
    <main className="site-shell portfolio-on">
      <div className="grain" />
      <header className="site-header">
        <button className="brand-mark" onClick={() => scrollTo("top")} aria-label="Back to top"><span className="brand-symbol">sk<span>/</span></span><span className="brand-name">Sujit Kumar</span></button>
        <nav className={mobileOpen ? "main-nav open" : "main-nav"} aria-label="Main navigation">
          <button onClick={() => scrollTo("work")}>Work <span>01</span></button>
          <button onClick={() => scrollTo("about")}>About <span>02</span></button>
          <button onClick={() => scrollTo("contact")}>Contact <span>03</span></button>
        </nav>
        <div className="header-actions"><button className="power-toggle is-on" onClick={() => setSiteOn(false)} aria-label="Turn portfolio off"><span /><b>ON</b></button><button className="header-cta" onClick={() => scrollTo("contact")}><span>Let's talk</span><MoveUpRight size={15} /></button></div>
        <button className="mobile-menu" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle navigation">{mobileOpen ? <X size={20} /> : <Menu size={20} />}</button>
      </header>

      <section className="hero section-wrap" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><i /> Available for select projects <span>·</span> 2025</div>
          <h1>I build <span className="outline-word">digital</span><br /><em>things</em> that matter.</h1>
          <p className="hero-lede">Full Stack Developer crafting thoughtful products from first sketch to final deploy. I care about the systems beneath the surface — and the details people remember.</p>
          <div className="hero-actions"><button className="button button-primary" onClick={() => scrollTo("work")}>Explore my work <ArrowDownRight size={16} /></button><button className="button button-quiet" onClick={copyEmail}>{copied ? <><Check size={15} /> Email copied</> : <>Get in touch <ArrowUpRight size={15} /></>}</button></div>
        </div>
        <div className="hero-orbit" aria-hidden="true">
          <div className="orbit-grid orbit-grid-animated" /><div className="orbit-ring ring-one orbit-ring-animated" /><div className="orbit-ring ring-two orbit-ring-animated-reverse" /><div className="orbit-ring ring-three" />
          <div className="orbit-core orbit-core-pulse"><Terminal size={28} /><span>ship / repeat</span></div>
          <div className="orbit-label label-top">01 — PRODUCT</div><div className="orbit-label label-right">FULL STACK<br />DEVELOPER</div><div className="orbit-label label-bottom">DETAILS MATTER</div>
        </div>
        <div className="scroll-cue"><span>Scroll to explore</span><ChevronDown size={15} /></div>
      </section>

      <section className="marquee-band" aria-label="Capabilities"><div className="marquee-track"><span>FULL STACK DEVELOPMENT</span><i>✳</i><span>PRODUCT ENGINEERING</span><i>✳</i><span>INTERACTION DESIGN</span><i>✳</i><span>FULL STACK DEVELOPMENT</span><i>✳</i><span>PRODUCT ENGINEERING</span><i>✳</i></div></section>

      <section className="work section-wrap" id="work">
        <div className="section-heading"><div><span className="section-kicker">01 / SELECTED WORK</span><h2>Built for the <em>real world.</em></h2></div><p>What I’m building, learning, and exploring as I prepare for the next chapter of my career.</p></div>
        <div className="projects-list">{projects.map((project) => <article className={`project-card accent-${project.accent}`} key={project.number}><div className="project-meta"><span>{project.number}</span><span>{project.type}</span></div><div className="project-content"><div><h3>{project.title}</h3><p>{project.description}</p><div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><a href="#contact" onClick={(event) => { event.preventDefault(); scrollTo("contact"); }}>View case study <ArrowUpRight size={15} /></a></div><ProjectVisual type={project.visual} /></div></article>)}</div>
      </section>

      <section className="capabilities section-wrap" id="about">
        <div className="section-heading capabilities-heading"><div><span className="section-kicker">02 / THE TOOLKIT</span><h2>More than just<br /><em>the code.</em></h2></div><p>The best work happens in the overlap between thoughtful technology and a sharp understanding of people.</p></div>
        <div className="capability-grid">{capabilityGroups.map(({ icon: Icon, title, copy, skills }) => <div className="capability" key={title}><div className="capability-icon"><Icon size={21} /></div><h3>{title}</h3><p>{copy}</p><ul>{skills.map((skill) => <li key={skill}><Check size={13} />{skill}</li>)}</ul></div>)}</div>
        <div className="about-strip"><div className="about-avatar">SK</div><div className="about-copy"><span className="section-kicker">A LITTLE ABOUT ME</span><p>I’m Sujit Kumar — a B.Tech fourth-year student focused on building a strong career in software. I enjoy learning how ideas become useful products, and I am currently sharpening my <em>programming foundations.</em></p></div><div className="about-stats"><div><b>04</b><span>B.Tech<br />year</span></div><div><b>04</b><span>core<br />languages</span></div><div><b>∞</b><span>curiosity<br />remaining</span></div></div></div>
        <div className="hobbies-strip"><div className="hobbies-heading"><Gamepad2 size={20} /><span className="section-kicker">WHEN I’M NOT CODING</span><h3>Play. Watch. Repeat.</h3></div><p>Gaming keeps me curious, competitive, and connected. When I need a slower reset, I switch to anime, web series, and movies.</p><div className="hobby-category"><div className="hobby-category-title"><Gamepad2 size={16} /><span>GAMES I PLAY</span></div><div className="hobby-logo-grid">{gameHobbies.map(([logo, name], index) => <span className="hobby-logo" key={name}><b>{logo}</b><small>{String(index + 1).padStart(2, "0")} · {name}</small></span>)}</div></div><div className="hobby-category watch-category"><div className="hobby-category-title"><Film size={16} /><span>WHAT I WATCH</span></div><div className="watch-list"><span><Tv size={15} /><b>Anime</b><small>Stories beyond limits</small></span><span><Tv size={15} /><b>Web series</b><small>Long-form worlds</small></span><span><Film size={15} /><b>Movies</b><small>A good visual reset</small></span></div></div></div>
      </section>

      <section className="contact section-wrap" id="contact"><div className="contact-inner"><div className="contact-orbit"><div className="contact-orbit-ring" /><Sparkles size={22} /></div><span className="section-kicker">03 / HAVE A GOOD ONE?</span><h2>Let's make something<br /><em>worth remembering.</em></h2><p>Have a product idea, a messy problem, or just want to compare notes? My inbox is always open.</p><button className="button button-primary contact-button" onClick={copyEmail}>{copied ? <><Check size={16} /> Copied to clipboard</> : <><Mail size={16} /> {contactInfo.email} <ArrowUpRight size={15} /></>}</button><div className="contact-grid"><a className="contact-card" href={`mailto:${contactInfo.email}`}><Mail size={18} /><span><small>EMAIL</small><b>{contactInfo.email}</b></span><ArrowUpRight size={15} /></a><a className="contact-card" href={contactInfo.whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={18} /><span><small>WHATSAPP</small><b>Message me on WhatsApp</b></span><ArrowUpRight size={15} /></a><a className="contact-card" href={contactInfo.linkedinUrl} target="_blank" rel="noreferrer"><Linkedin size={18} /><span><small>LINKEDIN</small><b>Connect professionally</b></span><ArrowUpRight size={15} /></a></div></div></section>

      <footer className="site-footer"><div className="footer-brand"><span className="brand-symbol">sk<span>/</span></span><span>Built with intention.<br />2025 Sujit Kumar</span></div><div className="footer-links"><a href="https://github.com" target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a><a href={contactInfo.linkedinUrl} target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a><a href={`mailto:${contactInfo.email}`}><Mail size={17} /> Email</a></div><span className="footer-location"><Globe2 size={15} /> Brooklyn, NY</span></footer>
    </main>
  );
}
