import { useState, useEffect, useRef } from 'react';
import profilePhoto from './assets/profile.jpg';
import developerMe from './assets/developerMe.png';
import cvFile from './assets/CV-jhoancamilorayomejia.pdf';
import goVueVideo from './assets/GoVue.mp4';
import tgAcueductoVideo from './assets/tgacueducto.mp4';
import gymPHPVideo from './assets/gymPHP.mp4';
import barbershopVideo from './assets/barbershop.mp4';
import springBootVideo from './assets/springBoot.webm';

// Tech stack icons
import goIcon        from './assets/tech/Go.svg';
import vueIcon       from './assets/tech/vuejs.svg';
import postgresIcon  from './assets/tech/postgresql.svg';
import springIcon    from './assets/tech/springboot.svg';
import angularIcon   from './assets/tech/angular.svg';
import reactIcon     from './assets/tech/React.svg';
import phpIcon       from './assets/tech/PHPLaravel.jpeg';
import mongoIcon     from './assets/tech/mongodb.svg';
import mysqlIcon     from './assets/tech/mysql.svg';
import viteIcon      from './assets/tech/vite.svg';
import vercelIcon    from './assets/tech/vercel.svg';
import railwayIcon   from './assets/tech/railway.svg';
import dockerIcon    from './assets/tech/docker.svg';
import bootstrapIcon from './assets/tech/bootstrap.svg';
import nodeIcon      from './assets/tech/nodejs.svg';
import jsIcon        from './assets/tech/javascript.svg';
import CSS           from './assets/tech/css.svg';

import './App.css';

/* ─── Icons ─── */
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z"/></svg>
);
const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"/></svg>
);
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3Z"/></svg>
);
const EmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>
);
const DocIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
);
const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
);
const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>
);

const CodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>
);
const BriefcaseIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M20 6h-2.18c.07-.44.18-.88.18-1.36C18 3.15 16.84 2 15.45 2h-6.9C7.16 2 6 3.15 6 4.64c0 .48.11.92.18 1.36H4C2.9 6 2 6.9 2 8v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-9.45-2h6.9c.58 0 1.04.46 1.04 1.04 0 .48-.18.92-.18 1.36H8.69c0-.44-.18-.88-.18-1.36C8.51 4.46 8.97 4 9.55 4zM20 19H4V8h16v11z"/></svg>
);
const LayersIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z"/></svg>
);

/* ─── Desktop Mockup ─── */
const DesktopMockup = ({ src }) => (
  <div className="mockup-desktop-stage">
    <div className="mockup-desktop">
      <div className="mockup-menubar">
        <div className="mockup-dots">
          <span className="dot dot--red" />
          <span className="dot dot--yellow" />
          <span className="dot dot--green" />
        </div>
        <div className="mockup-url-bar">
          <span>🔒</span>
          <span className="mockup-url-text">localhost:8080</span>
        </div>
        <div style={{ width: 40 }} />
      </div>
      <div className="mockup-screen">
        <video src={src} controls className="mockup-video" preload="metadata" playsInline />
      </div>
      <div className="mockup-stand">
        <div className="mockup-neck" />
        <div className="mockup-base" />
      </div>
    </div>
  </div>
);

/* ─── Phone Mockup ─── */
const PhoneMockup = ({ src }) => (
  <div className="mockup-phone-stage">
    <div className="mockup-phone">
      <div className="mockup-phone-notch" />
      <div className="mockup-phone-screen">
        <video src={src} controls className="mockup-video" preload="metadata" playsInline />
      </div>
      <div className="mockup-phone-home" />
    </div>
  </div>
);

