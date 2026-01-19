'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

const resolutionTypes = [
  { icon: 'bi-award', label: 'Commendation' },
  { icon: 'bi-envelope-paper', label: 'Request/Appeal' },
  { icon: 'bi-hand-thumbs-up', label: 'Support/Endorsement' },
  { icon: 'bi-exclamation-circle', label: 'Condolence' },
  { icon: 'bi-clipboard-check', label: 'Authorization' },
];

const resolutions2025 = [
  { no: '163-12-2025', title: 'A Resolution Approving Resolution No. 44 Series of 2025 and Appropriation Ordinance No. 66 Series of 2025 of Sangguniang Barangay of Lamot 2, Calauan, Laguna "An Ordinance Authorizing the Annual Budget of Barangay Lamot 2, Calauan, Laguna for Fiscal Year 2026 in the Amount of Eleven Million Seven Hundred Ninety-One Thousand Three Hundred Fifty-Nine Pesos (PHP 11,791,359.00)."', date: 'December 22, 2025' },
  { no: '147-12-2025', title: 'A Resolution Approving Appropriation Ordinance No. 01 Series of 2025 of Sangguniang Barangay of Barangay Silangan, Calauan, Laguna "An Ordinance Authorizing the Annual Budget of Barangay Silangan, Calauan, Laguna for Fiscal Year 2026 in the Amount of Five Million One Hundred Fifteen Thousand Ninety-Two Pesos (PHP 5,115,092.00)".', date: 'December 01, 2025' },
  { no: '141-12-2025', title: 'A Resolution Adopting and Approving FY 2025-2028 Farm-to-Market Road Network Plan (FMRNP) of the Municipality of Calauan, Laguna', date: 'November 24, 2025' },
  { no: '118-12-2025', title: 'A Resolution Approving FY 2026 Peace and Order and Public Safety (POPS) Plan Amounting to Seven Million Pesos (Php 7,000,000.00) Integrating Therein FY 2026 Local Anti-Drug Plan of Action (LADPA) of the Municipality of Calauan, Laguna.', date: 'November 03, 2025' },
  { no: '102-12-2025', title: 'A Resolution Requesting to Honorable Mayor Roseller G. Caraithan to Create a Municipal Veterinary Office in the Municipality of Calauan', date: 'October 20, 2025' },
  { no: '106-12-2025', title: 'A Resolution Approving the Priority Programs and Projects Funded Under the 20% Development Fund for Fiscal Year 2026 of the Municipal Government of Calauan, Laguna Embodied Under Municipal Development Council Resolution No. 09-2025 Amounting to Seventy-Three Million Three Hundred Fifty-Six Thousand Fifty-Four Pesos and Sixty Centavos (Php 73,356,054.60).', date: 'October 20, 2025' },
];

export default function ResolutionFrameworkPage() {
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
          <span aria-current="page">{t('resolution-framework')}</span>
        </nav>
      </div> 

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="page-header-content">
            <span className="page-header-badge"><i className="bi bi-file-earmark-text"></i> {t('legislative-title')}</span>
            <h1>{t('resolution-framework')}</h1>
            <p className="page-header-desc">{t('resolution-framework-desc')}</p>
          </div>
        </div>
      </section> 

      {/* About Resolutions */}
      <section className="section">
        <div className="container">
          <div className="info-card">
            <div className="info-card-icon"><i className="bi bi-info-circle"></i></div>
            <div className="info-card-content">
              <h3>{t('resolution-info-title')}</h3>
              <p>{t('resolution-info-desc')}</p>
              <p>{t('resolution-info-uses')}</p>
            </div>
          </div>
        </div>
      </section> 

      {/* Resolution Types */}
      <section className="section" style={{ background: 'var(--color-bg-alt)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--spacing-lg)' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-xs)' }}>{t('resolution-types')}</h2>
          </div>
          <div className="grid grid-3" style={{ gap: 'var(--spacing-sm)' }}>
            {resolutionTypes.map((type) => (
              <div key={type.label} className="category-tag">
                <i className={`bi ${type.icon}`}></i> {type.label}
              </div>
            ))}
          </div>
        </div>
      </section> 

      {/* 2025 Resolutions Table */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--spacing-lg)' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-xs)' }}>{t('resolution-2025')}</h2>
            <p style={{ color: 'var(--color-text-light)' }}>{t('resolution-2025-desc')}</p>
          </div>
          <div className="table-responsive">
            <table className="data-table resolution-table">
              <caption className="sr-only">{t('resolution-2025-caption')}</caption>
              <thead>
                <tr>
                  <th scope="col" style={{ width: '130px' }}>{t('resolution-no')}</th>
                  <th scope="col">{t('resolution-title')}</th>
                  <th scope="col" style={{ width: '120px' }}>{t('resolution-session-date')}</th>
                </tr>
              </thead>
              <tbody>
                {resolutions2025.map((res) => (
                  <tr key={res.no}>
                    <td>{res.no}</td>
                    <td>{res.title}</td>
                    <td>{res.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-center" style={{ marginTop: 'var(--spacing-lg)' }}>
            <a
              href="https://sb.calauanlaguna.gov.ph/osp/records?set_doc_type=resolution&set_year=2025&set_month="
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <i className="bi bi-box-arrow-up-right"></i> {t('resolution-view-all')}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
