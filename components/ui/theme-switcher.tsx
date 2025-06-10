'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'

export function ThemeSwitcher() {
  const { setTheme, theme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // 防止水合不匹配
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="outline" size="icon" className="w-9 h-9">
        <Sun className="h-4 w-4" />
        <span className="sr-only">切换主题</span>
      </Button>
    )
  }

  const handleToggle = () => {
    // 如果当前是系统主题，根据系统实际主题切换到相反的主题
    if (theme === 'system') {
      setTheme(systemTheme === 'dark' ? 'light' : 'dark')
    } else {
      // 在light和dark之间切换
      setTheme(theme === 'dark' ? 'light' : 'dark')
    }
  }

  // 确定当前显示的主题
  const currentTheme = theme === 'system' ? systemTheme : theme
  const isDark = currentTheme === 'dark'

  return (
    <Button 
      variant="outline" 
      size="icon" 
      className="w-9 h-9" 
      onClick={handleToggle}
      title={isDark ? '切换到浅色模式' : '切换到暗色模式'}
    >
      <Sun className={`h-4 w-4 transition-all ${isDark ? 'rotate-90 scale-0' : 'rotate-0 scale-100'}`} />
      <Moon className={`absolute h-4 w-4 transition-all ${isDark ? 'rotate-0 scale-100' : '-rotate-90 scale-0'}`} />
      <span className="sr-only">切换主题</span>
    </Button>
  )
} 