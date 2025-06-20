'use client'

import React, { useState } from 'react';
import { Header } from "@/components/common/header";
import { Footer } from "@/components/common/footer";
import { useLanguage } from '@/lib/i18n/language-context';
import { locales } from '@/lib/i18n/locales/resources';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { Container } from '@/components/ui/container';
import { ResourceList } from '@/components/ui/resource-list';
import { researchResources, articleResources, videoResources, bookResources } from '@/lib/data/resources';
import { HormoneType } from '@/lib/types/resources';

export function ResourcesPage() {
  const { locale } = useLanguage();
  const text = locales[locale as keyof typeof locales] || locales['zh-CN'];
  const [activeTab, setActiveTab] = useState<'articles' | 'videos' | 'research' | 'books'>('research');
  const [hormoneFilter, setHormoneFilter] = useState('all');
  const [durationFilter, setDurationFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* 资源库头部 */}
        <section className="bg-muted/30 py-8 md:py-12 text-center">
          <Container>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {text.page.header.title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              {text.page.header.subtitle}
            </p>
          </Container>
        </section>

        {/* 标签切换 */}
        <Container>
          <div className="flex justify-center mt-8 md:mt-12 mb-6 md:mb-8 border-b border-border">
            <button
              className={cn(
                "px-4 md:px-6 py-3 md:py-4 text-sm md:text-base font-semibold border-b-2 transition-colors",
                activeTab === 'articles'
                  ? "text-primary border-primary"
                  : "text-muted-foreground border-transparent hover:text-primary"
              )}
              onClick={() => setActiveTab('articles')}
            >
              {text.page.tabs.articles}
            </button>
            <button
              className={cn(
                "px-4 md:px-6 py-3 md:py-4 text-sm md:text-base font-semibold border-b-2 transition-colors",
                activeTab === 'videos'
                  ? "text-primary border-primary"
                  : "text-muted-foreground border-transparent hover:text-primary"
              )}
              onClick={() => setActiveTab('videos')}
            >
              {text.page.tabs.videos}
            </button>
            <button
              className={cn(
                "px-4 md:px-6 py-3 md:py-4 text-sm md:text-base font-semibold border-b-2 transition-colors",
                activeTab === 'research'
                  ? "text-primary border-primary"
                  : "text-muted-foreground border-transparent hover:text-primary"
              )}
              onClick={() => setActiveTab('research')}
            >
              {text.page.tabs.research}
            </button>
            <button
              className={cn(
                "px-4 md:px-6 py-3 md:py-4 text-sm md:text-base font-semibold border-b-2 transition-colors",
                activeTab === 'books'
                  ? "text-primary border-primary"
                  : "text-muted-foreground border-transparent hover:text-primary"
              )}
              onClick={() => setActiveTab('books')}
            >
              {text.page.tabs.books}
            </button>
          </div>
        </Container>

        {/* 文章部分 */}
        <section className={cn("py-6 md:py-8", activeTab === 'articles' ? 'block' : 'hidden')}>
          <Container>
            {/* 筛选器 */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 md:mb-8">
              <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
                <Select value={hormoneFilter} onValueChange={setHormoneFilter}>
                  <SelectTrigger className="w-full md:w-[200px]">
                    <SelectValue placeholder={text.page.filters.hormone.all} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">{text.page.filters.hormone.all}</SelectItem>
                    <SelectItem value="dopamine">{text.page.filters.hormone.dopamine}</SelectItem>
                    <SelectItem value="endorphin">{text.page.filters.hormone.endorphin}</SelectItem>
                    <SelectItem value="serotonin">{text.page.filters.hormone.serotonin}</SelectItem>
                    <SelectItem value="oxytocin">{text.page.filters.hormone.oxytocin}</SelectItem>
                    <SelectItem value="cortisol">{text.page.filters.hormone.cortisol}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Input
                type="text"
                placeholder={text.page.search.articles}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full md:w-[300px]"
              />
            </div>

            {/* 资源列表 */}
            <ResourceList 
              resources={articleResources}
              hormoneFilter={hormoneFilter}
              searchQuery={searchQuery}
              className="mb-6 md:mb-8"
            />
            
            {/* 空状态 - 仅在没有匹配结果时显示 */}
            {(!articleResources.length || 
              !articleResources.filter(resource => {
                const hormoneMatch = hormoneFilter === 'all' || 
                  (resource.tags && resource.tags.includes(hormoneFilter as HormoneType));
                const searchMatch = !searchQuery || 
                  Object.values(resource.title).some(title => 
                    title.toLowerCase().includes(searchQuery.toLowerCase())
                  ) ||
                  Object.values(resource.description).some(desc => 
                    desc.toLowerCase().includes(searchQuery.toLowerCase())
                  );
                return hormoneMatch && searchMatch;
              }).length) && (
              <div className="text-center py-8 md:py-12 bg-card border border-border rounded-lg mb-6 md:mb-8 px-4">
                <div className="text-4xl md:text-5xl mb-4">{text.page.emptyState.articles.icon}</div>
                <h3 className="text-xl md:text-2xl font-semibold text-card-foreground mb-4">
                  {text.page.emptyState.articles.title}
                </h3>
                <p className="text-muted-foreground max-w-lg mx-auto">
                  {text.page.emptyState.articles.description}
                </p>
              </div>
            )}
          </Container>
        </section>

        {/* 视频部分 */}
        <section className={cn("py-6 md:py-8", activeTab === 'videos' ? 'block' : 'hidden')}>
          <Container>
            {/* 筛选器 */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 md:mb-8">
              <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
                <Select value={hormoneFilter} onValueChange={setHormoneFilter}>
                  <SelectTrigger className="w-full md:w-[200px]">
                    <SelectValue placeholder={text.page.filters.hormone.all} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">{text.page.filters.hormone.all}</SelectItem>
                    <SelectItem value="dopamine">{text.page.filters.hormone.dopamine}</SelectItem>
                    <SelectItem value="endorphin">{text.page.filters.hormone.endorphin}</SelectItem>
                    <SelectItem value="serotonin">{text.page.filters.hormone.serotonin}</SelectItem>
                    <SelectItem value="oxytocin">{text.page.filters.hormone.oxytocin}</SelectItem>
                    <SelectItem value="cortisol">{text.page.filters.hormone.cortisol}</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={durationFilter} onValueChange={setDurationFilter}>
                  <SelectTrigger className="w-full md:w-[200px]">
                    <SelectValue placeholder={text.page.filters.duration.all} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">{text.page.filters.duration.all}</SelectItem>
                    <SelectItem value="short">{text.page.filters.duration.short}</SelectItem>
                    <SelectItem value="medium">{text.page.filters.duration.medium}</SelectItem>
                    <SelectItem value="long">{text.page.filters.duration.long}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Input
                type="text"
                placeholder={text.page.search.videos}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full md:w-[300px]"
              />
            </div>

            {/* 资源列表 */}
            <ResourceList 
              resources={videoResources}
              hormoneFilter={hormoneFilter}
              searchQuery={searchQuery}
              className="mb-6 md:mb-8"
            />
            
            {/* 空状态 - 仅在没有匹配结果时显示 */}
            {(!videoResources.length || 
              !videoResources.filter(resource => {
                const hormoneMatch = hormoneFilter === 'all' || 
                  (resource.tags && resource.tags.includes(hormoneFilter as HormoneType));
                const searchMatch = !searchQuery || 
                  Object.values(resource.title).some(title => 
                    title.toLowerCase().includes(searchQuery.toLowerCase())
                  ) ||
                  Object.values(resource.description).some(desc => 
                    desc.toLowerCase().includes(searchQuery.toLowerCase())
                  );
                return hormoneMatch && searchMatch;
              }).length) && (
              <div className="text-center py-8 md:py-12 bg-card border border-border rounded-lg mb-6 md:mb-8 px-4">
                <div className="text-4xl md:text-5xl mb-4">{text.page.emptyState.videos.icon}</div>
                <h3 className="text-xl md:text-2xl font-semibold text-card-foreground mb-4">
                  {text.page.emptyState.videos.title}
                </h3>
                <p className="text-muted-foreground max-w-lg mx-auto">
                  {text.page.emptyState.videos.description}
                </p>
              </div>
            )}
          </Container>
        </section>

        {/* 研究报告部分 */}
        <section className={cn("py-6 md:py-8", activeTab === 'research' ? 'block' : 'hidden')}>
          <Container>
            {/* 筛选器 */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 md:mb-8">
              <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
                <Select value={hormoneFilter} onValueChange={setHormoneFilter}>
                  <SelectTrigger className="w-full md:w-[200px]">
                    <SelectValue placeholder={text.page.filters.hormone.all} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">{text.page.filters.hormone.all}</SelectItem>
                    <SelectItem value="dopamine">{text.page.filters.hormone.dopamine}</SelectItem>
                    <SelectItem value="endorphin">{text.page.filters.hormone.endorphin}</SelectItem>
                    <SelectItem value="serotonin">{text.page.filters.hormone.serotonin}</SelectItem>
                    <SelectItem value="oxytocin">{text.page.filters.hormone.oxytocin}</SelectItem>
                    <SelectItem value="cortisol">{text.page.filters.hormone.cortisol}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Input
                type="text"
                placeholder={text.page.search.research}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full md:w-[300px]"
              />
            </div>

            {/* 资源列表 */}
            <ResourceList 
              resources={researchResources}
              hormoneFilter={hormoneFilter}
              searchQuery={searchQuery}
              className="mb-6 md:mb-8"
            />
            
            {/* 空状态 - 仅在没有匹配结果时显示 */}
            {(!researchResources.length || 
              !researchResources.filter(resource => {
                const hormoneMatch = hormoneFilter === 'all' || 
                  (resource.tags && resource.tags.includes(hormoneFilter as HormoneType));
                const searchMatch = !searchQuery || 
                  Object.values(resource.title).some(title => 
                    title.toLowerCase().includes(searchQuery.toLowerCase())
                  ) ||
                  Object.values(resource.description).some(desc => 
                    desc.toLowerCase().includes(searchQuery.toLowerCase())
                  );
                return hormoneMatch && searchMatch;
              }).length) && (
              <div className="text-center py-8 md:py-12 bg-card border border-border rounded-lg mb-6 md:mb-8 px-4">
                <div className="text-4xl md:text-5xl mb-4">{text.page.emptyState.research.icon}</div>
                <h3 className="text-xl md:text-2xl font-semibold text-card-foreground mb-4">
                  {text.page.emptyState.research.title}
                </h3>
                <p className="text-muted-foreground max-w-lg mx-auto">
                  {text.page.emptyState.research.description}
                </p>
              </div>
            )}
          </Container>
        </section>

        {/* 书籍部分 */}
        <section className={cn("py-6 md:py-8", activeTab === 'books' ? 'block' : 'hidden')}>
          <Container>
            {/* 筛选器 */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 md:mb-8">
              <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
                <Select value={hormoneFilter} onValueChange={setHormoneFilter}>
                  <SelectTrigger className="w-full md:w-[200px]">
                    <SelectValue placeholder={text.page.filters.hormone.all} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">{text.page.filters.hormone.all}</SelectItem>
                    <SelectItem value="dopamine">{text.page.filters.hormone.dopamine}</SelectItem>
                    <SelectItem value="endorphin">{text.page.filters.hormone.endorphin}</SelectItem>
                    <SelectItem value="serotonin">{text.page.filters.hormone.serotonin}</SelectItem>
                    <SelectItem value="oxytocin">{text.page.filters.hormone.oxytocin}</SelectItem>
                    <SelectItem value="cortisol">{text.page.filters.hormone.cortisol}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Input
                type="text"
                placeholder={text.page.search.books}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full md:w-[300px]"
              />
            </div>

            {/* 资源列表 */}
            <ResourceList 
              resources={bookResources}
              hormoneFilter={hormoneFilter}
              searchQuery={searchQuery}
              className="mb-6 md:mb-8"
            />
            
            {/* 空状态 - 仅在没有匹配结果时显示 */}
            {(!bookResources.length || 
              !bookResources.filter(resource => {
                const hormoneMatch = hormoneFilter === 'all' || 
                  (resource.tags && resource.tags.includes(hormoneFilter as HormoneType));
                const searchMatch = !searchQuery || 
                  Object.values(resource.title).some(title => 
                    title.toLowerCase().includes(searchQuery.toLowerCase())
                  ) ||
                  Object.values(resource.description).some(desc => 
                    desc.toLowerCase().includes(searchQuery.toLowerCase())
                  );
                return hormoneMatch && searchMatch;
              }).length) && (
              <div className="text-center py-8 md:py-12 bg-card border border-border rounded-lg mb-6 md:mb-8 px-4">
                <div className="text-4xl md:text-5xl mb-4">{text.page.emptyState.books.icon}</div>
                <h3 className="text-xl md:text-2xl font-semibold text-card-foreground mb-4">
                  {text.page.emptyState.books.title}
                </h3>
                <p className="text-muted-foreground max-w-lg mx-auto">
                  {text.page.emptyState.books.description}
                </p>
              </div>
            )}
          </Container>
        </section>

        {/* 即将上线提示 */}
        <section className="py-6 md:py-8">
          <Container>
            <div className="bg-primary/5 dark:bg-primary/10 border-l-4 border-primary p-4 md:p-6 rounded-lg">
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-foreground">
                {text.page.comingSoon.title}
              </h3>
              <p className="text-muted-foreground mb-4 md:mb-6">
                {text.page.comingSoon.description}
              </p>
              <div className="flex flex-col md:flex-row gap-3 md:gap-4">
                <Button 
                  variant="default" 
                  className="w-full md:w-auto"
                  onClick={() => window.open('https://github.com/yaodebian/human-hormones', '_blank')}
                >
                  {text.page.comingSoon.buttons.contact}
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full md:w-auto" 
                  disabled
                >
                  {text.page.comingSoon.buttons.subscribe}
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
} 