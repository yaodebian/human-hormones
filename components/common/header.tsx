'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Container } from '@/components/ui/container'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import { useState } from 'react'
import { useLanguage } from '@/lib/i18n/language-context'
import { LanguageSwitcher } from '@/components/ui/language-switcher'
import { defaultLocale } from '@/middleware'

export const Header = () => {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const { locale, text } = useLanguage()
  
  // 从路径中提取语言和当前路由部分
  const pathParts = pathname.split('/').filter(Boolean)
  const currentLocale = locale || defaultLocale
  
  // 生成带有当前语言的链接
  const getLocalizedHref = (path: string) => {
    return currentLocale === defaultLocale 
      ? path 
      : `/${currentLocale}${path === '/' ? '' : path}`
  }
  
  const navLinks = [
    { href: '/', label: text.nav.home },
    { href: '/dopamine', label: text.nav.dopamine },
    { href: '/endorphin', label: text.nav.endorphin },
    { href: '/serotonin', label: text.nav.serotonin },
    { href: '/oxytocin', label: text.nav.oxytocin },
    { href: '/cortisol', label: text.nav.cortisol },
    { href: '/resources', label: text.nav.resources },
  ]
  
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container className="flex h-16 items-center justify-between">
        <Link href={getLocalizedHref('/')} className="flex items-center gap-2">
          <Image 
            src="/logo.svg" 
            alt={text.common.siteTitle} 
            width={36} 
            height={36} 
            className="h-9 w-9" 
          />
          <span className="text-lg font-semibold">{text.common.siteTitle}</span>
        </Link>
        
        {/* 桌面端导航 */}
        <nav className="hidden md:flex">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => {
              const localizedHref = getLocalizedHref(link.href)
              return (
              <li key={link.href}>
                <Link
                    href={localizedHref}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-foreground/80",
                      pathname === localizedHref ? "text-foreground" : "text-foreground/60"
                  )}
                >
                  {link.label}
                </Link>
              </li>
              )
            })}
          </ul>
        </nav>
        
        <div className="flex items-center gap-4">
          {/* 语言选择 */}
          <div className="hidden sm:block">
            <LanguageSwitcher />
          </div>
          
          {/* 移动端菜单按钮 */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <button 
                className="inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-muted"
                aria-label="打开菜单"
              >
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[240px] sm:w-[300px]">
              <div className="mt-6 flex flex-col gap-6">
                <nav>
                  <ul className="flex flex-col gap-4">
                    {navLinks.map((link) => {
                      const localizedHref = getLocalizedHref(link.href)
                      return (
                      <li key={link.href}>
                        <Link
                            href={localizedHref}
                          className={cn(
                            "text-base font-medium transition-colors hover:text-foreground/80",
                              pathname === localizedHref ? "text-foreground" : "text-foreground/60"
                          )}
                          onClick={() => setOpen(false)}
                        >
                          {link.label}
                        </Link>
                      </li>
                      )
                    })}
                  </ul>
                </nav>
                
                <div className="border-t pt-4">
                  <p className="text-sm text-muted-foreground mb-2">语言</p>
                  <LanguageSwitcher fullWidth />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  )
} 