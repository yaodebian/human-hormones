'use client'

import { ReactNode, createContext, useContext } from 'react'
import { Locale, LocaleText, locales } from './locales/home'
import { defaultLocale } from '@/middleware'
import { useLanguageSwitcher } from '@/lib/store/language-store'
import React from 'react'

type LanguageContextType = {
  locale: Locale
  text: LocaleText
  changeLocale: (locale: Locale) => void
}

const LanguageContext = createContext<LanguageContextType>({
  locale: defaultLocale as Locale,
  text: locales[defaultLocale as Locale],
  changeLocale: () => {}
})

export const LanguageProvider = ({ 
  children, 
  locale: initialLocale 
}: { 
  children: ReactNode, 
  locale?: string 
}) => {
  const { handleLocaleChange } = useLanguageSwitcher()

  const handleChange = async (newLocale: Locale) => {
    // 然后处理路由和 cookie
    await handleLocaleChange(newLocale)
  }

  return (
    <LanguageContext.Provider value={{ 
      locale: initialLocale as Locale, 
      text: locales[initialLocale as Locale], 
      changeLocale: handleChange 
    }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext) 