/* ─── Tech Stack Data ─── */
const TECH_STACK = [
  { name: 'Go',         icon: goIcon,        category: 'Backend'   },
  { name: 'Vue.js',     icon: vueIcon,       category: 'Frontend'  },
  { name: 'PostgreSQL', icon: postgresIcon,  category: 'Database'  },
  { name: 'Spring Boot',icon: springIcon,    category: 'Backend'   },
  { name: 'Angular',    icon: angularIcon,   category: 'Frontend'  },
  { name: 'React',      icon: reactIcon,     category: 'Frontend'  },
  { name: 'PHP/Laravel',icon: phpIcon,       category: 'Backend'   },
  { name: 'MongoDB',    icon: mongoIcon,     category: 'Database'  },
  { name: 'MySQL',      icon: mysqlIcon,     category: 'Database'  },
  { name: 'Vite',       icon: viteIcon,      category: 'Tools'     },
  { name: 'Vercel',     icon: vercelIcon,    category: 'Tools'     },
  { name: 'Railway',    icon: railwayIcon,   category: 'Tools'     },
  { name: 'Docker',     icon: dockerIcon,    category: 'Tools'     },
  { name: 'Bootstrap',  icon: bootstrapIcon, category: 'Frontend'  },
  { name: 'Node.js',    icon: nodeIcon,      category: 'Backend'   },
  { name: 'JavaScript', icon: jsIcon,        category: 'Frontend'  },
  { name: 'CSS',        icon: CSS,           category: 'Frontend'  },
];

/* ─── Projects Data ─── */
const STACKS = [
  { id: 'go',     label: 'Golang · Vue.js',       accent: '#00ACD7' },
  { id: 'spring', label: 'Spring Boot · Angular',  accent: '#6DB33F' },
  { id: 'php',    label: 'PHP · Laravel',          accent: '#8892BF' },
];

const PROJECTS = {
  go: {
    featured: {
      repo:  'https://github.com/jhoancamilorayomejia/GymBox',
      name:  'GymBox',
      about: 'A full-stack gym management system designed to help gyms efficiently manage client information, handle subscriptions, attendance tracking, and maintain clear payment control. It also includes a clear and intuitive subscription visualization system, allowing both gym administrators and clients to easily identify the status of each membership plan (active, expired, etc.), improving the overall user experience and decision-making process — all through a clean and reactive interface backed by a high-performance REST API, PostgreSQL, and JWT-based authentication for security.',
      tags:  ['Go', 'Vue.js 3', 'PostgreSQL', 'Payment gateway', 'Docker'],
      video: goVueVideo,
    },
    others: [
      {
        repo:  'https://github.com/jhoancamilorayomejia/barbershop',
        name:  'Barbershop',
        icon:  '✂️',
        about: 'A web-based appointment booking system developed for barbershops to simplify reservation management and avoid scheduling conflicts. Clients can easily book appointments based on real-time availability, while the administrator can clearly manage reservations, including customer names, dates, and time slots. Once an appointment is confirmed, a PDF receipt is automatically generated and downloaded as proof of the reservation.',
        tags:  ['Go', 'Vue.js', 'PostgreSQL', 'Docker'],
        video: barbershopVideo,
        mockup: 'phone',
      },
      {
        repo:  'https://github.com/jhoancamilorayomejia/TGacueducto',
        name:  'TG Acueducto',
        icon:  '💧',
        about: 'A digital billing management platform developed for small community water utility companies, designed to optimize administrative processes and improve interaction with users. The system allows utility companies to generate invoices, download billing records, and automatically send invoices via email.',
        tags:  ['Go', 'Vue.js', 'PostgreSQL', 'Payment gateway'],
        video: tgAcueductoVideo,
        mockup: 'desktop',
      },
    ],
  },
  spring: {
    featured: null,
    others: [
      {
        repo:  'https://github.com/jhoancamilorayomejia/payment-orders',
        name:  'Spring Boot (Java)',
        icon:  '☕',
        about: 'A secure order management system that combines JWT-based authentication with role-based access control for administrators and operators. The platform allows users to register and update orders, receive status change notifications, and access protected routes according to their assigned roles, preventing unauthorized access.',
        tags:  ['Java', 'Spring Boot', 'Angular', 'PostgreSQL'],
        video: springBootVideo,
        mockup: 'desktop',
      },
    ],
  },
  php: {
    featured: null,
    others: [
      {
        repo:  'https://github.com/jhoancamilorayomejia/AppGym',
        name:  'Laravel Projects',
        icon:  '🐘',
        about: 'A platform designed to help gyms efficiently manage customer information, subscriptions, and payment records. The system also includes email notifications for payment reminders and confirmations, as well as online payment gateway integration to facilitate secure digital transactions. Security and authentication are handled using JWT-based authorization.',
        tags:  ['PHP', 'Laravel', 'PostgreSQL'],
        video: gymPHPVideo,
        mockup: 'desktop',
      },
    ],
  },
};

