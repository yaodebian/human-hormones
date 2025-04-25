'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { useLanguage } from '@/lib/i18n/language-context'

// Hormone IDs with color scheme
const hormoneStyles = {
  dopamine: {
    borderColor: 'border-blue-500/50',
    iconBg: 'bg-blue-50 dark:bg-blue-950/30',
  },
  endorphin: {
    borderColor: 'border-orange-500/50',
    iconBg: 'bg-orange-50 dark:bg-orange-950/30',
  },
  serotonin: {
    borderColor: 'border-green-500/50',
    iconBg: 'bg-green-50 dark:bg-green-950/30',
  },
  oxytocin: {
    borderColor: 'border-pink-500/50',
    iconBg: 'bg-pink-50 dark:bg-pink-950/30',
  },
  cortisol: {
    borderColor: 'border-purple-500/50',
    iconBg: 'bg-purple-50 dark:bg-purple-950/30',
  },
}

export const HormoneCardsSection = () => {
  const { text } = useLanguage()
  
  // 对应的激素ID数组
  const hormoneIds = ['dopamine', 'endorphin', 'serotonin', 'oxytocin', 'cortisol'] as const
  
  return (
    <section className="py-12 md:py-16" id="hormone-cards">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12 px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
            {text.home.hormoneCards.title}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            {text.home.hormoneCards.description}
          </p>
        </div>

        <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {hormoneIds.map((id) => (
            <div 
              key={id}
              className={`bg-card rounded-lg shadow-sm overflow-hidden border ${hormoneStyles[id].borderColor} transition-all hover:shadow-md`}
            >
              <div className="p-4 md:p-6 flex flex-col items-center text-center h-full">
                <div className={`w-14 h-14 md:w-16 md:h-16 rounded-full ${hormoneStyles[id].iconBg} flex items-center justify-center mb-3 md:mb-4`}>
                  <Image 
                    src={`/${id}.svg`} 
                    alt={text.home.hormoneCards.hormones[id].name}
                    width={40} 
                    height={40}
                    className="h-8 w-8 md:h-10 md:w-10" 
                  />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">
                  {text.home.hormoneCards.hormones[id].name}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground mb-4 flex-grow">
                  {text.home.hormoneCards.hormones[id].description}
                </p>
                <Button asChild variant="outline" className="w-full sm:w-auto mt-auto">
                  <Link href={`/${id}`}>{text.home.hormoneCards.learnMore}</Link>
                </Button>
              </div>
            </div>
          ))}
          
          {/* Resources Card */}
          <div className="bg-card rounded-lg shadow-sm overflow-hidden border border-border/50 transition-all hover:shadow-md">
            <div className="p-4 md:p-6 flex flex-col items-center text-center h-full">
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">
                {text.home.hormoneCards.resources.title}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground mb-4 flex-grow">
                {text.home.hormoneCards.resources.description}
              </p>
              <Button asChild className="w-full sm:w-auto mt-auto">
                <Link href="/resources">{text.home.hormoneCards.resources.browseButton}</Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
} 