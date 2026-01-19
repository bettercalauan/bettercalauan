'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

const ordinanceCategories = [
  { icon: 'bi-cash-coin', label: 'Revenue & Taxation' },
  { icon: 'bi-shop', label: 'Business & Trade' },
  { icon: 'bi-shield-check', label: 'Public Safety' },
  { icon: 'bi-tree', label: 'Environment' },
  { icon: 'bi-signpost-2', label: 'Traffic & Transportation' },
  { icon: 'bi-building', label: 'Zoning & Land Use' },
];

const ordinances2025 = [
  { no: 'MO-10-12-2025', title: 'An Ordinance Reclassifying Parcels of Land Applied by Borland Development Corporation with a Total Land Area of Two Hundred Forty-Eight Thousand Four Hundred Eleven (248,411) Square Meters Located at Barangay Limao, Calauan, Laguna from Agricultural to Residential.', date: 'December 09, 2025' },
  { no: 'MO-09-12-2025', title: 'An Ordinance Institutionalizing Environmental, Social, and Governance Management System (ESGMS) of the Municipality of Calauan, Laguna, with Focus on Hydrological, Geological, Biodiversity and Social Frameworks for Comprehensive Environmental and Spatial Capacity Planning and Creating a Municipal Technical Working Group for Its Formulation, Implementation, Monitoring and for Other Purposes.', date: 'December 09, 2025' },
  { no: 'MO-08-12-2025', title: 'An Ordinance Approving Issuance of Development Permit for a Residential Subdivision Project (Phirst Sights Calauan West) of Phirst Park Homes Inc. Located at Barangay Masiit, Calauan, Laguna.', date: 'December 09, 2025' },
  { no: 'MO-07-12-2025', title: 'An Ordinance Reclassifying Parcels of Land Applied by Phirst Park Homes Inc. with a Total Land Area of Sixty Thousand Seven Hundred Twenty-Seven (60,727) Square Meters Located at Barangay Masiit, Calauan, Laguna from Agricultural to Residential.', date: 'November 17, 2025' },
  { no: 'MO-03-12-2025', title: 'An Ordinance Renaming Dayap National Integrated High School to Calauan National High School and Separating It from Its Mother School, Dayap National High School.', date: 'September 02, 2025' },
];

export default function OrdinanceFrameworkPage() {
  const { t } = useLanguage();

  return (
    <>
      {/* Breadcrumbs */}
      <div className="container">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">{t('nav-home')}</Link>
          <span>/</span>
          <Link href="/legislative">{t('nav-legislative')}</Link>
          <span>/</span>
          <span aria-current="page">{t('ordinance-framework')}</span>
        </nav>
      </div> 

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="page-header-content">
            <span className="page-header-badge"><i className="bi bi-journal-text"></i> {t('legislative-title')}</span>
            <h1>{t('ordinance-framework')}</h1>
            <p className="page-header-desc">{t('ordinance-framework-desc')}</p>
          </div>
        </div>
      </section> 

      {/* About Ordinances */}
      <section className="section">
        <div className="container">
          <div className="info-card">
            <div className="info-card-icon"><i className="bi bi-info-circle"></i></div>
            <div className="info-card-content">
              <h3>{t('ordinance-info-title')}</h3>
              <p>{t('ordinance-info-desc')}</p>
              <p>{t('ordinance-info-subjects')}</p>
            </div>
          </div>
        </div>
      </section> 

      {/* Ordinance Categories */}
      <section className="section" style={{ background: 'var(--color-bg-alt)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--spacing-lg)' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-xs)' }}>{t('ordinance-categories')}</h2>
          </div>
          <div className="grid grid-3" style={{ gap: 'var(--spacing-sm)' }}>
            {ordinanceCategories.map((cat) => (
              <div key={cat.label} className="category-tag">
                <i className={`bi ${cat.icon}`}></i> {cat.label}
              </div>
            ))}
          </div>
        </div>
      </section> 

      {/* 2025 Ordinances Table */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--spacing-lg)' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-xs)' }}>{t('ordinance-2025')}</h2>
            <p style={{ color: 'var(--color-text-light)' }}>{t('ordinance-2025-desc')}</p>
          </div>
          <div className="table-responsive">
            <table className="data-table ordinance-table">
              <caption className="sr-only">{t('ordinance-2025-caption')}</caption>
              <thead>
                <tr>
                  <th scope="col" style={{ width: '120px' }}>{t('ordinance-no')}</th>
                  <th scope="col">{t('ordinance-title')}</th>
                  <th scope="col" style={{ width: '120px' }}>{t('ordinance-session-date')}</th>
                </tr>
              </thead>
              <tbody>
                {ordinances2025.map((ord) => (
                  <tr key={ord.no}>
                    <td>{ord.no}</td>
                    <td>{ord.title}</td>
                    <td>{ord.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-center" style={{ marginTop: 'var(--spacing-lg)' }}>
            <a
              href="https://sb.calauanlaguna.gov.ph/osp/records?set_doc_type=ordinance&set_year=2025&set_month="
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <i className="bi bi-box-arrow-up-right"></i> {t('ordinance-view-all')}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
