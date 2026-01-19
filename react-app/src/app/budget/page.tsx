'use client'

import Link from 'next/link'
import Script from 'next/script'
import { useEffect, useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { IncomeSourcesChart, ExpenditureChart } from '@/components/charts/Charts'
import { budgetData } from '@/data/budget'
import SREMetricCard from '@/components/budget/SREMetricCard'
import QuarterToggle from '@/components/budget/QuarterToggle'
import InfrastructureProjectList from '@/components/budget/InfrastructureProjectList'

export default function BudgetPage() {
  const { t } = useLanguage()
  const [activeQuarter, setActiveQuarter] = useState<'q1' | 'q2' | 'q3' | 'q4'>('q1')
  const currentData = budgetData[activeQuarter]

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, { threshold: 0.1 })

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <link rel="stylesheet" href="/assets/css/transparency-v2.css" />

      <div className="container">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <span aria-current="page">Budget &amp; Transparency</span>
        </nav>
      </div>

      <section className="trans-hero-v2">
        <div className="container">
          <div className="trans-hero-content-v2">
            <span className="trans-hero-badge-v2"><i className="bi bi-shield-check"></i> {t('budget-financial-transparency')}</span>
            <h1>{t('budget-title')}</h1>
            <p>{t('budget-description')}</p>
          </div>
        </div>
      </section>

      <section className="sre-section-v2 animate-on-scroll">
        <div className="container">
          <div className="sre-header-v2">
            <div className="sre-title-group">
              <span className="sre-label"><i className="bi bi-graph-up-arrow"></i> {t('budget-financial-report')}</span>
              <h2>{t('budget-statement-receipts')}</h2>
              <p>{t('budget-fy2025-quarterly')}</p>
            </div>
            <QuarterToggle
              activeQuarter={activeQuarter}
              onQuarterChange={setActiveQuarter}
            />
          </div>

          <div className="sre-metrics-row">
            <SREMetricCard icon="bi-arrow-down-circle" label="Total Income" value={currentData.totalIncome} iconClassName="sre-metric-income" />
            <SREMetricCard icon="bi-arrow-up-circle" label="Total Expenditures" value={currentData.totalExpense} iconClassName="sre-metric-expense" />
            <SREMetricCard icon="bi-plus-slash-minus" label="Net Operating Income" value={currentData.netIncome} iconClassName="sre-metric-net" />
            <SREMetricCard icon="bi-wallet2" label="Fund Balance (End)" value={currentData.fundBalance} iconClassName="sre-metric-balance" />
          </div>
          <div className="sre-breakdown-v2">
            <div className="sre-breakdown-panel">
              <div className="sre-panel-header">
                <h3><i className="bi bi-pie-chart"></i> Income Sources</h3>
              </div>
              <div className="sre-panel-body">
                <div className="sre-chart-container">
                  <IncomeSourcesChart
                    localValue={currentData.income.local.value}
                    externalValue={currentData.income.external.value}
                    totalIncome={currentData.totalIncomeValue}
                  />
                </div>
                <div className="sre-breakdown-list">
                  <div className="sre-breakdown-item" data-type="local">
                    <span className="sre-item-indicator sre-indicator-local"></span>
                    <div className="sre-item-info">
                      <span className="sre-item-name">Local Sources</span>
                      <span className="sre-item-detail">Tax &amp; Non-Tax Revenue</span>
                    </div>
                    <div className="sre-item-values">
                      <span className="sre-item-amount" id="sre-income-local">{currentData.income.local.amount}</span>
                      <span className="sre-item-pct" id="sre-income-local-pct">{currentData.income.local.pct}</span>
                    </div>
                  </div>
                  <div className="sre-breakdown-item" data-type="external">
                    <span className="sre-item-indicator sre-indicator-external"></span>
                    <div className="sre-item-info">
                      <span className="sre-item-name">External Sources</span>
                      <span className="sre-item-detail">National Tax Allotment</span>
                    </div>
                    <div className="sre-item-values">
                      <span className="sre-item-amount" id="sre-income-external">{currentData.income.external.amount}</span>
                      <span className="sre-item-pct" id="sre-income-external-pct">{currentData.income.external.pct}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="sre-breakdown-panel">
              <div className="sre-panel-header">
                <h3><i className="bi bi-bar-chart"></i> Expenditure Allocation</h3>
              </div>
              <div className="sre-panel-body">
                <div className="sre-chart-container">
                  <ExpenditureChart
                    gpsValue={currentData.expenditure.gps.value}
                    socialValue={currentData.expenditure.social.value}
                    economicValue={currentData.expenditure.economic.value}
                    debtValue={currentData.expenditure.debt.value}
                    totalExpense={currentData.totalExpenseValue}
                  />
                </div>
                <div className="sre-breakdown-list">
                  <div className="sre-breakdown-item" data-type="gps">
                    <span className="sre-item-indicator sre-indicator-gps"></span>
                    <div className="sre-item-info">
                      <span className="sre-item-name">General Public Services</span>
                      <span className="sre-item-detail">Administration &amp; Operations</span>
                    </div>
                    <div className="sre-item-values">
                      <span className="sre-item-amount" id="sre-exp-gps">{currentData.expenditure.gps.amount}</span>
                      <span className="sre-item-pct" id="sre-exp-gps-pct">{currentData.expenditure.gps.pct}</span>
                    </div>
                  </div>
                  <div className="sre-breakdown-item" data-type="social">
                    <span className="sre-item-indicator sre-indicator-social"></span>
                    <div className="sre-item-info">
                      <span className="sre-item-name">Social Services</span>
                      <span className="sre-item-detail">Health, Education, Welfare</span>
                    </div>
                    <div className="sre-item-values">
                      <span className="sre-item-amount" id="sre-exp-social">{currentData.expenditure.social.amount}</span>
                      <span className="sre-item-pct" id="sre-exp-social-pct">{currentData.expenditure.social.pct}</span>
                    </div>
                  </div>
                  <div className="sre-breakdown-item" data-type="economic">
                    <span className="sre-item-indicator sre-indicator-economic"></span>
                    <div className="sre-item-info">
                      <span className="sre-item-name">Economic Services</span>
                      <span className="sre-item-detail">Infrastructure &amp; Development</span>
                    </div>
                    <div className="sre-item-values">
                      <span className="sre-item-amount" id="sre-exp-economic">{currentData.expenditure.economic.amount}</span>
                      <span className="sre-item-pct" id="sre-exp-economic-pct">{currentData.expenditure.economic.pct}</span>
                    </div>
                  </div>
                  <div className="sre-breakdown-item" data-type="debt">
                    <span className="sre-item-indicator sre-indicator-debt"></span>
                    <div className="sre-item-info">
                      <span className="sre-item-name">Debt Service</span>
                      <span className="sre-item-detail">Interest &amp; Charges</span>
                    </div>
                    <div className="sre-item-values">
                      <span className="sre-item-amount" id="sre-exp-debt">{currentData.expenditure.debt.amount}</span>
                      <span className="sre-item-pct" id="sre-exp-debt-pct">{currentData.expenditure.debt.pct}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>

          <p className="sre-source"><i className="bi bi-info-circle"></i> Source: <a href="https://blgf.gov.ph/" target="_blank" rel="noopener noreferrer">Bureau of Local Government Finance (BLGF)</a></p>
        </div>
      </section>

      <section className="infra-section-v5 animate-on-scroll">
        <div className="container">
          <div className="infra-header-v5">
            <span className="infra-label-v5"><i className="bi bi-building-gear"></i> {t('budget-public-works')}</span>
            <h2>{t('budget-infrastructure-investments')}</h2>
            <p>{t('budget-infrastructure-desc')}</p>
          </div>

          <InfrastructureProjectList />
        </div>
      </section>

      <section className="infra-section-v5 infra-section-alt animate-on-scroll">
        <div className="container">
          <div className="infra-header-v5">
            <span className="infra-label-v5"><i className="bi bi-building"></i> {t('budget-national-projects')}</span>
            <h2>{t('budget-dpwh-projects')}</h2>
            <p>{t('budget-implementing-agency')}: <a href="https://www.dpwh.gov.ph/dpwh/node/1559" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Laguna 3rd District Engineering Office - San Pablo City</a></p>
          </div>
          <div id="dpwh-projects-container">
            <p className="loading-text">Loading DPWH projects...</p>
          </div>
          <p className="sre-source dpwh-source-margin">
            <i className="bi bi-info-circle"></i> Source: <a href="https://transparency.dpwh.gov.ph/" target="_blank" rel="noopener noreferrer">DPWH Transparency Portal</a> (Mirrored January 17, 2026 — may not reflect current data)
          </p>
        </div>
      </section>

      <Script src="/assets/js/dpwh-projects.js" strategy="lazyOnload" />
    </>
  )
}
