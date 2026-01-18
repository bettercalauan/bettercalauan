'use client';

import { useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import { ordinanceSteps, resolutionSteps } from '@/data/legislative'
import ProcessStep from '@/components/legislative/ProcessStep'
import LegislativeInfoCard from '@/components/legislative/LegislativeInfoCard'

export default function LegislativePage() {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState('ordinances')

  return (
    <>
      <link rel="stylesheet" href="/assets/css/legislative.css" />

      <div className="container">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">{t('nav-home')}</Link>
          <span>/</span>
          <span aria-current="page">{t('nav-legislative')}</span>
        </nav>
      </div>

      <section className="leg-hero">
        <div className="container">
          <div className="leg-hero-content">
            <span className="leg-hero-badge"><i className="bi bi-bank2"></i> {t('legislative-badge')}</span>
            <h1>{t('legislative-subtitle')}</h1>
            <p>{t('legislative-description')}</p>
          </div>
        </div>
      </section>

      <section className="leg-categories">
        <div className="container">
          <div className="leg-categories-grid">
            <Link href="/legislative/ordinance-framework" className="leg-category-card">
              <div className="leg-category-icon"><i className="bi bi-journal-bookmark-fill"></i></div>
              <div className="leg-category-content">
                <h2>{t('ordinance-framework')}</h2>
                <p>{t('ordinance-framework-desc')}</p>
                <span className="leg-category-link">{t('browse-ordinances')} <i className="bi bi-arrow-right"></i></span>
              </div>
            </Link>
            <Link href="/legislative/resolution-framework" className="leg-category-card">
              <div className="leg-category-icon"><i className="bi bi-file-earmark-ruled-fill"></i></div>
              <div className="leg-category-content">
                <h2>{t('resolution-framework')}</h2>
                <p>{t('resolution-framework-desc')}</p>
                <span className="leg-category-link">{t('browse-resolutions')} <i className="bi bi-arrow-right"></i></span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="leg-process">
        <div className="container">
          <div className="leg-process-header">
            <span className="leg-info-tag"><i className="bi bi-diagram-3-fill"></i> {t('process-flow')}</span>
            <h2>{t('process-flow-title')}</h2>
            <p>{t('process-flow-desc')}</p>
          </div>

          <div className="leg-process-tabs">
            <button
              type="button"
              className={`leg-tab-btn ${activeTab === 'ordinances' ? 'active' : ''}`}
              onClick={() => setActiveTab('ordinances')}
            >
              <i className="bi bi-journal-bookmark-fill"></i>
              <span>{t('for-ordinances')}</span>
              <small>{t('ordinances-steps')}</small>
            </button>
            <button
              type="button"
              className={`leg-tab-btn ${activeTab === 'resolutions' ? 'active' : ''}`}
              onClick={() => setActiveTab('resolutions')}
            >
              <i className="bi bi-file-earmark-ruled-fill"></i>
              <span>{t('for-resolutions')}</span>
              <small>{t('resolutions-steps')}</small>
            </button>
          </div>

          {activeTab === 'ordinances' && (
            <div className="leg-flow-container">
              {ordinanceSteps.map((step) => (
                <ProcessStep
                  key={step.num}
                  num={step.num}
                  icon={step.icon}
                  title={step.title}
                  desc={step.desc}
                  final={step.final}
                />
              ))}
            </div>
          )}

          {activeTab === 'resolutions' && (
            <div className="leg-flow-container">
              {resolutionSteps.map((step) => (
                <ProcessStep
                  key={step.num}
                  num={step.num}
                  icon={step.icon}
                  title={step.title}
                  desc={step.desc}
                  final={step.final}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="leg-info">
        <div className="container">
          <div className="leg-info-content">
            <div className="leg-info-header">
              <span className="leg-info-tag"><i className="bi bi-info-circle-fill"></i> {t('about-section')}</span>
              <h2>{t('about-title')}</h2>
              <p>{t('about-desc')}</p>
            </div>
            <div className="leg-info-cards">
              <LegislativeInfoCard
                icon="bi bi-journal-bookmark"
                title={t('ordinances-info')}
                description={t('ordinances-info-desc')}
              />
              <LegislativeInfoCard
                icon="bi bi-file-earmark-text"
                title={t('resolutions-info')}
                description={t('resolutions-info-desc')}
              />
              <LegislativeInfoCard
                icon="bi bi-people"
                title={t('public-participation')}
                description={t('public-participation-desc')}
              />
              <LegislativeInfoCard
                icon="bi bi-shield-check"
                title={t('transparency-info')}
                description={t('transparency-info-desc')}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
