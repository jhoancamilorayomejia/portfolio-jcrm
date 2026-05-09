import { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import goVueVideo from './assets/GoVue.mp4';
import tgAcueductoVideo from './assets/tgacueducto.mp4';
import gymPHPVideo from './assets/gymPHP.mp4';
import './WorkPage.css';

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"/>
  </svg>
);

/* ── Desktop Mockup Component ── */
const DesktopMockup = ({ src }) => (
  <div className="wp-desktop-stage">
    <div className="wp-desktop">
      {/* Menu bar */}
      <div className="wp-desktop-menubar">
        <div className="wp-desktop-dots">
          <span className="wp-dot wp-dot--red" />
          <span className="wp-dot wp-dot--yellow" />
          <span className="wp-dot wp-dot--green" />
        </div>
        <div className="wp-desktop-url-bar">
          <span className="wp-desktop-url-icon">🔒</span>
          <span className="wp-desktop-url-text">localhost:8080</span>
        </div>
        <div className="wp-desktop-actions" />
      </div>
      {/* Screen */}
      <div className="wp-desktop-screen">
        <video
          src={src}
          controls
          className="wp-video"
          preload="metadata"
          playsInline
        />
      </div>
      {/* Stand */}
      <div className="wp-desktop-stand">
        <div className="wp-desktop-neck" />
        <div className="wp-desktop-base" />
      </div>
    </div>
  </div>
);

const STACKS = [
  { id: 'go',     label: 'Golang · Vue.js · PostgreSQL',       accent: '#00ACD7' },
  { id: 'spring', label: 'Spring Boot · Angular · PostgreSQL', accent: '#6DB33F' },
  { id: 'php',    label: 'PHP (Laravel) · PostgreSQL',         accent: '#8892BF' },
];

const PROJECTS = {
  go: {
    featured: {
      repo:  'https://github.com/jhoancamilorayomejia/GymBox',
      name:  'GymBox',
      about: 'A full-stack gym management system designed to help gyms efficiently manage client information, handle subscriptions, attendance tracking, and maintain clear payment control. It also includes a clear and intuitive subscription visualization system, allowing both gym administrators and clients to easily identify the status of each membership plan (active, expired, etc.), improving the overall user experience and decision-making process — all through a clean and reactive interface backed by a high-performance REST API, PostgreSQL, and JWT-based authentication for security.',
      tags:  ['Go', 'Vue.js 3', 'PostgreSQL', 'Payment gateway', 'Docker'],
      video: goVueVideo,
      mockup: 'phone',
    },
    others: [
      {
        repo:  'https://github.com/jhoancamilorayomejia/barbershop',
        name:  'Barbershop',
        icon:  '✂️',
        about: 'A web-based appointment booking system developed for barbershops to simplify reservation management and avoid scheduling conflicts. Clients can easily book appointments based on real-time availability, while the administrator can clearly manage reservations, including customer names, dates, and time slots. Once an appointment is confirmed, a PDF receipt is automatically generated and downloaded as proof of the reservation.',
        tags:  ['Go', 'Vue.js', 'PostgreSQL', 'Docker'],
      },
      {
        repo:  'https://github.com/jhoancamilorayomejia/TGacueducto',
        name:  'TG Acueducto',
        icon:  '💧',
        about: 'A digital billing management platform developed for small community water utility companies, designed to optimize administrative processes and improve interaction with users. The system allows utility companies to generate invoices, download billing records, and automatically send invoices via email. Customers can view and download their invoices, as well as make online payments through payment gateway integration. The project was focused on applying software architecture best practices and strengthening Full-Stack development skills, especially in backend and frontend communication through REST API integrations.',
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
        name:  'Spring Boot(Java)',
        icon:  '☕',
        about: 'A secure order management system that combines JWT-based authentication with role-based access control for administrators and operators. The platform allows users to register and update orders, receive status change notifications, and access protected routes according to their assigned roles, preventing unauthorized access. The project focused on implementing secure authentication flows, token validation and expiration control, as well as efficient backend and frontend communication through REST API integrations.',
        tags:  ['Java', 'Spring Boot', 'Angular', 'PostgreSQL'],
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
        about: 'A platform designed to help gyms efficiently manage customer information, subscriptions, and payment records. The system also includes email notifications for payment reminders and confirmations, as well as online payment gateway integration to facilitate secure digital transactions. Additionally, it provides a clear and intuitive subscription visualization that allows both administrators and clients to easily identify the status of each membership plan, improving overall user experience and management efficiency. Security and authentication are handled using JWT-based authorization.',
        tags:  ['PHP', 'Laravel', 'PostgreSQL'],
        video: gymPHPVideo,
        mockup: 'desktop',
      },
    ],
  },
};

