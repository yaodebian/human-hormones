'use client'

import { ReactNode, createContext, useContext, useEffect, useState } from 'react'
import { Locale, LocaleText, locales } from './locales/home'
import { defaultLocale } from '@/middleware'
import { useLanguageStore, useLanguageSwitcher } from '@/lib/store/language-store'

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
  const { currentLocale, setLocale } = useLanguageStore()
  const { handleLocaleChange } = useLanguageSwitcher()
  const [isInitialized, setIsInitialized] = useState(false)
  
  // 初始化 store 中的语言，确保服务端和客户端一致
  useEffect(() => {
    if (initialLocale && (initialLocale !== currentLocale || !isInitialized)) {
      setLocale(initialLocale as Locale)
      setIsInitialized(true)
    }
  }, [initialLocale, currentLocale, setLocale, isInitialized])

  const handleChange = async (newLocale: Locale) => {
    // 先更新 store 中的状态
    setLocale(newLocale)
    // 然后处理路由和 cookie
    await handleLocaleChange(newLocale)
  }

  // 使用服务端传递的初始语言，确保首次渲染就是正确的语言
  const effectiveLocale = initialLocale as Locale || currentLocale
  
  return (
    <LanguageContext.Provider value={{ 
      locale: effectiveLocale, 
      text: locales[effectiveLocale], 
      changeLocale: handleChange 
    }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext) 