'use client';

import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import { executiveData } from '@/data/government'
import ExecutiveCard from '@/components/government/ExecutiveCard'
import CouncilorList from '@/components/government/CouncilorList'
import DepartmentList from '@/components/government/DepartmentList'
import BarangayList from '@/components/government/BarangayList'

export default function GovernmentPage() {
  const { t } = useLanguage()
  return (
    <>
      <div className="container">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">{t('nav-home')}</Link>
          <span>/</span>
          <span aria-current="page">{t('nav-government')}</span>
        </nav>
      </div>

      <section className="section" style={{ background: 'var(--color-bg-alt)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--spacing-xl)' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)', color: 'white', padding: '8px 20px', borderRadius: '50px', fontSize: '0.875rem', marginBottom: 'var(--spacing-sm)' }}>
              <i className="bi bi-star-fill"></i> {t('executive-branch')}
            </span>
            <h3 style={{ fontSize: '1.75rem', marginBottom: 'var(--spacing-xs)' }}>{t('executive-branch-title')}</h3>
            <p style={{ color: 'var(--color-text-light)' }}>{t('executive-branch-desc')}</p>
          </div>

          <div className="grid grid-2" style={{ gap: 'var(--spacing-lg)' }}>
            {executiveData.map((executive) => (
              <ExecutiveCard
                key={executive.title}
                title={executive.title}
                name={executive.name}
                email={executive.email}
                phone={executive.phone}
                hours={executive.hours}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--spacing-xl)' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'linear-gradient(135deg, var(--color-success) 0%, #05c793 100%)', color: 'white', padding: '8px 20px', borderRadius: '50px', fontSize: '0.875rem', marginBottom: 'var(--spacing-sm)' }}>
              <i className="bi bi-people-fill"></i> {t('legislative-branch')}
            </span>
            <h3 style={{ fontSize: '1.75rem', marginBottom: 'var(--spacing-xs)' }}>{t('legislative-branch-title')}</h3>
            <p style={{ color: 'var(--color-text-light)' }}>{t('legislative-branch-desc')}</p>
          </div>

          <CouncilorList />
        </div>
      </section>

      <section className="section" style={{ background: 'var(--color-bg-alt)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--spacing-xl)' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'linear-gradient(135deg, var(--color-info) 0%, #0099cc 100%)', color: 'white', padding: '8px 20px', borderRadius: '50px', fontSize: '0.875rem', marginBottom: 'var(--spacing-sm)' }}>
              <i className="bi bi-building-fill"></i> {t('municipal-offices')}
            </span>
            <h3 style={{ fontSize: '1.75rem', marginBottom: 'var(--spacing-xs)' }}>{t('municipal-offices-title')}</h3>
            <p style={{ color: 'var(--color-text-light)' }}>{t('municipal-offices-desc')}</p>
          </div>

          <DepartmentList />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--spacing-xl)' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)', color: 'white', padding: '8px 20px', borderRadius: '50px', fontSize: '0.875rem', marginBottom: 'var(--spacing-sm)' }}>
              <i className="bi bi-geo-alt-fill"></i> {t('barangay-units')}
            </span>
            <h3 style={{ fontSize: '1.75rem', marginBottom: 'var(--spacing-xs)' }}>{t('barangay-units-title')}</h3>
            <p style={{ color: 'var(--color-text-light)' }}>{t('barangay-units-desc')}</p>
          </div>

          <BarangayList />
        </div>
      </section>
    </>
  )
}
