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
          <div className="home-contact-v2-card">
            <div className="home-contact-v2-icon">
              <i className="bi bi-telephone-fill"></i>
            </div>
            <div className="home-contact-v2-content">
              <h3>{t('contact-phone')}</h3>
              <p className="home-contact-v2-value">
                <a href="tel:(049) 564-6927">(049) 564-6927</a>
              </p>
              <p className="home-contact-v2-value">
                <a href="tel:(049) 568-0012">(049) 568-0012</a>
              </p>
              <span className="home-contact-v2-note">{t('contact-hours')}</span>
            </div>
          </div>
          <div className="home-contact-v2-card">
            <div className="home-contact-v2-icon">
              <i className="bi bi-envelope-fill"></i>
            </div>
            <div className="home-contact-v2-content">
              <h3>{t('contact-email')}</h3>
              <p className="home-contact-v2-value">
                <a href="mailto:calauanadm@gmail.com">calauanadm@gmail.com</a>
              </p>
              <p className="home-contact-v2-value">
                <a href="mailto:mayoroselcaratihan@gmail.com">mayoroselcaratihan@gmail.com</a>
              </p>
              <span className="home-contact-v2-note">{t('contact-response')}</span>
            </div>
          </div>
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