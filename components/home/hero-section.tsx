'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Container } from '@/components/ui/container'
import { useLanguage } from '@/lib/i18n/language-context'

export const HeroSection = () => {
  const { text } = useLanguage()
  
  return (
    <section className="py-12 md:py-24">
      <Container>
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div className="space-y-5 text-center md:text-left order-2 md:order-1">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight">
              {text.home.hero.title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-md mx-auto md:mx-0">
              {text.home.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center md:justify-start">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="#hormone-cards">{text.home.hero.exploreButton}</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <Link href="/resources">{text.home.hero.resourcesButton}</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-[200px] xs:h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] order-1 md:order-2">
            <Image
              src="/brain.svg"
              alt="brain illustration"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  )
} 