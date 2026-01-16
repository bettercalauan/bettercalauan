'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import SearchAutocomplete from '@/components/SearchAutocomplete';
import History from '@/components/home/History';

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
      <section className="home-stats-v2">
        <div className="container">
          <div className="home-stats-v2-header">
            <h2>Solano at a Glance</h2>
            <Link href="/statistics" className="home-section-link">View Statistics <i className="bi bi-arrow-right"></i></Link>
          </div>
          <div className="home-stats-v2-grid">
            <Link href="/statistics" className="home-stat-card">
              <div className="home-stat-card-icon"><i className="bi bi-people-fill"></i></div>
              <div className="home-stat-card-content">
                <span className="home-stat-card-value">69,296</span>
                <span className="home-stat-card-label">Population</span>
                <span className="home-stat-card-source">2024 Census</span>
              </div>
            </Link>
            <Link href="/government" className="home-stat-card">
              <div className="home-stat-card-icon"><i className="bi bi-geo-alt-fill"></i></div>
              <div className="home-stat-card-content">
                <span className="home-stat-card-value">22</span>
                <span className="home-stat-card-label">Barangays</span>
                <span className="home-stat-card-source">Administrative Units</span>
              </div>
            </Link>
            <Link href="/budget" className="home-stat-card">
              <div className="home-stat-card-icon"><i className="bi bi-award-fill"></i></div>
              <div className="home-stat-card-content">
                <span className="home-stat-card-value">1st Class</span>
                <span className="home-stat-card-label">Municipality</span>
                <span className="home-stat-card-source">Income Classification</span>
              </div>
            </Link>
            <Link href="/statistics" className="home-stat-card">
              <div className="home-stat-card-icon"><i className="bi bi-rulers"></i></div>
              <div className="home-stat-card-content">
                <span className="home-stat-card-value">162.70 km²</span>
                <span className="home-stat-card-label">Land Area</span>
                <span className="home-stat-card-source">Total Municipal Area</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Weather & Map */}
      <section className="section weather-map-section">
        <div className="container">
          <div className="home-stats-v2-header">
            <h2>Weather and Map of Calauan</h2>
          </div>
          <div className="weather-map-grid">
            <div className="weather-column">
              <div id="weather-container" aria-live="polite">
                <div className="weather-widget" role="region" aria-label="Current weather in Calauan">
                  <div className="weather-current">
                    <div className="weather-current-icon"><i className="bi bi-cloud-sun-fill"></i></div>
                    <div className="weather-current-info">
                      <div className="weather-current-temp">__°C</div>
                      <div className="weather-current-condition">______ _____</div>
                      <div className="weather-current-location"><i className="bi bi-geo-alt"></i> Calauan, Laguna</div>
                    </div>
                  </div>
                  <div className="weather-stats">
                    <div className="weather-stat"><i className="bi bi-droplet"></i><span>__%</span></div>
                    <div className="weather-stat"><i className="bi bi-wind"></i><span>__ km/h</span></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="map-column">
              <div className="map-card">
                <div id="map-container" role="application" aria-label="Interactive map of Calauan, Laguna" className="map-container-iframe">
                  <iframe width="100%" height="300" frameBorder="0" scrolling="no" src="https://www.openstreetmap.org/export/embed.html?bbox=121.28871917724611%2C14.129715337310271%2C121.35086059570312%2C14.167458790750569" className="map-iframe" title="Map of Solano" loading="lazy"></iframe>
                </div>
                <p className="map-attribution">
                  <i className="bi bi-geo-alt" aria-hidden="true"></i> Calauan Municipal Hall, Laguna 4012
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brief History of Solano */}
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
                <span className="home-news-date">Nov 28, 2025</span>
              </div>
              <h3><Link href="/news">Business Permit Renewal 2025</Link></h3>
              <p>Deadline for business permit renewal is set for January 20, 2025. Early renewal is encouraged.</p>
            </article>
            <article className="home-news-card">
              <div className="home-news-meta">
                <span className="home-news-badge home-news-badge--success">Project</span>
                <span className="home-news-date">Nov 15, 2025</span>
              </div>
              <h3><Link href="/news">New Public Market Wing Opens</Link></h3>
              <p>The renovated wing of the Solano Public Market is now open to vendors and the public.</p>
            </article>
            <article className="home-news-card">
              <div className="home-news-meta">
                <span className="home-news-badge home-news-badge--warning">Advisory</span>
                <span className="home-news-date">Nov 10, 2025</span>
              </div>
              <h3><Link href="/news">Scheduled Power Interruption</Link></h3>
              <p>Maintenance scheduled for Barangay Osmeña on Dec 1, 8:00 AM - 5:00 PM.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Municipal Leadership */}
      <section className="section home-leadership-section">
        <div className="container">
          <div className="home-section-header">
            <h2>{t('section-leadership')}</h2>
            <Link href="/government" className="home-section-link"><span>{t('btn-view-officials')}</span> <i className="bi bi-arrow-right"></i></Link>
          </div>
          <div className="home-leadership-grid">
            <div className="home-leader-card">
              <div className="home-leader-badge">{t('title-mayor')}</div>
              <h3>Hon. Philip A. Dacayo</h3>
              <div className="home-leader-contacts">
                <a href="mailto:mayor@solano.gov.ph"><i className="bi bi-envelope"></i> mayor@solano.gov.ph</a>
                <a href="tel:0783265002"><i className="bi bi-telephone"></i> (078) 326-5002</a>
              </div>
            </div>
            <div className="home-leader-card">
              <div className="home-leader-badge">{t('title-vice-mayor')}</div>
              <h3>Hon. Eduardo D. Tiongson</h3>
              <div className="home-leader-contacts">
                <a href="mailto:vicemayor@solano.gov.ph"><i className="bi bi-envelope"></i> vicemayor@solano.gov.ph</a>
                <a href="tel:0783265003"><i className="bi bi-telephone"></i> (078) 326-5003</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section">
        <div className="container">
          <div className="home-section-header">
            <h2>{t('section-contact')}</h2>
            <Link href="/contact" className="home-section-link">{t('btn-view-all')} <i className="bi bi-arrow-right"></i></Link>
          </div>
          <div className="home-contact-v2-grid">
            <a href="tel:0788053581" className="home-contact-v2-card">
              <div className="home-contact-v2-icon"><i className="bi bi-telephone-fill"></i></div>
              <div className="home-contact-v2-content">
                <h3>{t('contact-phone')}</h3>
                <p className="home-contact-v2-value">(078) 805-3581</p>
                <span className="home-contact-v2-note">{t('contact-hours')}</span>
              </div>
            </a>
            <a href="mailto:lgusolanonv@gmail.com" className="home-contact-v2-card">
              <div className="home-contact-v2-icon"><i className="bi bi-envelope-fill"></i></div>
              <div className="home-contact-v2-content">
                <h3>{t('contact-email')}</h3>
                <p className="home-contact-v2-value">lgusolanonv@gmail.com</p>
                <span className="home-contact-v2-note">{t('contact-response')}</span>
              </div>
            </a>
            <div className="home-contact-v2-card">
              <div className="home-contact-v2-icon"><i className="bi bi-geo-alt-fill"></i></div>
              <div className="home-contact-v2-content">
                <h3>{t('contact-address')}</h3>
                <p className="home-contact-v2-value">{t('contact-municipal-hall')}</p>
                <span className="home-contact-v2-note">Solano, Nueva Vizcaya 3708</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
