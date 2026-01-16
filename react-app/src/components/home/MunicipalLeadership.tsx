'use client';

import Link from 'next/link';

interface MunicipalLeadershipProps {
  t: (key: string) => string;
}

export default function MunicipalLeadership({ t }: MunicipalLeadershipProps) {
  return (
    <section className="section home-leadership-section">
      <div className="container">
        <div className="home-section-header">
          <h2>{t('section-leadership')}</h2>
          <Link href="/government" className="home-section-link">
            <span>{t('btn-view-officials')}</span> <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
        <div className="home-leadership-grid">
          <div className="home-leader-card">
            <div className="home-leader-badge">{t('title-mayor')}</div>
            <h3>Hon. Philip A. Dacayo</h3>
            <div className="home-leader-contacts">
              <a href="mailto:mayor@solano.gov.ph">
                <i className="bi bi-envelope"></i> mayor@solano.gov.ph
              </a>
              <a href="tel:0783265002">
                <i className="bi bi-telephone"></i> (078) 326-5002
              </a>
            </div>
          </div>
          <div className="home-leader-card">
            <div className="home-leader-badge">{t('title-vice-mayor')}</div>
            <h3>Hon. Eduardo D. Tiongson</h3>
            <div className="home-leader-contacts">
              <a href="mailto:vicemayor@solano.gov.ph">
                <i className="bi bi-envelope"></i> vicemayor@solano.gov.ph
              </a>
              <a href="tel:0783265003">
                <i className="bi bi-telephone"></i> (078) 326-5003
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}