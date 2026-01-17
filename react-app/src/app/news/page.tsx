'use client'

import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import NewsList from '@/components/news/NewsList'

export default function NewsPage() {
  const { t } = useLanguage()

  return (
    <>
      <div className="container">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">{t('nav-home')}</Link>
          <span>/</span>
          <span aria-current="page">News & Announcements</span>
        </nav>
      </div>

      <section className="page-header">
        <div className="container">
          <div className="page-header-content">
            <span className="page-header-badge"><i className="bi bi-newspaper"></i> News</span>
            <h1>News & Announcements</h1>
            <p className="page-header-desc">Stay updated with the latest news and announcements from the Municipality of Solano</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <NewsList />
        </div>
      </section>
    </>
  )
}
