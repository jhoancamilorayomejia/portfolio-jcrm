import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import profilePhoto from './assets/profile.jpg';
import cvFile from './assets/CV-jhoancamilorayomejia.pdf';

function App() {
  const [showCV, setShowCV] = useState(false);
  const navigate = useNavigate();

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

  return (
    <>
    {/* ─── GOOGLE TRANSLATE ─── */}
      <div className="translate-container">
        <div id="google_translate_element"></div>
      </div>

      {/* ─── CV MODAL ─── */}
      {showCV && (
        <div className="cv-overlay" onClick={() => setShowCV(false)}>
          <div className="cv-modal" onClick={(e) => e.stopPropagation()}>
            <div className="cv-modal-header">
              <span className="cv-modal-title">Curriculum Vitae</span>
              <button className="cv-close-btn" onClick={() => setShowCV(false)} aria-label="Close">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
              </button>
            </div>
            <iframe
              src={cvFile}
              title="CV - Jhoan Camilo Rayo Mejia"
              className="cv-iframe"
            />
          </div>
        </div>
      )}

      <section id="hero-section">
        <div className="hero-bg-overlay" />

        <div className="hero-content">
          <div className="profile-photo-wrapper">
            <img
              src={profilePhoto}
              alt="Jhoan Camilo Rayo Mejia"
              className="profile-photo"
            />
          </div>
          <div className="hero-text">
            <p className="hero-label">Hello, I'm</p>
            <h1 className="hero-name">Jhoan Camilo<br />Rayo Mejia</h1>
            <p className="hero-title">Software Developer</p>

            {/* Social row */}
            <div className="hero-social-row">
              <a href="https://www.linkedin.com/in/jhoan-camilo-rayo-mejia-2114ab286/" target="_blank" rel="noopener noreferrer" className="hero-social-btn" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z"/></svg>
                LinkedIn
              </a>
              <a href="https://github.com/jhoancamilorayomejia" target="_blank" rel="noopener noreferrer" className="hero-social-btn" aria-label="GitHub">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"/></svg>
                GitHub
              </a>
              <a href="https://www.instagram.com/jhoancamilorayo/" target="_blank" rel="noopener noreferrer" className="hero-social-btn" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3Z"/></svg>
                Instagram
              </a>
              <a href="mailto:camilorayomejia@gmail.com" className="hero-social-btn" aria-label="Email">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>
                Email
              </a>
            </div>

            {/* ─── CTA BUTTONS ─── */}
            <div className="hero-cta-row">
              <button className="hero-cta-btn hero-cta-primary" onClick={() => navigate('/work')}>
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg>
                Visit My Work
              </button>
              <button className="hero-cta-btn hero-cta-secondary" onClick={() => setShowCV(true)}>
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
                Check My CV
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────── INFO CARDS ──────────────── */}
      <section id="info-section">
        {/* About / Profile Card */}
        <div className="info-card card-about">
          <div className="card-header">
            <span className="card-icon">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/></svg>
            </span>
            <h2>About Me</h2>
          </div>
          <p>I am a Systems Engineer with experience in the development and support of technology solutions focused on improving the efficiency, scalability, and stability of digital platforms. Throughout my professional career, I have participated in projects involving software development, service integration, application management, and solution deployment in modern environments, allowing me to build a comprehensive understanding of the software development lifecycle and its impact on business operations.</p>
          <p>I am passionate about designing and implementing efficient, scalable, and robust solutions, ensuring proper integration and availability of information across different business systems. I enjoy working collaboratively in agile environments, contributing to the development of applications and REST API integrations aligned with modern architectures and business needs, while continuously learning new technologies and best practices.</p>
        </div>

        {/* Experience Card */}
        <div className="info-card card-exp">
          <div className="card-header">
            <span className="card-icon">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 6h-2.18c.07-.44.18-.88.18-1.36C18 2.98 16.02 1 13.64 1c-1.3 0-2.43.52-3.26 1.36L10 2.74l-.38-.38C8.79 1.52 7.66 1 6.36 1 3.98 1 2 2.98 2 5.36c0 .48.11.92.18 1.36H0v14c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-8 13H4V8h8v11zm8 0h-8V8h8v11z"/></svg>
            </span>
            <h2>Experience</h2>
          </div>
          <ul className="exp-list">
            <li>
              <span className="exp-dot" />
              <div>
                <strong>Colsubastas.com</strong>
                <p>• I Work as a Part-Time Software Developer in the creation, maintenance, and customization of Drupal modules using Drush at Colsubastas.com (Cali).</p>
                <p>• Participated in the deployment of applications and API platforms, providing support in Apache, Kubernetes, and OpenShift environments, ensuring service availability and stability.</p>
              </div>
            </li>
            <li>
              <span className="exp-dot" />
              <div>
                <strong>Developer Freelance</strong>
                <p>Independent projects</p>
                <p>Web development for multiple clients across different industries using technologies such as Spring Boot (Java) with Angular and React, Golang with Vue.js, PostgreSQL, and Laravel (PHP), developing robust applications with REST API integrations.</p>
              </div>
            </li>
            <li>
              <span className="exp-dot" />
              <div>
                <strong>Technical Support</strong>
                <p>Experience applied to administrative and office environments</p>

              </div>
            </li>
          </ul>
        </div>

        {/* Contact Card */}
        <div className="info-card card-contact">
          <div className="card-header">
            <span className="card-icon">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>
            </span>
            <h2>Contact</h2>
          </div>
          <div className="contact-grid">
            <div className="contact-item">
              <span className="contact-label">Email</span>
              <a href="mailto:camilorayomejia@gmail.com" className="contact-value">camilorayomejia@gmail.com</a>
            </div>
            <div className="contact-item">
              <span className="contact-label">Cellphone or whatsapp</span>
              <a href="tel:+573235179341" className="contact-value">+57 (323) 517 9341</a>
            </div>
          </div>
        </div>

        {/* Social Links Card */}
        <div className="info-card card-social">
          <div className="card-header">
            <span className="card-icon">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/></svg>
            </span>
            <h2>Find me on</h2>
          </div>
          <div className="social-links-grid">
            <a href="https://www.linkedin.com/in/jhoan-camilo-rayo-mejia-2114ab286/" target="_blank" rel="noopener noreferrer" className="social-link-card linkedin">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z"/></svg>
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/jhoancamilorayomejia" target="_blank" rel="noopener noreferrer" className="social-link-card github">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"/></svg>
              <span>GitHub</span>
            </a>
            <a href="https://www.instagram.com/jhoancamilorayo/" target="_blank" rel="noopener noreferrer" className="social-link-card instagram">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3Z"/></svg>
              <span>Instagram</span>
            </a>
            <a href="mailto:camilorayomejia@gmail.com" className="social-link-card email">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>
              <span>Email</span>
            </a>
          </div>
        </div>
      </section>

      <div className="ticks" />
      <section id="spacer" />
    </>
  );
}

export default App;