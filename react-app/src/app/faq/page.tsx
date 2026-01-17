'use client'

import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import { faqData } from '@/data/faq'
import FAQCategoryHeader from '@/components/faq/FAQCategoryHeader'
import FAQItem from '@/components/faq/FAQItem'
import FAQContactCTA from '@/components/faq/FAQContactCTA'

export default function FAQPage() {
  const { t } = useLanguage()

  return (
    <>
      <link rel="stylesheet" href="/assets/css/accessibility.css" />

      <div className="container">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <span aria-current="page">FAQ</span>
        </nav>
      </div>

      <section className="page-header">
        <div className="container">
          <div className="page-header-content">
            <span className="page-header-badge"><i className="bi bi-question-circle-fill"></i> FAQ</span>
            <h1>{t('faq-title') || 'Frequently Asked Questions'}</h1>
            <p className="page-header-desc">{t('faq-subtitle') || 'Find answers to common questions about municipal services'}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="faq-container">
            {faqData.map((category) => (
              <div key={category.id} className="faq-category">
                <FAQCategoryHeader
                  icon={category.icon}
                  title={category.title}
                  titleKey={category.titleKey}
                />
                <div className="faq-list">
                  {category.items.map((item, idx) => (
                    <FAQItem
                      key={`${category.id}-${idx}`}
                      question={item.question}
                      answer={item.answer}
                    />
                  ))}
                </div>
              </div>
            ))}

            <FAQContactCTA />
          </div>
        </div>
      </section>
    </>
  )
}
