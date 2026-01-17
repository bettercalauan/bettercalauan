'use client'

import { useLanguage } from '@/contexts/LanguageContext'

interface FAQCategoryHeaderProps {
  icon: string
  title: string
  titleKey: string
}

export default function FAQCategoryHeader({ icon, title, titleKey }: FAQCategoryHeaderProps) {
  const { t } = useLanguage()

  return (
    <div className="faq-category-header">
      <i className={`bi ${icon}`}></i>
      <h2>{t(titleKey) || title}</h2>
    </div>
  )
}
