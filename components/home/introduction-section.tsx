'use client'

import { Container } from '@/components/ui/container'
import { useLanguage } from '@/lib/i18n/language-context'

export const IntroductionSection = () => {
  const { text } = useLanguage()
  
  return (
    <section className="py-12 md:py-16 bg-muted/30" id="introduction">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12 px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
            {text.home.introduction.title}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            {text.home.introduction.description}
          </p>
        </div>
        
        <div className="grid gap-4 md:gap-6 md:grid-cols-2">
          <div className="bg-card rounded-lg shadow-sm p-5 md:p-6 border border-border/50">
            <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">
              {text.home.introduction.card1.title}
            </h3>
            <p className="text-sm md:text-base text-muted-foreground">
              {text.home.introduction.card1.description}
            </p>
          </div>
          
          <div className="bg-card rounded-lg shadow-sm p-5 md:p-6 border border-border/50">
            <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">
              {text.home.introduction.card2.title}
            </h3>
            <p className="text-sm md:text-base text-muted-foreground">
              {text.home.introduction.card2.description}
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
} 