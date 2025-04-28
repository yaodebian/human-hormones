'use client'

import { ReactNode, createContext, useContext, useEffect, useState } from 'react'
import { Locale, LocaleText, locales } from './locales/home'

type LanguageContextType = {
  locale: Locale
  text: LocaleText
  changeLocale: (locale: Locale) => void
}

const defaultLocale: Locale = 'zh-CN'

const LanguageContext = createContext<LanguageContextType>({
  locale: defaultLocale,
  text: locales[defaultLocale],
  changeLocale: () => {}
})

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<Locale>(defaultLocale)
  const [text, setText] = useState<LocaleText>(locales[defaultLocale])

  // 从localStorage中获取保存的语言设置或默认设置
  useEffect(() => {
    const savedLocale = localStorage.getItem('locale') as Locale | null
    if (savedLocale && Object.keys(locales).includes(savedLocale)) {
      setLocale(savedLocale)
      setText(locales[savedLocale])
    } else {
      // 尝试从浏览器获取语言偏好
      const browserLocale = navigator.language.split('-')[0] + '-' + navigator.language.split('-')[1]?.toUpperCase()
      
      // 检查是否支持浏览器语言，如果支持则使用，否则使用默认语言
      if (browserLocale in locales) {
        setLocale(browserLocale as Locale)
        setText(locales[browserLocale as Locale])
        localStorage.setItem('locale', browserLocale)
      }
    }
  }, [])

  const changeLocale = (newLocale: Locale) => {
    if (newLocale in locales) {
      setLocale(newLocale)
      setText(locales[newLocale])
      localStorage.setItem('locale', newLocale)
      // 更新HTML的lang属性
      document.documentElement.lang = newLocale
    }
  }

  return (
    <LanguageContext.Provider value={{ locale, text, changeLocale }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext) 