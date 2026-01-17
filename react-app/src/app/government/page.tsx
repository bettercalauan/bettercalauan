import Link from 'next/link'

import { executiveData } from '@/data/government'
import ExecutiveCard from '@/components/government/ExecutiveCard'
import CouncilorList from '@/components/government/CouncilorList'
import DepartmentList from '@/components/government/DepartmentList'
import BarangayList from '@/components/government/BarangayList'

export const metadata = {
  title: 'Government Officials & Structure',
  description: 'Meet the leadership and offices serving Solano, Nueva Vizcaya',
}

export default function GovernmentPage() {
  return (
    <>
      <div className="container">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <span aria-current="page">Government</span>
        </nav>
      </div>

      <section className="section" style={{ background: 'var(--color-bg-alt)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--spacing-xl)' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)', color: 'white', padding: '8px 20px', borderRadius: '50px', fontSize: '0.875rem', marginBottom: 'var(--spacing-sm)' }}>
              <i className="bi bi-star-fill"></i> Executive Branch
            </span>
            <h3 style={{ fontSize: '1.75rem', marginBottom: 'var(--spacing-xs)' }}>Municipal Leadership</h3>
            <p style={{ color: 'var(--color-text-light)' }}>The executive officials leading Solano&apos;s governance</p>
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
              <i className="bi bi-people-fill"></i> Legislative Branch
            </span>
            <h3 style={{ fontSize: '1.75rem', marginBottom: 'var(--spacing-xs)' }}>Sangguniang Bayan Members</h3>
            <p style={{ color: 'var(--color-text-light)' }}>Municipal Councilors serving the people of Solano</p>
          </div>

          <CouncilorList />
        </div>
      </section>

      <section className="section" style={{ background: 'var(--color-bg-alt)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--spacing-xl)' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'linear-gradient(135deg, var(--color-info) 0%, #0099cc 100%)', color: 'white', padding: '8px 20px', borderRadius: '50px', fontSize: '0.875rem', marginBottom: 'var(--spacing-sm)' }}>
              <i className="bi bi-building-fill"></i> Municipal Offices
            </span>
            <h3 style={{ fontSize: '1.75rem', marginBottom: 'var(--spacing-xs)' }}>Department Heads & Key Offices</h3>
            <p style={{ color: 'var(--color-text-light)' }}>Municipal offices providing services to citizens</p>
          </div>

          <DepartmentList />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--spacing-xl)' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)', color: 'white', padding: '8px 20px', borderRadius: '50px', fontSize: '0.875rem', marginBottom: 'var(--spacing-sm)' }}>
              <i className="bi bi-geo-alt-fill"></i> Barangay Units
            </span>
            <h3 style={{ fontSize: '1.75rem', marginBottom: 'var(--spacing-xs)' }}>Barangays of Solano</h3>
            <p style={{ color: 'var(--color-text-light)' }}>22 Barangays serving our community</p>
          </div>

          <BarangayList />
        </div>
      </section>
    </>
  )
}