export default function WorkPage() {
  const navigate = useNavigate();
  const [activeStack, setActiveStack] = useState('go');

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

  const data   = PROJECTS[activeStack];
  const accent = STACKS.find(s => s.id === activeStack)?.accent ?? '#2563eb';

  return (
    <>
      {/* ─── GOOGLE TRANSLATE ─── */}
      <div className="translate-container">
        <div id="google_translate_element"></div>
      </div>
    
    <div className="wp-root">
      <header className="wp-header">
        <button className="wp-back" onClick={() => navigate('/')}>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
          </svg>
          Back
        </button>
        <span className="wp-header-label">Portfolio · My Work</span>
      </header>

      <main className="wp-main">
        <section className="wp-hero">
          <div className="wp-hero-badge">Projects</div>
          <h1 className="wp-hero-title">My Work</h1>
          <p className="wp-hero-tagline">Select a tech stack to explore related projects</p>
        </section>

        {/* Stack tabs */}
        <div className="wp-tabs-wrapper">
          <div className="wp-tabs">
            {STACKS.map((s) => (
              <button
                key={s.id}
                className={`wp-tab${activeStack === s.id ? ' wp-tab--active' : ''}`}
                style={{ '--tab-accent': s.accent }}
                onClick={() => setActiveStack(s.id)}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        {/* Panel */}
        <div className="wp-panel" key={activeStack} style={{ '--panel-accent': accent }}>

          {/* ── Featured project (phone mockup) ── */}
          {data.featured && (
            <section className="wp-section">
              <h2 className="wp-section-title">Featured Project</h2>
              <div className="wp-featured-card">

                {/* Phone mockup */}
                <div className="wp-phone-stage">
                  <div className="wp-phone">
                    <div className="wp-phone-notch" />
                    <div className="wp-phone-screen">
                      <video
                        src={data.featured.video}
                        controls
                        className="wp-video"
                        preload="metadata"
                        playsInline
                      />
                    </div>
                    <div className="wp-phone-home" />
                  </div>
                </div>

                {/* Info */}
                <div className="wp-featured-info">
                  <h3 className="wp-featured-name">{data.featured.name}</h3>
                  <p className="wp-featured-about">{data.featured.about}</p>
                  <div className="wp-tags">
                    {data.featured.tags.map((t) => (
                      <span className="wp-tag" key={t}>{t}</span>
                    ))}
                  </div>
                  <a
                    href={data.featured.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="wp-repo-btn"
                  >
                    <GithubIcon />
                    View Repository
                  </a>
                </div>
              </div>
            </section>
          )}

          {/* ── Other / all projects ── */}
          {data.others?.length > 0 && (
            <section className="wp-section">
              <h2 className="wp-section-title">
                {data.featured ? 'More Projects' : 'Projects'}
              </h2>
              <div className="wp-others-grid">
                {data.others.map((proj) => (
                  <div
                    className={`wp-other-card${proj.mockup === 'desktop' ? ' wp-other-card--wide' : ''}`}
                    key={proj.repo}
                  >
                    {/* Desktop mockup inline if has desktop video */}
                    {proj.mockup === 'desktop' && proj.video ? (
                      <div className="wp-other-card-desktop-layout">
                        <DesktopMockup src={proj.video} />
                        <div className="wp-other-card-info">
                          <div className="wp-other-icon">{proj.icon}</div>
                          <h3 className="wp-other-name">{proj.name}</h3>
                          <p className="wp-other-about">{proj.about}</p>
                          <div className="wp-tags">
                            {proj.tags.map((t) => (
                              <span className="wp-tag" key={t}>{t}</span>
                            ))}
                          </div>
                          <a
                            href={proj.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="wp-repo-btn wp-repo-btn--sm"
                          >
                            <GithubIcon />
                            View Repository
                          </a>
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="wp-other-icon">{proj.icon}</div>
                        <h3 className="wp-other-name">{proj.name}</h3>
                        <p className="wp-other-about">{proj.about}</p>
                        <div className="wp-tags">
                          {proj.tags.map((t) => (
                            <span className="wp-tag" key={t}>{t}</span>
                          ))}
                        </div>
                        <a
                          href={proj.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="wp-repo-btn wp-repo-btn--sm"
                        >
                          <GithubIcon />
                          View Repository
                        </a>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
    </div>
    </>
  );
}