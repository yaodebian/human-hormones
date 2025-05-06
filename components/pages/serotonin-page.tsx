'use client'

import React from 'react';
import { Header } from "@/components/common/header";
import { Footer } from "@/components/common/footer";
import {
  HormoneHeader,
  DetailSection,
  DetailGrid,
  FactCard,
  HighlightBox,
  TipsList,
  RelatedHormones,
  HormoneImage,
} from '@/components/common';
import { useLanguage } from '@/lib/i18n/language-context';
import { locales, LocaleText } from '@/lib/i18n/locales/serotonin';

export function SerotoninPage() {
  const { locale } = useLanguage();
  const text: LocaleText = locales[locale as keyof typeof locales] || locales['zh-CN'];

  // 将字符串数组转换为TipsList需要的格式
  const formatTipsItems = (items: string[]) => {
    return items.map(item => ({
      title: item,
    }));
  };

  // 将相关激素数据转换为RelatedHormones需要的格式
  const formatRelatedHormones = (hormones: Array<{ name: string; description: string; link: string; }>) => {
    return hormones.map((hormone, index) => ({
      id: `hormone-${index + 1}`,
      name: hormone.name,
      description: hormone.description,
      link: hormone.link,
      relation: hormone.description
    }));
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* 激素标题区域 */}
        <HormoneHeader
          title={text.page.header.title}
          description={text.page.header.description}
          icon="/images/hormones/serotonin.svg"
          color="serotonin"
        />

        {/* 定义与机制部分 */}
        <DetailSection title={text.page.sections.definition.title}>
          <DetailGrid>
            <div>
              <p className="mb-4">{text.page.sections.definition.content.p1}</p>
              <p className="mb-4">{text.page.sections.definition.content.p2}</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                {text.page.sections.definition.content.list.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className="mb-4">{text.page.sections.definition.content.p3}</p>
            </div>
            <div>
              <HormoneImage 
                src="/images/hormones/serotonin-pathway.svg" 
                alt={text.page.header.title} 
              />
            </div>
          </DetailGrid>
        </DetailSection>

        {/* 分泌时机部分 */}
        <DetailSection 
          title={text.page.sections.release.title}
          description={text.page.sections.release.description}
        >
          <DetailGrid cols={2}>
            <FactCard title={text.page.sections.release.factors.nutrition.title} color="serotonin">
              <p>{text.page.sections.release.factors.nutrition.content}</p>
            </FactCard>
            
            <FactCard title={text.page.sections.release.factors.light.title} color="serotonin">
              <p>{text.page.sections.release.factors.light.content}</p>
            </FactCard>
            
            <FactCard title={text.page.sections.release.factors.exercise.title} color="serotonin">
              <p>{text.page.sections.release.factors.exercise.content}</p>
            </FactCard>
            
            <FactCard title={text.page.sections.release.factors.sleep.title} color="serotonin">
              <p>{text.page.sections.release.factors.sleep.content}</p>
            </FactCard>
          </DetailGrid>
          
          <HighlightBox title={text.page.sections.release.circadian.title} color="serotonin" className="mt-8">
            <p className="mb-3">{text.page.sections.release.circadian.p1}</p>
            <p>{text.page.sections.release.circadian.p2}</p>
          </HighlightBox>
        </DetailSection>

        {/* 影响部分 */}
        <DetailSection title={text.page.sections.effects.title}>
          <DetailGrid>
            <div>
              <h3 className="text-xl font-semibold mb-4">{text.page.sections.effects.positive.title}</h3>
              <TipsList
                color="serotonin"
                items={formatTipsItems(text.page.sections.effects.positive.items)}
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">{text.page.sections.effects.imbalance.title}</h3>
              <TipsList
                color="serotonin"
                items={formatTipsItems(text.page.sections.effects.imbalance.items)}
              />
            </div>
          </DetailGrid>
        </DetailSection>

        {/* 提升血清素部分 */}
        <DetailSection title={text.page.sections.balance.title}>
          <DetailGrid>
            <div>
              <h3 className="text-xl font-semibold mb-4">{text.page.sections.balance.activities.title}</h3>
              <p className="mb-4">{text.page.sections.balance.activities.intro}</p>
              <TipsList
                color="serotonin"
                items={formatTipsItems(text.page.sections.balance.activities.items)}
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">{text.page.sections.balance.lifestyle.title}</h3>
              <TipsList
                color="serotonin"
                items={formatTipsItems(text.page.sections.balance.lifestyle.items)}
              />
            </div>
          </DetailGrid>
        </DetailSection>

        {/* 研究发现部分 */}
        <DetailSection title={text.page.sections.research.title}>
          <DetailGrid cols={2}>
            <FactCard title={text.page.sections.research.facts.mood.title} color="serotonin">
              <p>{text.page.sections.research.facts.mood.content}</p>
            </FactCard>
            
            <FactCard title={text.page.sections.research.facts.gut.title} color="serotonin">
              <p>{text.page.sections.research.facts.gut.content}</p>
            </FactCard>
          </DetailGrid>
          
          <HighlightBox title={text.page.sections.research.healthyBalance.title} color="serotonin" className="mt-8">
            <p className="mb-3">{text.page.sections.research.healthyBalance.intro}</p>
            <TipsList
              color="serotonin"
              items={formatTipsItems(text.page.sections.research.healthyBalance.strategies)}
            />
          </HighlightBox>
        </DetailSection>

        {/* 相关激素部分 */}
        <DetailSection title={text.page.sections.related.title}>
          <RelatedHormones
            items={formatRelatedHormones(text.page.sections.related.hormones)}
          />
        </DetailSection>
      </main>
      <Footer />
    </div>
  );
} 