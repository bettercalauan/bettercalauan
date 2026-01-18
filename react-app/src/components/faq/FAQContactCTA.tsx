'use client'

import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

export default function FAQContactCTA() {
  const { t } = useLanguage()

  return (
    <div className="faq-cta">
      <i className="bi bi-chat-dots-fill"></i>
      <div className="faq-cta-content">
        <h3>{t('faq-still-questions') || 'Still have questions?'}</h3>
        <p>{t('faq-contact-help') || "If you didn't find the answer you were looking for, please don't hesitate to contact us."}</p>
      </div>
      <Link href="/contact" className="btn btn-primary">Contact Us</Link>
    </div>
  )
}
