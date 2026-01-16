'use client';

import Link from 'next/link';

interface ContactInformationProps {
  t: (key: string) => string;
}

export default function ContactInformation({ t }: ContactInformationProps) {
  return (
    <section className="section">
      <div className="container">
        <div className="home-section-header">
          <h2>{t('section-contact')}</h2>
          <Link href="/contact" className="home-section-link">
            {t('btn-view-all')} <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
        <div className="home-contact-v2-grid">
          <a href="tel:(049) 564-6927" className="home-contact-v2-card">
            <div className="home-contact-v2-icon">
              <i className="bi bi-telephone-fill"></i>
            </div>
            <div className="home-contact-v2-content">
              <h3>{t('contact-phone')}</h3>
              <p className="home-contact-v2-value">(049) 564-6927</p>
              <span className="home-contact-v2-note">{t('contact-hours')}</span>
            </div>
          </a>
          <a href="mailto:calauanadm@gmail.com" className="home-contact-v2-card">
            <div className="home-contact-v2-icon">
              <i className="bi bi-envelope-fill"></i>
            </div>
            <div className="home-contact-v2-content">
              <h3>{t('contact-email')}</h3>
              <p className="home-contact-v2-value">calauanadm@gmail.com</p>
              <span className="home-contact-v2-note">{t('contact-response')}</span>
            </div>
          </a>
          <div className="home-contact-v2-card">
            <div className="home-contact-v2-icon">
              <i className="bi bi-geo-alt-fill"></i>
            </div>
            <div className="home-contact-v2-content">
              <h3>{t('contact-address')}</h3>
              <p className="home-contact-v2-value">{t('contact-municipal-hall')}</p>
              <span className="home-contact-v2-note">Brgy. Silangan, Calauan, Laguna 4012</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}