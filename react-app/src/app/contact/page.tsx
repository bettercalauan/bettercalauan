'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ContactPage() {
  const { t } = useLanguage()
  return (
    <>
      {/* Breadcrumbs */}
      <div className="container">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">{t('nav-home')}</Link>
          <span>/</span>
          <span aria-current="page">{t('nav-contact')}</span>
        </nav>
      </div>

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="page-header-content">
            <span className="page-header-badge"><i className="bi bi-envelope-fill"></i> {t('nav-contact')}</span>
            <h1>{t('contact-title')}</h1>
            <p className="page-header-desc">{t('contact-description')}</p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section">
        <div className="container">
            <div className="grid grid-3" style={{ gap: 'var(--spacing-md)' }}>
            <a href="mailto:lgusolanonv@gmail.com" className="contact-card">
              <div className="contact-card-icon"><i className="bi bi-envelope-fill"></i></div>
              <div className="contact-card-content">
                <h3>{t('contact-label-email')}</h3>
                <p className="contact-card-value">lgusolanonv@gmail.com</p>
                <span className="contact-card-note">{t('contact-response-hours')}</span>
              </div>
            </a>
            <a href="tel:09175951931" className="contact-card">
              <div className="contact-card-icon"><i className="bi bi-phone-fill"></i></div>
              <div className="contact-card-content">
                <h3>{t('contact-label-mobile')}</h3>
                <p className="contact-card-value">0917-595-1931</p>
                <span className="contact-card-note">{t('contact-hours-monfri')}</span>
              </div>
            </a>
            <a href="tel:0788053581" className="contact-card">
              <div className="contact-card-icon"><i className="bi bi-telephone-fill"></i></div>
              <div className="contact-card-content">
                <h3>{t('contact-label-phone')}</h3>
                <p className="contact-card-value">(078) 805-3581</p>
                <span className="contact-card-note">{t('contact-hours-monfri')}</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="office-hours-section">
        <div className="container">
          <div className="office-hours-inner">
            <div className="office-hours-header">
              <i className="bi bi-clock-fill"></i>
              <h2>{t('contact-hours-title')}</h2>
            </div>
            <div className="office-hours-schedule">
              <div className="office-hours-item office-hours-item--open">
                <span className="office-hours-day">Monday - Friday</span>
                <span className="office-hours-time">8:00 AM - 5:00 PM</span>
                <span className="office-hours-status"><i className="bi bi-check-circle-fill"></i> Open</span>
              </div>
              <div className="office-hours-item office-hours-item--break">
                <span className="office-hours-day">{t('contact-hours-lunch')}</span>
                <span className="office-hours-time">{t('contact-hours-lunch-time')}</span>
                <span className="office-hours-status"><i className="bi bi-pause-circle-fill"></i> Break</span>
              </div>
              <div className="office-hours-item office-hours-item--closed">
                <span className="office-hours-day">{t('contact-hours-weekend')}</span>
                <span className="office-hours-time">{t('contact-hours-closed')}</span>
                <span className="office-hours-status"><i className="bi bi-x-circle-fill"></i> Closed</span>
              </div>
              <div className="office-hours-item office-hours-item--closed">
                <span className="office-hours-day">{t('contact-hours-holidays')}</span>
                <span className="office-hours-time">{t('contact-hours-closed')}</span>
                <span className="office-hours-status"><i className="bi bi-x-circle-fill"></i> Closed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Hotlines */}
      <section className="section">
        <div className="container">
          <div className="hotlines-header">
            <div className="hotlines-title">
              <span className="hotlines-badge"><i className="bi bi-exclamation-triangle-fill"></i> {t('contact-section-hotlines')}</span>
              <h2>{t('contact-section-hotlines-title')}</h2>
            </div>
            <p>{t('contact-section-hotlines-desc')}</p>
          </div>
          <div className="hotlines-grid">
            <a href="tel:09263833744" className="hotline-card">
              <i className="bi bi-exclamation-triangle-fill"></i>
              <span className="hotline-card-label">MDRRMO Solano</span>
              <span className="hotline-card-number">0926 383 3744</span>
            </a>
            <a href="tel:09274008033" className="hotline-card">
              <i className="bi bi-shield-fill"></i>
              <span className="hotline-card-label">PNP Solano</span>
              <span className="hotline-card-number">0927 400 8033</span>
            </a>
            <a href="tel:09162840885" className="hotline-card">
              <i className="bi bi-heart-fill"></i>
              <span className="hotline-card-label">MSWDO Solano</span>
              <span className="hotline-card-number">0916 284 0885</span>
            </a>
            <a href="tel:09054471061" className="hotline-card">
              <i className="bi bi-broadcast"></i>
              <span className="hotline-card-label">KABALIKAT Civicom</span>
              <span className="hotline-card-number">0905 447 1061</span>
            </a>
            <a href="tel:09358121081" className="hotline-card">
              <i className="bi bi-lightning-fill"></i>
              <span className="hotline-card-label">NUVELCO Solano</span>
              <span className="hotline-card-number">0935 812 1081</span>
            </a>
            <a href="tel:09175951931" className="hotline-card">
              <i className="bi bi-building-fill"></i>
              <span className="hotline-card-label">Mayor&apos;s Office</span>
              <span className="hotline-card-number">0917 595 1931</span>
            </a>
            <a href="tel:09061880868" className="hotline-card">
              <i className="bi bi-building"></i>
              <span className="hotline-card-label">DILG Solano</span>
              <span className="hotline-card-number">0906 188 0868</span>
            </a>
            <a href="tel:09171345511" className="hotline-card">
              <i className="bi bi-shop"></i>
              <span className="hotline-card-label">SEEDO Public Market</span>
              <span className="hotline-card-number">0917 134 5511</span>
            </a>
            <a href="tel:09161744979" className="hotline-card">
              <i className="bi bi-tree-fill"></i>
              <span className="hotline-card-label">MAGRO Solano</span>
              <span className="hotline-card-number">0916 174 4979</span>
            </a>
            <a href="tel:09171227150" className="hotline-card">
              <i className="bi bi-cone-striped"></i>
              <span className="hotline-card-label">PDRRMO N. Vizcaya</span>
              <span className="hotline-card-number">0917 122 7150</span>
            </a>
            <a href="tel:09360620305" className="hotline-card">
              <i className="bi bi-fire"></i>
              <span className="hotline-card-label">BFP Solano</span>
              <span className="hotline-card-number">0936 062 0305</span>
            </a>
          </div>
        </div>
      </section>

      {/* Medical Emergency Hotlines */}
      <section className="section bg-alt">
        <div className="container">
          <div className="hotlines-header">
            <div className="hotlines-title">
              <span className="hotlines-badge hotlines-badge--medical"><i className="bi bi-hospital-fill"></i> {t('contact-section-medical')}</span>
              <h2>{t('contact-section-medical-title')}</h2>
            </div>
            <p>{t('contact-section-medical-desc')}</p>
          </div>
          <div className="hotlines-grid">
            <a href="tel:09679103054" className="hotline-card hotline-card--medical">
              <i className="bi bi-hospital"></i>
              <span className="hotline-card-label">RHU Solano</span>
              <span className="hotline-card-number">0967 910 3054</span>
            </a>
            <a href="tel:09068195569" className="hotline-card hotline-card--medical">
              <i className="bi bi-truck"></i>
              <span className="hotline-card-label">R2TMC (Former VRH)</span>
              <span className="hotline-card-number">0906 819 5569</span>
            </a>
            <a href="tel:09208335766" className="hotline-card hotline-card--medical">
              <i className="bi bi-hospital"></i>
              <span className="hotline-card-label">PLT Hospital</span>
              <span className="hotline-card-number">0920 833 5766</span>
            </a>
            <a href="tel:09474981746" className="hotline-card hotline-card--medical">
              <i className="bi bi-hospital"></i>
              <span className="hotline-card-label">MMG Hospital</span>
              <span className="hotline-card-number">0947 498 1746</span>
            </a>
            <a href="tel:09171080452" className="hotline-card hotline-card--medical">
              <i className="bi bi-hospital"></i>
              <span className="hotline-card-label">Salubris Hospital</span>
              <span className="hotline-card-number">0917 108 0452</span>
            </a>
            <a href="tel:09175079950" className="hotline-card hotline-card--medical">
              <i className="bi bi-plus-circle-fill"></i>
              <span className="hotline-card-label">Red Cross</span>
              <span className="hotline-card-number">0917 507 9950</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
