'use client'

import { Header } from "@/components/common/header";
import { Footer } from "@/components/common/footer";
import { HeroSection } from "@/components/home/hero-section";
import { IntroductionSection } from "@/components/home/introduction-section";
import { HormoneCardsSection } from "@/components/home/hormone-cards-section";
import { KeyFactsSection } from "@/components/home/key-facts-section";

export function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <IntroductionSection />
        <HormoneCardsSection />
        <KeyFactsSection />
      </main>
      <Footer />
    </div>
  );
} 