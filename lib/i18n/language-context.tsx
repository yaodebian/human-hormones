'use client'

import { ReactNode, createContext, useContext, useEffect, useState } from 'react'
import { Locale, LocaleText, locales } from './locales/home'
import { defaultLocale, supportedLocales } from '@/middleware'
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

  // // 监听路由变化并更新语言状态
  // const useLanguageRouteSync = () => {
  //   const pathname = usePathname()
  //   const { setLocale } = useLanguageStore()
    
  //   useEffect(() => {
  //     // 从URL路径中提取语言代码
  //     const pathSegments = pathname.split('/').filter(Boolean)
  //     if (pathSegments.length > 0) {
  //       const possibleLocale = pathSegments[0] as Locale
        
  //       // 检查是否为支持的语言
  //       if (supportedLocales.includes(possibleLocale)) {  
  //         setLocale(possibleLocale)
  //       } else {
  //         // 如果URL中没有有效的语言代码，则设置为默认语言
  //         setLocale(defaultLocale as Locale)
  //       }
  //     } else {
  //       // 根路径使用默认语言
  //       setLocale(defaultLocale as Locale)
  //     }
  //   }, [pathname, setLocale])
  // }

  // useLanguageRouteSync()

  const handleChange = async (newLocale: Locale) => {
    // 先更新 store 中的状态
    setLocale(newLocale)
    // 然后处理路由和 cookie
    await handleLocaleChange(newLocale)
  }

  
  // 使用服务端传递的初始语言，确保首次渲染就是正确的语言
  // const effectiveLocale = initialLocale as Locale || currentLocale


  console.log('initialLocale', initialLocale)
  
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