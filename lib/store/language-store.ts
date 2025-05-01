import { create } from 'zustand'
import { supportedLocales, defaultLocale } from '@/middleware'
import type { Locale } from '@/lib/i18n/locales/home'
import { useRouter, usePathname } from 'next/navigation'

interface LanguageState {
  currentLocale: Locale
  setLocale: (locale: Locale) => void
}

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
      
      // 等待路由导航完成
      await router.push(newPath || '/')
      
      // 强制刷新页面以确保所有组件都获得新的语言状态
      router.refresh()
    } catch (error) {
      console.error('Failed to change language:', error)
    }
  }

  return {
    handleLocaleChange
  }
}

// 创建 Zustand store
export const useLanguageStore = create<LanguageState>((set) => ({
  currentLocale: defaultLocale as Locale,
  setLocale: (newLocale) => {
    if (supportedLocales.includes(newLocale)) {
      set({ currentLocale: newLocale })
    }
  },
})) 