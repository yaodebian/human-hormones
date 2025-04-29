'use client'

import { ReactNode, createContext, useContext, useState } from 'react'
import { Locale, LocaleText, locales } from './locales/home'
import { useRouter } from 'next/navigation'
import { defaultLocale } from '@/middleware'

type LanguageContextType = {
  locale: Locale
  text: LocaleText
  changeLocale: (locale: Locale) => void
}

const LanguageContext = createContext<LanguageContextType>({
  locale: defaultLocale,
  text: locales[defaultLocale],
  changeLocale: () => {}
})

export const LanguageProvider = ({ 
  children, 
  locale: initialLocale 
}: { 
  children: ReactNode, 
  locale?: string 
}) => {
  const router = useRouter()
  const [locale, setLocale] = useState<Locale>(
    initialLocale && Object.keys(locales).includes(initialLocale) 
      ? initialLocale as Locale 
      : defaultLocale
  )
  const [text, setText] = useState<LocaleText>(locales[
    initialLocale && Object.keys(locales).includes(initialLocale) 
      ? initialLocale as Locale 
      : defaultLocale
  ])

  const changeLocale = (newLocale: Locale) => {
    if (newLocale in locales) {
      // 保存语言到 localStorage
      localStorage.setItem('NEXT_LOCALE', newLocale)
      
      // 保存语言到 Cookie，设置 path=/ 使其在所有路径下可用
      document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000` // 一年有效期
      
      setLocale(newLocale)
      setText(locales[newLocale])
      
      // 根据新语言重定向到相应的URL
      if (typeof window !== 'undefined') {
        const currentPath = window.location.pathname.split('/').filter(Boolean)
        
        // 移除URL中的语言部分（如果存在）
        if (Object.keys(locales).includes(currentPath[0])) {
          currentPath.shift()
        }
        
        // 构建新的URL
        const newPath = newLocale === defaultLocale
          ? `/${currentPath.join('/')}`
          : `/${newLocale}/${currentPath.join('/')}`
          
        router.push(newPath || '/')
      }
    }
  }

  return (
    <LanguageContext.Provider value={{ locale, text, changeLocale }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext) 