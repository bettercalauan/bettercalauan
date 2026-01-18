'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import SearchAutocomplete from '@/components/SearchAutocomplete';
import History from '@/components/home/History';
import QuickStats from '@/components/home/QuickStats';
import WeatherMap from '@/components/home/WeatherMap';
import MunicipalLeadership from '@/components/home/MunicipalLeadership';
import ContactInformation from '@/components/home/ContactInformation';

export default function HomePage() {
  const { t } = useLanguage();

  useEffect(() => {
    // Load Leaflet map after component mounts - handled by iframe fallback
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="home-hero-v2">
        <div className="container">
          <div className="home-hero-v2-inner">
            <div className="home-hero-v2-text">
              <h1>{t('hero-welcome')}</h1>
              <p>{t('hero-subtitle')}</p>
              <div className="home-hero-v2-actions">
                <Link href="/services" className="btn btn-primary">Browse Services <i className="bi bi-arrow-right"></i></Link>
                <Link href="/contact" className="btn btn-outline">Contact Us</Link>
              </div>
            </div>
            <div className="home-hero-v2-search">
              <div className="home-search-box">
                <h2><i className="bi bi-search"></i> {t('hero-find-service')}</h2>
                <form className="search-form" role="search" onSubmit={(e) => e.preventDefault()}>
                  <div className="search-input-wrapper">
                    <SearchAutocomplete placeholder="e.g., birth certificate, business permit" />
                    <button type="submit" className="search-submit-btn" aria-label="Search"><i className="bi bi-arrow-right"></i></button>
                  </div>
                </form>
                <div className="home-search-tags">
                  <span>Popular:</span>
                  <Link href="/service-details/birth-certificate">Birth Certificate</Link>
                  <Link href="/service-details/business-permits-licensing">Business Permit</Link>
                  <Link href="/service-details/municipal-treasurer">Real Property Tax</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section className="section">
        <div className="container">
          <div className="home-section-header">
            <h2>{t('section-popular')}</h2>
            <p>Quick access to frequently requested municipal services</p>
          </div>
          <div className="home-services-grid">
            <Link href="/services/certificates" className="home-service-card">
              <div className="home-service-icon"><i className="bi bi-file-earmark-text-fill"></i></div>
              <div className="home-service-content">
                <h3>{t('service-certificates')}</h3>
                <p>{t('service-certificates-desc')}</p>
              </div>
              <i className="bi bi-arrow-right home-service-arrow"></i>
            </Link>
            <Link href="/services/business" className="home-service-card">
              <div className="home-service-icon"><i className="bi bi-shop"></i></div>
              <div className="home-service-content">
                <h3>{t('service-business')}</h3>
                <p>{t('service-business-desc')}</p>
              </div>
              <i className="bi bi-arrow-right home-service-arrow"></i>
            </Link>
            <Link href="/services/tax-payments" className="home-service-card">
              <div className="home-service-icon"><i className="bi bi-cash-coin"></i></div>
              <div className="home-service-content">
                <h3>{t('service-tax')}</h3>
                <p>{t('service-tax-desc')}</p>
              </div>
              <i className="bi bi-arrow-right home-service-arrow"></i>
            </Link>
            <Link href="/services/social-services" className="home-service-card">
              <div className="home-service-icon"><i className="bi bi-people-fill"></i></div>
              <div className="home-service-content">
                <h3>{t('service-social')}</h3>
                <p>{t('service-social-desc')}</p>
              </div>
              <i className="bi bi-arrow-right home-service-arrow"></i>
            </Link>
            <Link href="/services/health" className="home-service-card">
              <div className="home-service-icon"><i className="bi bi-heart-pulse-fill"></i></div>
              <div className="home-service-content">
                <h3>{t('service-health')}</h3>
                <p>{t('service-health-desc')}</p>
              </div>
              <i className="bi bi-arrow-right home-service-arrow"></i>
            </Link>
            <Link href="/services" className="home-service-card home-service-card--all">
              <div className="home-service-icon"><i className="bi bi-grid-fill"></i></div>
              <div className="home-service-content">
                <h3>{t('btn-view-all-services')}</h3>
                <p>Browse complete directory</p>
              </div>
              <i className="bi bi-arrow-right home-service-arrow"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <QuickStats />

      {/* Weather & Map */}
      <WeatherMap />

      {/* Brief History of Calauan */}
      <History />

      {/* Latest Updates */}
      <section className="section">
        <div className="container">
          <div className="home-section-header">
            <h2>{t('section-updates')}</h2>
            <Link href="/news" className="home-section-link"><span>{t('btn-view-all')}</span> <i className="bi bi-arrow-right"></i></Link>
          </div>
          <div className="home-news-grid">
            <article className="home-news-card">
              <div className="home-news-meta">
                <span className="home-news-badge home-news-badge--info">Announcement</span>
                <span className="home-news-date">Sept 02, 2025</span>
              </div>
              <h3><Link href="/news">Renaming DNIHS to CNHS</Link></h3>
              <p>An Ordinance Renaming Dayap National Integrated High School to Calauan National High School and Separating It from Its Mother School, the Dayap National High School.</p>
            </article>
            <article className="home-news-card">
              <div className="home-news-meta">
                <span className="home-news-badge home-news-badge--success">Project</span>
                <span className="home-news-date">...</span>
              </div>
              <h3><Link href="/news">...</Link></h3>
              <p>...</p>
            </article>
            <article className="home-news-card">
              <div className="home-news-meta">
                <span className="home-news-badge home-news-badge--warning">Advisory</span>
                <span className="home-news-date">...</span>
              </div>
              <h3><Link href="/news">...</Link></h3>
              <p>...</p>
            </article>
          </div>
        </div>
      </section>

      <MunicipalLeadership t={t} />

      {/* Contact Information */}
      <ContactInformation t={t} />
    </>
  );
}
