'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ordinanceSteps, resolutionSteps } from '@/data/legislative'
import ProcessStep from '@/components/legislative/ProcessStep'
import LegislativeInfoCard from '@/components/legislative/LegislativeInfoCard'

export default function LegislativePage() {
  const [activeTab, setActiveTab] = useState('ordinances')

  return (
    <>
      <link rel="stylesheet" href="/assets/css/legislative.css" />

      <div className="container">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <span aria-current="page">Legislative</span>
        </nav>
      </div>

      <section className="leg-hero">
        <div className="container">
          <div className="leg-hero-content">
            <span className="leg-hero-badge"><i className="bi bi-bank2"></i> Sangguniang Bayan</span>
            <h1>Legislative Documents</h1>
            <p>Ordinances and resolutions of Sangguniang Bayan ng Solano</p>
          </div>
        </div>
      </section>

      <section className="leg-categories">
        <div className="container">
          <div className="leg-categories-grid">
            <Link href="/legislative/ordinance-framework" className="leg-category-card">
              <div className="leg-category-icon"><i className="bi bi-journal-bookmark-fill"></i></div>
              <div className="leg-category-content">
                <h2>Ordinance Framework</h2>
                <p>Municipal ordinances enacted by the Sangguniang Bayan — local laws that govern the municipality and its residents.</p>
                <span className="leg-category-link">Browse Ordinances <i className="bi bi-arrow-right"></i></span>
              </div>
            </Link>
            <Link href="/legislative/resolution-framework" className="leg-category-card">
              <div className="leg-category-icon"><i className="bi bi-file-earmark-ruled-fill"></i></div>
              <div className="leg-category-content">
                <h2>Resolution Framework</h2>
                <p>Resolutions passed by the Sangguniang Bayan expressing the will or opinion of the legislative body on various matters.</p>
                <span className="leg-category-link">Browse Resolutions <i className="bi bi-arrow-right"></i></span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="leg-process">
        <div className="container">
          <div className="leg-process-header">
            <span className="leg-info-tag"><i className="bi bi-diagram-3-fill"></i> Process Flow</span>
            <h2>Flowchart for Legislative Proposal</h2>
            <p>Step-by-step process for enacting ordinances and resolutions</p>
          </div>

          <div className="leg-process-tabs">
            <button
              type="button"
              className={`leg-tab-btn ${activeTab === 'ordinances' ? 'active' : ''}`}
              onClick={() => setActiveTab('ordinances')}
            >
              <i className="bi bi-journal-bookmark-fill"></i>
              <span>For Ordinances</span>
              <small>11 Steps</small>
            </button>
            <button
              type="button"
              className={`leg-tab-btn ${activeTab === 'resolutions' ? 'active' : ''}`}
              onClick={() => setActiveTab('resolutions')}
            >
              <i className="bi bi-file-earmark-ruled-fill"></i>
              <span>For Resolutions</span>
              <small>6 Steps</small>
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
              <span className="leg-info-tag"><i className="bi bi-info-circle-fill"></i> About</span>
              <h2>Understanding Local Legislation</h2>
              <p>Learn about the legislative process of the Sangguniang Bayan</p>
            </div>
            <div className="leg-info-cards">
              <LegislativeInfoCard
                icon="bi bi-journal-bookmark"
                title="Ordinances"
                description="Local laws with permanent and general application that require compliance from residents and businesses within the municipality."
              />
              <LegislativeInfoCard
                icon="bi bi-file-earmark-text"
                title="Resolutions"
                description="Expressions of the legislative body's will or opinion on specific matters, often used for commendations, requests, or policy positions."
              />
              <LegislativeInfoCard
                icon="bi bi-people"
                title="Public Participation"
                description="Citizens can attend the Sangguniang Bayan sessions and participate in public hearings for proposed ordinances."
              />
              <LegislativeInfoCard
                icon="bi bi-shield-check"
                title="Transparency"
                description="All enacted ordinances and resolutions are made available to the public as part of our commitment to open governance."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
