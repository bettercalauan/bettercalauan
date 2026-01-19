'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { translations } from '@/data/translations'

type Language = 'en' | 'fil' | 'ilo'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en')

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem('bettercalauan_lang') as Language
      if (savedLang && ['en', 'fil', 'ilo'].includes(savedLang)) {
        setLanguageState(savedLang)
      }
    } catch {
      // Silent fallback on localStorage error
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    try {
      localStorage.setItem('bettercalauan_lang', lang)
    } catch {
      // Silent fallback on localStorage error
    }
  }

  const t = (key: string): string => {
    return translations[language]?.[key] || translations['en']?.[key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