/* ─── Portfolio tabs ─── */
const PORTFOLIO_TABS = [
  { id: 'projects',    label: 'Projects',    icon: <CodeIcon /> },
  { id: 'experience',  label: 'Experience',  icon: <BriefcaseIcon /> },
  { id: 'tech',        label: 'Tech Stack',  icon: <LayersIcon /> },
];

/* ─── Nav links ─── */
const NAV_LINKS = ['Home', 'About', 'Portfolio'];



/* ─── Reveal on scroll hook ─── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('reveal--visible');
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  });
}

export default function App() {
  const [splashDone, setSplashDone]   = useState(false);
  const [splashHide, setSplashHide]   = useState(false);
  const [showCV, setShowCV]           = useState(false);
  const [activeStack, setActiveStack] = useState('go');
  const [activeNav, setActiveNav]     = useState('Home');
  const [menuOpen, setMenuOpen]       = useState(false);
  
  const [activePortfolioTab, setActivePortfolioTab] = useState('projects');
 
  const observerRef  = useRef(null);

  useReveal();

  /* Splash screen: show 2.6s then fade out */
  useEffect(() => {
    const hideTimer = setTimeout(() => setSplashHide(true), 2600);
    const doneTimer = setTimeout(() => setSplashDone(true), 3200);
    return () => { clearTimeout(hideTimer); clearTimeout(doneTimer); };
  }, []);

  // ─── GOOGLE TRANSLATE ───
  useEffect(() => {
  const addGoogleTranslateScript = () => {
    if (document.getElementById('google-translate-script')) return;

    const script = document.createElement('script');
    script.id = 'google-translate-script';
    script.src =
      '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;

    document.body.appendChild(script);

    window.googleTranslateElementInit = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: 'es,en,pt,fr,de,it',
            layout:
              window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          'google_translate_element'
        );
      }
    };
  };

  addGoogleTranslateScript();
}, []);


  /* Scroll spy */
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            const id = e.target.id;
            const match = NAV_LINKS.find(n => n.toLowerCase() === id.toLowerCase());
            if (match) setActiveNav(match);
          }
        });
      },
      { threshold: 0.35 }
    );
    sections.forEach(s => observerRef.current.observe(s));
    return () => observerRef.current?.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const data   = PROJECTS[activeStack];
  const accent = STACKS.find(s => s.id === activeStack)?.accent ?? '#2563eb';

  return (
    <div className="root">

      {/* ── Splash Screen ── */}
      {!splashDone && (
        <div className={`splash${splashHide ? ' splash--hide' : ''}`}>
          <div className="splash-glow splash-glow--1" />
          <div className="splash-glow splash-glow--2" />
          <div className="splash-content">
            <p className="splash-welcome">Welcome To My</p>
            <h1 className="splash-title">Portfolio<br /><span>Website</span></h1>
            <div className="splash-bar"><div className="splash-bar-fill" /></div>
          </div>
        </div>
      )}

      {/* ── CV Modal ── */}
      {showCV && (
        <div className="cv-overlay" onClick={() => setShowCV(false)}>
          <div className="cv-modal" onClick={e => e.stopPropagation()}>
            <div className="cv-modal-header">
              <span className="cv-modal-title">Curriculum Vitae</span>
              <button className="cv-close-btn" onClick={() => setShowCV(false)}>
                <CloseIcon />
              </button>
            </div>
            <iframe src={cvFile} title="CV" className="cv-iframe" />
          </div>
        </div>
      )}

      {/* ════════════════════════════════
          NAV
      ════════════════════════════════ */}
      <nav className="navbar">
  <div className="nav-inner">
    <span className="nav-logo">Jcrm<span className="nav-logo-dot">.</span></span>

    <div className={`nav-links${menuOpen ? ' nav-links--open' : ''}`}>
      {NAV_LINKS.map(n => (
        <button
          key={n}
          className={`nav-link${activeNav === n ? ' nav-link--active' : ''}`}
          onClick={() => scrollTo(n)}
        >
          {n}
        </button>
      ))}
    </div>

    {/* Traductor aquí, entre links y hamburger */}
    <div className="translate-container">
      <div id="google_translate_element"></div>
    </div>

    <button className="nav-hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
      <span /><span /><span />
    </button>
  </div>
</nav>

      {/* ════════════════════════════════
          HERO
      ════════════════════════════════ */}
      <section id="home" className="hero-section">
       
  <div className="hero-glow hero-glow--1" />
  <div className="hero-glow hero-glow--2" />

  <div className="hero-inner">
    {/* Text left */}
    <div className="hero-text">
      <p className="hero-greeting reveal reveal--up" style={{ '--delay': '0.1s' }}>Hello, I'm</p>
      <h1 className="hero-name reveal reveal--up" style={{ '--delay': '0.2s' }}>
        Jhoan Camilo<br />Rayo Mejia
      </h1>
      <p className="hero-role reveal reveal--up" style={{ '--delay': '0.3s' }}>Web Developer</p>
      <p className="hero-tagline reveal reveal--up" style={{ '--delay': '0.4s' }}>
        I build efficient, scalable, and secure digital experiences using modern architectures, REST API integrations, and JWT-based authentication.
      </p>

      <div className="hero-socials reveal reveal--up" style={{ '--delay': '0.5s' }}>
        <a href="https://www.linkedin.com/in/jhoan-camilo-rayo-mejia-2114ab286/" target="_blank" rel="noopener noreferrer" className="social-pill" aria-label="LinkedIn">
          <LinkedInIcon /><span>LinkedIn</span>
        </a>
        <a href="https://github.com/jhoancamilorayomejia" target="_blank" rel="noopener noreferrer" className="social-pill" aria-label="GitHub">
          <GitHubIcon /><span>GitHub</span>
        </a>
        <a href="https://www.instagram.com/jhoancamilorayo/" target="_blank" rel="noopener noreferrer" className="social-pill" aria-label="Instagram">
          <InstagramIcon /><span>Instagram</span>
        </a>
        <a href="mailto:camilorayomejia@gmail.com" className="social-pill" aria-label="Email">
          <EmailIcon /><span>Email</span>
        </a>
      </div>

      <div className="hero-ctas reveal reveal--up" style={{ '--delay': '0.6s' }}>
        <button className="cta-btn cta-btn--primary" onClick={() => scrollTo('Portfolio')}>
          View My Work <ArrowIcon />
        </button>
        <button className="cta-btn cta-btn--secondary" onClick={() => setShowCV(true)}>
          <DocIcon /> Check My CV
        </button>
      </div>
    </div>

    {/* Photo right */}
    <div className="hero-photo-wrap reveal reveal--up">
      <img src={developerMe} alt="Jhoan Camilo Rayo Mejia" className="hero-photo" />
    </div>
  </div>

  <div className="scroll-indicator">
    <div className="scroll-dot" />
  </div>
</section>

      {/* ════════════════════════════════
          ABOUT
      ════════════════════════════════ */}
      <section id="about" className="section about-section">
        <div className="section-inner">
          <div className="section-header reveal reveal--up">
            <span className="section-badge">About Me</span>
            <h2 className="section-title">Who am I?</h2>
          </div>

          <div className="about-grid">
            <div className="about-photo-wrap reveal reveal--left">
              <div className="about-photo-card">
                <img src={profilePhoto} alt="Jhoan Camilo" className="about-photo" />
                <div className="about-photo-overlay" />
              </div>
              <div className="about-contact-block">
                <div className="contact-row">
                  <span className="contact-lbl">Email</span>
                  <a href="mailto:camilorayomejia@gmail.com" className="contact-val">camilorayomejia@gmail.com</a>
                </div>
                <div className="contact-row">
                  <span className="contact-lbl">WhatsApp</span>
                  <a href="tel:+573235179341" className="contact-val">+57 (323) 517 9341</a>
                </div>
              </div>
            </div>

            <div className="about-text reveal reveal--right">
              <p>
                I am a Systems Engineer with experience in the development and support of technology solutions focused on improving the efficiency, scalability, and stability of digital platforms. Throughout my professional career, I have participated in projects involving software development, service integration, application management, and solution deployment in modern environments, allowing me to build a comprehensive understanding of the software development lifecycle and its impact on business operations.
              </p>
              <p>
                I am passionate about designing and implementing efficient, scalable, and robust solutions, ensuring proper integration and availability of information across different business systems. I enjoy working collaboratively in agile environments, contributing to the development of applications and REST API integrations aligned with modern architectures and business needs, while continuously learning new technologies and best practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          PORTFOLIO (Projects / Experience / Tech Stack)
      ════════════════════════════════ */}
      <section id="portfolio" className="section portfolio-section">
        <div className="section-inner">
          <div className="section-header reveal reveal--up">
            <span className="section-badge">Portfolio</span>
            <h2 className="section-title">My Work</h2>
            <p className="section-sub">Explore my journey through projects, experience, and technical expertise</p>
          </div>

          {/* Portfolio tabs */}
          <div className="portfolio-tabs reveal reveal--up">
            {PORTFOLIO_TABS.map(tab => (
              <button
                key={tab.id}
                className={`portfolio-tab${activePortfolioTab === tab.id ? ' portfolio-tab--active' : ''}`}
                onClick={() => setActivePortfolioTab(tab.id)}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* ── PROJECTS panel ── */}
          {activePortfolioTab === 'projects' && (
            <div className="tab-panel" key="projects">

              {/* Stack sub-tabs */}
              <div className="stack-tabs reveal reveal--up">
                {STACKS.map(s => (
                  <button
                    key={s.id}
                    className={`stack-tab${activeStack === s.id ? ' stack-tab--active' : ''}`}
                    style={{ '--tab-accent': s.accent }}
                    onClick={() => setActiveStack(s.id)}
                  >
                    {s.label}
                  </button>
                ))}
              </div>

              <div className="projects-panel" key={activeStack} style={{ '--panel-accent': accent }}>

                {data.featured && (
                  <div className="projects-block reveal reveal--up">
                    <p className="projects-block-label">Featured Project</p>
                    <div className="featured-card">
                      <PhoneMockup src={data.featured.video} />
                      <div className="featured-info">
                        <h3 className="featured-name">{data.featured.name}</h3>
                        <p className="featured-about">{data.featured.about}</p>
                        <div className="proj-tags">
                          {data.featured.tags.map(t => <span key={t} className="proj-tag">{t}</span>)}
                        </div>
                        <a href={data.featured.repo} target="_blank" rel="noopener noreferrer" className="repo-btn">
                          <GitHubIcon /> View Repository
                        </a>
                      </div>
                    </div>
                  </div>
                )}

                {data.others?.length > 0 && (
                  <div className="projects-block reveal reveal--up">
                    <p className="projects-block-label">{data.featured ? 'More Projects' : 'Projects'}</p>
                    <div className="others-grid">
                      {data.others.map(proj => (
                        <div
                          key={proj.repo}
                          className={`other-card${proj.mockup === 'desktop' ? ' other-card--wide' : ''}`}
                        >
                          {proj.mockup === 'desktop' && proj.video ? (
                            <div className="other-card-desktop-layout">
                              <DesktopMockup src={proj.video} />
                              <div className="other-card-info">
                                <div className="other-icon">{proj.icon}</div>
                                <h3 className="other-name">{proj.name}</h3>
                                <p className="other-about">{proj.about}</p>
                                <div className="proj-tags">{proj.tags.map(t => <span key={t} className="proj-tag">{t}</span>)}</div>
                                <a href={proj.repo} target="_blank" rel="noopener noreferrer" className="repo-btn repo-btn--sm"><GitHubIcon /> View Repository</a>
                              </div>
                            </div>
                          ) : proj.mockup === 'phone' && proj.video ? (
                            <div className="other-card-phone-layout">
                              <PhoneMockup src={proj.video} />
                              <div className="other-card-info">
                                <div className="other-icon">{proj.icon}</div>
                                <h3 className="other-name">{proj.name}</h3>
                                <p className="other-about">{proj.about}</p>
                                <div className="proj-tags">{proj.tags.map(t => <span key={t} className="proj-tag">{t}</span>)}</div>
                                <a href={proj.repo} target="_blank" rel="noopener noreferrer" className="repo-btn repo-btn--sm"><GitHubIcon /> View Repository</a>
                              </div>
                            </div>
                          ) : (
                            <>
                              <div className="other-icon">{proj.icon}</div>
                              <h3 className="other-name">{proj.name}</h3>
                              <p className="other-about">{proj.about}</p>
                              <div className="proj-tags">{proj.tags.map(t => <span key={t} className="proj-tag">{t}</span>)}</div>
                              <a href={proj.repo} target="_blank" rel="noopener noreferrer" className="repo-btn repo-btn--sm"><GitHubIcon /> View Repository</a>
                            </>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ── EXPERIENCE panel ── */}
          {activePortfolioTab === 'experience' && (
            <div className="tab-panel" key="experience">
              <div className="timeline">
                <div className="timeline-track" />

                <div className="timeline-item reveal reveal--left">
                  <div className="timeline-node" />
                  <div className="timeline-card">
                    <div className="timeline-card-header">
                      <h3 className="timeline-role">Software Developer</h3>
                      <span className="timeline-company">Colsubastas.com · Cali</span>
                    </div>
                    <span className="timeline-tag">Part-Time</span>
                    <ul className="timeline-bullets">
                      <li>Creation, maintenance, and customization of Drupal modules using Drush.</li>
                      <li>Deployment of applications and API platforms with support in Apache, Kubernetes, and OpenShift environments, ensuring service availability and stability.</li>
                    </ul>
                  </div>
                </div>

                <div className="timeline-item reveal reveal--left" style={{ '--delay': '0.15s' }}>
                  <div className="timeline-node" />
                  <div className="timeline-card">
                    <div className="timeline-card-header">
                      <h3 className="timeline-role">Freelance Developer</h3>
                      <span className="timeline-company">Independent Projects</span>
                    </div>
                    <span className="timeline-tag">Freelance</span>
                    <ul className="timeline-bullets">
                      <li>Web development for multiple clients using Spring Boot (Java) with Angular and React, Golang with Vue.js, PostgreSQL, and Laravel (PHP).</li>
                      <li>Developed robust applications with REST API integrations across different industries.</li>
                    </ul>
                  </div>
                </div>

                <div className="timeline-item reveal reveal--left" style={{ '--delay': '0.3s' }}>
                  <div className="timeline-node" />
                  <div className="timeline-card">
                    <div className="timeline-card-header">
                      <h3 className="timeline-role">Technical Support</h3>
                      <span className="timeline-company">Administrative &amp; Office Environments</span>
                    </div>
                    <span className="timeline-tag">Support</span>
                    <ul className="timeline-bullets">
                      <li>Experience applied to administrative and office environments, providing hardware and software support.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ── TECH STACK panel ── */}
          {activePortfolioTab === 'tech' && (
            <div className="tab-panel" key="tech">
              <div className="tech-grid">
                {TECH_STACK.map((tech, i) => (
                  <div
                    key={tech.name}
                    className="tech-card reveal reveal--up"
                    style={{ '--delay': `${i * 0.04}s` }}
                  >
                    <img src={tech.icon} alt={tech.name} className="tech-card-icon" />
                    <span className="tech-card-name">{tech.name}</span>
                    <span className="tech-card-category">{tech.category}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

      {/* ════════════════════════════════
          FOOTER
      ════════════════════════════════ */}
      <footer className="footer">
        <div className="footer-inner">
          <p className="footer-name">Jhoan Camilo Rayo Mejia</p>
          <div className="footer-socials">
            <a href="https://www.linkedin.com/in/jhoan-camilo-rayo-mejia-2114ab286/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedInIcon /></a>
            <a href="https://github.com/jhoancamilorayomejia" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><GitHubIcon /></a>
            <a href="https://www.instagram.com/jhoancamilorayo/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><InstagramIcon /></a>
            <a href="mailto:camilorayomejia@gmail.com" aria-label="Email"><EmailIcon /></a>
          </div>
          <p className="footer-copy">© {new Date().getFullYear()} · Built with React</p>
        </div>
      </footer>
    </div>
  );
}