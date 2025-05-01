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
  FoodGrid,
  ActivityGrid,
  RelatedHormones,
  HormoneImage,
  HormoneText
} from '@/components/common';
import { useLanguage } from '@/lib/i18n/language-context';
import { locales, LocaleText } from '@/lib/i18n/locales/dopamine';

export function DopaminePage() {
  const { locale } = useLanguage();
  // 获取当前语言的文本，如果未找到则使用中文作为默认值
  const text: LocaleText = locales[locale as keyof typeof locales] || locales['zh-CN'];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* 激素标题区域 */}
        <HormoneHeader
          title={text.page.header.title}
          description={text.page.header.description}
          icon="/images/hormones/dopamine.svg"
          color="dopamine"
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
                src="/images/hormones/dopamine-pathway.svg" 
                alt={text.page.header.title} 
              />
            </div>
          </DetailGrid>
        </DetailSection>

        {/* 何时分泌部分 */}
        <DetailSection 
          title={text.page.sections.release.title}
          description={text.page.sections.release.description}
        >
          <DetailGrid cols={2}>
            <FactCard title={text.page.sections.release.factors.anticipation.title} color="dopamine">
              <p>{text.page.sections.release.factors.anticipation.content}</p>
            </FactCard>
            
            <FactCard title={text.page.sections.release.factors.novelty.title} color="dopamine">
              <p>{text.page.sections.release.factors.novelty.content}</p>
            </FactCard>
            
            <FactCard title={text.page.sections.release.factors.achievement.title} color="dopamine">
              <p>{text.page.sections.release.factors.achievement.content}</p>
            </FactCard>
            
            <FactCard title={text.page.sections.release.factors.pleasure.title} color="dopamine">
              <p>{text.page.sections.release.factors.pleasure.content}</p>
            </FactCard>
          </DetailGrid>
          
          <HighlightBox title={text.page.sections.release.addiction.title} color="dopamine" className="mt-8">
            <p className="mb-3">{text.page.sections.release.addiction.p1}</p>
            <p>{text.page.sections.release.addiction.p2}</p>
          </HighlightBox>
        </DetailSection>

        {/* 影响部分 */}
        <DetailSection title={text.page.sections.effects.title}>
          <DetailGrid>
            <div>
              <h3 className="text-xl font-semibold mb-4">{text.page.sections.effects.positive.title}</h3>
              <TipsList
                color="dopamine"
                items={text.page.sections.effects.positive.items}
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">{text.page.sections.effects.imbalance.title}</h3>
              <TipsList
                color="dopamine"
                items={text.page.sections.effects.imbalance.items}
              />
            </div>
          </DetailGrid>
        </DetailSection>

        {/* 食物和活动部分 */}
        <DetailSection title={text.page.sections.balance.title}>
          <DetailGrid>
            <div>
              <h3 className="text-xl font-semibold mb-4">{text.page.sections.balance.foods.title}</h3>
              <p className="mb-4">{text.page.sections.balance.foods.intro}</p>
              
              <FoodGrid 
                items={text.page.sections.balance.foods.items}
              />
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">{text.page.sections.balance.activities.title}</h3>
              <TipsList
                color="dopamine"
                items={text.page.sections.balance.activities.items}
              />
            </div>
          </DetailGrid>
        </DetailSection>

        {/* 研究与平衡部分 */}
        <DetailSection title={text.page.sections.research.title}>
          <DetailGrid cols={2}>
            <FactCard title={text.page.sections.research.facts.reward.title} color="dopamine">
              <p>{text.page.sections.research.facts.reward.content}</p>
            </FactCard>
            
            <FactCard title={text.page.sections.research.facts.technology.title} color="dopamine">
              <p>{text.page.sections.research.facts.technology.content}</p>
            </FactCard>
          </DetailGrid>
          
          <HighlightBox title={text.page.sections.research.healthyBalance.title} color="dopamine" className="mt-8">
            <p className="mb-3">{text.page.sections.research.healthyBalance.intro}</p>
            <TipsList
              color="dopamine"
              items={text.page.sections.research.healthyBalance.strategies}
            />
          </HighlightBox>
        </DetailSection>

        {/* 相关激素部分 */}
        <DetailSection title={text.page.sections.related.title}>
          <RelatedHormones
            title={text.page.sections.related.title}
            items={text.page.sections.related.hormones}
          />
        </DetailSection>
      </main>
      <Footer />
    </div>
  );
} 