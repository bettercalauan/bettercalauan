'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { contactInfo, officeHoursSchedule, emergencyHotlines, medicalEmergencyHotlines } from '@/data/contact'

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
            {contactInfo.map((info) => (
              <a key={info.labelKey} href={info.href} className="contact-card">
                <div className="contact-card-icon"><i className={`bi ${info.icon}`}></i></div>
                <div className="contact-card-content">
                  <h3>{t(info.labelKey)}</h3>
                  <p className="contact-card-value">{info.value}</p>
                  <span className="contact-card-note">{t(info.noteKey)}</span>
                </div>
              </a>
            ))}
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
              {officeHoursSchedule.map((item, index) => (
                <div key={index} className={`office-hours-item office-hours-item--${item.status}`}>
                  <span className="office-hours-day">{item.day}</span>
                  <span className="office-hours-time">{item.time}</span>
                  <span className="office-hours-status">
                    <i className={`bi bi-${item.status === 'open' ? 'check-circle-fill' : item.status === 'break' ? 'pause-circle-fill' : 'x-circle-fill'}`}></i>
                    {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                  </span>
                </div>
              ))}
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
            {emergencyHotlines.map((hotline) => (
              <a key={hotline.name} href={`tel:${hotline.number.replace(/\s/g, '')}`} className="hotline-card">
                <i className={`bi ${hotline.icon}`}></i>
                <span className="hotline-card-label">{hotline.name}</span>
                <span className="hotline-card-number">{hotline.number}</span>
              </a>
            ))}
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
            {medicalEmergencyHotlines.map((hotline) => (
              <a key={hotline.name} href={`tel:${hotline.number.replace(/\s/g, '')}`} className="hotline-card hotline-card--medical">
                <i className={`bi ${hotline.icon}`}></i>
                <span className="hotline-card-label">{hotline.name}</span>
                <span className="hotline-card-number">{hotline.number}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
