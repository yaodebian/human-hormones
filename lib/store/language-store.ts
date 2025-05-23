'use client'

import { supportedLocales, defaultLocale } from '@/middleware'
import type { Locale } from '@/lib/i18n/locales/home'
import { useRouter, usePathname } from 'next/navigation'

// 创建一个自定义 hook 来处理语言切换和路由
export const useLanguageSwitcher = () => {
  const router = useRouter()
  const pathname = usePathname()

  const handleLocaleChange = async (newLocale: Locale) => {
    if (!supportedLocales.includes(newLocale)) return

    try {
      // 获取当前路径并移除语言前缀（如果存在）
      const pathSegments = pathname.split('/').filter(Boolean)
      if (supportedLocales.includes(pathSegments[0])) {
        pathSegments.shift()
      }
      
      // 构建新的 URL
      const newPath = newLocale === defaultLocale
        ? `/${pathSegments.join('/')}`
        : `/${newLocale}/${pathSegments.join('/')}`

      // 设置 cookie
      document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`
      
      // 导航到新路径，不需要强制刷新
      await router.push(newPath || '/')

      router.refresh()
    } catch (error) {
      console.error('Failed to change language:', error)
    }
  }

  return {
    handleLocaleChange
  }
}