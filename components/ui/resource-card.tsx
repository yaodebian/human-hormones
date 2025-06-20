'use client'

import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Clock, Calendar } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/language-context';
import { Resource } from '@/lib/types/resources';
import { cn } from '@/lib/utils';

interface ResourceCardProps {
  resource: Resource;
  className?: string;
}

export function ResourceCard({ resource, className }: ResourceCardProps) {
  const { locale, text } = useLanguage();
  
  // 获取当前语言的内容，如果不存在则回退到中文
  const getLocalizedContent = (content: Record<string, string>) => {
    return content[locale] || content['zh-CN'] || Object.values(content)[0] || '';
  };
  
  // 格式化日期
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    if (locale === 'zh-CN') {
      return date.toLocaleDateString('zh-CN', { year: 'numeric', month: '2-digit', day: '2-digit' });
    } else if (locale === 'ja-JP') {
      return date.toLocaleDateString('ja-JP', { year: 'numeric', month: '2-digit', day: '2-digit' });
    } else if (locale === 'ko-KR') {
      return date.toLocaleDateString('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit' });
    } else {
      return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
    }
  };
  

  
  // 获取按钮文本
  const getButtonText = () => {
    const buttonTexts = {
      'zh-CN': '查看详情',
      'en-US': 'View Details',
      'ja-JP': '詳細を見る',
      'ko-KR': '자세히 보기'
    };
    return buttonTexts[locale as keyof typeof buttonTexts] || buttonTexts['zh-CN'];
  };
  

  
  return (
    <Card className={cn("h-full flex flex-col transition-all duration-200 hover:shadow-lg", className)}>
      <CardHeader className="pb-3">
        <h3 className="font-semibold text-lg leading-tight overflow-hidden" style={{
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical'
        }}>
          {getLocalizedContent(resource.title)}
        </h3>
      </CardHeader>
      
      <CardContent className="flex-1 pb-4">
        <p className="text-muted-foreground text-sm mb-4 overflow-hidden" style={{
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical'
        }}>
          {getLocalizedContent(resource.description)}
        </p>
        
        <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            <span>{formatDate(resource.publishedAt)}</span>
          </div>
          
          {resource.type === 'articles' && resource.readTime && (
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>{resource.readTime} min</span>
            </div>
          )}
          
          {resource.type === 'videos' && resource.duration && (
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>{Math.ceil(resource.duration / 60)} min</span>
            </div>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="pt-0">
        <Button 
          asChild 
          className="w-full" 
          variant="default"
        >
          <a 
            href={resource.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2"
          >
            <span>{getButtonText()}</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
} 