'use client'

import Link from 'next/link'
import { Container } from '@/components/ui/container'
import { useLanguage } from '@/lib/i18n/language-context'

export const Footer = () => {
  const { text } = useLanguage()
  
  return (
    <footer className="border-t bg-muted/40">
      <Container className="py-8 md:py-12">
        <div className="grid gap-8 grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <h4 className="mb-3 md:mb-4 text-base md:text-lg font-semibold">{text.common.siteTitle}</h4>
            <p className="text-xs md:text-sm text-muted-foreground">
              {text.footer.description}
            </p>
          </div>
          
          <div>
            <h4 className="mb-3 md:mb-4 text-base md:text-lg font-semibold">{text.nav.home}</h4>
            <ul className="space-y-1 md:space-y-2 text-xs md:text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  {text.nav.home}
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-muted-foreground hover:text-foreground transition-colors">
                  {text.nav.resources}
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                  {text.nav.about}
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  {text.nav.contact}
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-2 md:col-span-1 lg:col-span-1">
            <h4 className="mb-3 md:mb-4 text-base md:text-lg font-semibold">{text.nav.dopamine}</h4>
            <ul className="grid grid-cols-2 md:grid-cols-1 gap-x-4 gap-y-1 md:space-y-2 text-xs md:text-sm">
              <li>
                <Link href="/dopamine" className="text-muted-foreground hover:text-foreground transition-colors">
                  {text.nav.dopamine}
                </Link>
              </li>
              <li>
                <Link href="/endorphin" className="text-muted-foreground hover:text-foreground transition-colors">
                  {text.nav.endorphin}
                </Link>
              </li>
              <li>
                <Link href="/serotonin" className="text-muted-foreground hover:text-foreground transition-colors">
                  {text.nav.serotonin}
                </Link>
              </li>
              <li>
                <Link href="/oxytocin" className="text-muted-foreground hover:text-foreground transition-colors">
                  {text.nav.oxytocin}
                </Link>
              </li>
              <li>
                <Link href="/cortisol" className="text-muted-foreground hover:text-foreground transition-colors">
                  {text.nav.cortisol}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-3 md:mb-4 text-base md:text-lg font-semibold">语言</h4>
            <ul className="space-y-1 md:space-y-2 text-xs md:text-sm">
              {Object.entries(text.languages).map(([code, name]) => (
                <li key={code}>
                  <span className={code === 'zh-CN' ? "text-foreground" : "text-muted-foreground"}>
                    {name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-6 md:mt-8 border-t pt-4 md:pt-6">
          <p className="text-center text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {text.footer.copyright}
          </p>
        </div>
      </Container>
    </footer>
  )
} 