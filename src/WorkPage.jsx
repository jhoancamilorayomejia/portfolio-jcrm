import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import goVueVideo from './assets/GoVue.mp4';
import './WorkPage.css';

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"/>
  </svg>
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
      about: 'A full-stack gym management system built with Go and Vue.js. Handles member registrations, subscription plans, attendance tracking, and payment control — all through a clean, reactive interface backed by a performant Go REST API and PostgreSQL.',
      tags:  ['Go', 'Vue.js 3', 'PostgreSQL', 'Payment gateway','REST API', 'JWT'],
      video: goVueVideo,
    },
    others: [
      {
        repo:  'https://github.com/jhoancamilorayomejia/barbershop',
        name:  'Barbershop',
        icon:  '✂️',
        about: 'An appointment booking system for barbershops. Clients can browse available time slots, book sessions with their preferred barber, and receive confirmations — while the admin panel manages schedules, services, and staff availability.',
        tags:  ['Go', 'Vue.js', 'PostgreSQL', 'Docker','REST API', 'JWT'],
      },
      {
        repo:  'https://github.com/jhoancamilorayomejia/TGacueducto',
        name:  'TG Acueducto',
        icon:  '💧',
        about: 'A management system for small water supply companies (acueductos). Tracks users, consumption readings, billing cycles, and payment records — designed to digitize the administrative workflows of community-run water services.',
        tags:  ['Go', 'Vue.js', 'PostgreSQL', 'Payment gateway','REST API', 'JWT'],
      },
    ],
  },
  spring: {
    featured: null,
    others: [
      {
        repo:  'https://github.com/jhoancamilorayomejia/payment-orders',
        name:  'Spring Boot Projects',
        icon:  '☕',
        about: 'Projects built with Spring Boot (Java) and Angular, connected to PostgreSQL. Full-stack enterprise-grade applications with REST APIs, dependency injection, and reactive frontends.',
        tags:  ['Java', 'Spring Boot', 'Angular', 'PostgreSQL', 'REST API', 'JWT'],
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
        about: 'Web applications developed with Laravel (PHP) and PostgreSQL. Leveraging Eloquent ORM, Blade templates, and Artisan CLI to build robust, maintainable server-side solutions.',
        tags:  ['PHP', 'Laravel', 'PostgreSQL','REST API', 'JWT'],
      },
    ],
  },
};

export default function WorkPage() {
  const navigate = useNavigate();
  const [activeStack, setActiveStack] = useState('go');

  const data   = PROJECTS[activeStack];
  const accent = STACKS.find(s => s.id === activeStack)?.accent ?? '#2563eb';

  return (
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

          {/* ── Featured project (with phone mockup if has video) ── */}
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
                  <div className="wp-other-card" key={proj.repo}>
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
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
    </div>
  );
}