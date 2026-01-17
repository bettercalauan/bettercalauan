'use client';

import { useEffect } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { PopulationTrendsChart, PopulationDistributionChart, BarangayPopulationChart, CMCIRankingsChart, EconomicSectorsChart, KeyIndicatorsTrendChart } from '@/components/charts/Charts'
import { keyMetrics, populationStats, povertyStats, cmciOverview, economicSectors, barangaysPopulation } from '@/data/statistics'
import MetricsCard from '@/components/statistics/MetricsCard'
import PopulationTrendsSummary from '@/components/statistics/PopulationTrendsSummary'
import FinanceCards from '@/components/statistics/FinanceCards'
import EconomyCards from '@/components/statistics/EconomyCards'
import PovertyComparison from '@/components/statistics/PovertyComparison'
import BarangayList from '@/components/statistics/BarangayList'
import AllBarangaysList from '@/components/statistics/AllBarangaysList'
import CMCIOverviewGrid from '@/components/statistics/CMCIOverviewGrid'
import EconomicSectorBars from '@/components/statistics/EconomicSectorBars'

export default function StatisticsPage() {
  const { t } = useLanguage()
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, { threshold: 0.1 })

    document.querySelectorAll('.animate-on-scroll, .metric-card').forEach(el => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <link rel="stylesheet" href="/assets/css/statistics.css" />

      <div className="container">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <a href="/">{t('nav-home')}</a>
          <span>/</span>
          <span aria-current="page">{t('nav-statistics')}</span>
        </nav>
      </div>

      <section className="stats-hero">
        <div className="container">
          <div className="stats-hero-content">
            <span className="stats-hero-badge"><i className="bi bi-bar-chart-fill"></i> {t('stats-badge')}</span>
            <h1>{t('stats-title')}</h1>
            <p>{t('stats-description')}</p>
          </div>
        </div>
      </section>

      <section className="stats-metrics">
        <div className="container">
          <div className="metrics-grid">
            {keyMetrics.map((metric, index) => (
              <MetricsCard
                key={index}
                icon={metric.icon}
                value={metric.value}
                label={metric.label}
                source={metric.source}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="stats-section stats-finance animate-on-scroll">
        <div className="container">
          <div className="section-header-minimal">
            <span className="section-tag"><i className="bi bi-cash-stack"></i> {t('finance-section')}</span>
            <h2>{t('finance-title')}</h2>
            <p>{t('finance-desc')}</p>
          </div>

          <div className="finance-grid">
            <FinanceCards />
          </div>

          <div className="income-breakdown animate-on-scroll">
            <h4>{t('income-composition')}</h4>
            <div className="breakdown-bar">
              <div className="breakdown-segment breakdown-ira" style={{ width: povertyStats.iraDependency }}>
                <span className="breakdown-label">IRA {povertyStats.iraDependency}</span>
              </div>
              <div className="breakdown-segment breakdown-local" style={{ width: (100 - parseFloat(povertyStats.iraDependency)) + '%' }}>
                <span className="breakdown-label">Local {100 - parseFloat(povertyStats.iraDependency)}%</span>
              </div>
            </div>
            <div className="breakdown-legend">
              <div className="legend-item"><span className="legend-dot legend-ira"></span>{t('income-ira')}</div>
              <div className="legend-item"><span className="legend-dot legend-local"></span>{t('income-local')}</div>
            </div>
          </div>

          <p className="data-source"><i className="bi bi-info-circle"></i> Source: <a href="https://blgf.gov.ph/" target="_blank" rel="noopener noreferrer">Bureau of Local Government Finance (BLGF)</a></p>
        </div>
      </section>

      <section className="stats-section stats-trends animate-on-scroll">
        <div className="container">
          <div className="section-header-minimal">
            <span className="section-tag"><i className="bi bi-graph-up"></i> {t('growth-section')}</span>
            <h2>{t('growth-title')}</h2>
            <p>{t('growth-desc')}</p>
          </div>

          <PopulationTrendsSummary />

          <div className="chart-wrapper">
            <PopulationTrendsChart />
          </div>

          <p className="data-source"><i className="bi bi-info-circle"></i> Source: <a href="https://psa.gov.ph/" target="_blank" rel="noopener noreferrer">Philippine Statistics Authority (PSA)</a></p>
        </div>
      </section>

      <section className="stats-section stats-distribution animate-on-scroll">
        <div className="container">
          <div className="section-header-minimal">
            <span className="section-tag"><i className="bi bi-pie-chart-fill"></i> {t('distribution-section')}</span>
            <h2>{t('distribution-title')}</h2>
            <p>{t('distribution-desc')}</p>
          </div>

          <div className="distribution-layout">
            <div className="distribution-chart">
              <PopulationDistributionChart />
            </div>
            <BarangayList />
          </div>

          <details className="more-barangays">
            <summary>{t('view-all-barangays')}</summary>
            <AllBarangaysList />
          </details>

          <p className="data-source"><i className="bi bi-info-circle"></i> Source: <a href="https://psa.gov.ph/" target="_blank" rel="noopener noreferrer">Philippine Statistics Authority (PSA)</a> - 2024 Census</p>
        </div>
      </section>

      <section className="stats-section stats-economy animate-on-scroll">
        <div className="container">
          <div className="section-header-minimal">
            <span className="section-tag"><i className="bi bi-briefcase-fill"></i> {t('economy-section')}</span>
            <h2>{t('economy-title')}</h2>
            <p>{t('economy-desc')}</p>
          </div>

          <EconomyCards />

          <div className="sectors-chart animate-on-scroll">
            <h4>{t('economic-sectors')}</h4>
            <EconomicSectorBars />
          </div>

          <p className="data-source"><i className="bi bi-info-circle"></i> Source: <a href="https://blgf.gov.ph/" target="_blank" rel="noopener noreferrer">Bureau of Local Government Finance (BLGF)</a> - 2023</p>
        </div>
      </section>

      <section className="stats-section stats-poverty animate-on-scroll">
        <div className="container">
          <div className="section-header-minimal">
            <span className="section-tag"><i className="bi bi-graph-down-arrow"></i> {t('poverty-section')}</span>
            <h2>{t('poverty-title')}</h2>
            <p>{t('poverty-desc')}</p>
          </div>

          <PovertyComparison />

          <p className="data-source"><i className="bi bi-info-circle"></i> Source: <a href="https://psa.gov.ph/" target="_blank" rel="noopener noreferrer">Philippine Statistics Authority (PSA)</a> - 2021 Poverty Estimates</p>
        </div>
      </section>

      <section className="stats-section stats-competitive animate-on-scroll" id="competitive-index">
        <div className="container">
          <div className="section-header-minimal">
            <span className="section-tag"><i className="bi bi-trophy-fill"></i> {t('competitive-section')}</span>
            <h2>{t('competitive-title')}</h2>
            <p>{t('competitive-desc')}</p>
          </div>

          <CMCIOverviewGrid />

          <div className="cmci-chart-container">
            <h4><i className="bi bi-bar-chart-line"></i> {t('key-indicators-trend')}</h4>
            <div className="chart-wrapper">
              <KeyIndicatorsTrendChart />
            </div>
          </div>

          <p className="data-source"><i className="bi bi-info-circle"></i> Source: <a href="https://cmci.dti.gov.ph/" target="_blank" rel="noopener noreferrer">DTI Cities and Municipalities Competitiveness Index (CMCI)</a></p>
        </div>
      </section>

      <section className="stats-section stats-barchart animate-on-scroll">
        <div className="container">
          <div className="section-header-minimal">
            <span className="section-tag"><i className="bi bi-bar-chart-fill"></i> {t('visual-section')}</span>
            <h2>{t('visual-title')}</h2>
            <p>{t('visual-desc')}</p>
          </div>

          <div className="chart-wrapper chart-wrapper-bar">
            <BarangayPopulationChart />
          </div>

          <p className="data-source"><i className="bi bi-info-circle"></i> Source: <a href="https://psa.gov.ph/" target="_blank" rel="noopener noreferrer">Philippine Statistics Authority (PSA)</a> - 2024 Census</p>
        </div>
      </section>
    </>
  )
}
