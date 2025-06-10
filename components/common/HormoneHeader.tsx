import React from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

type HormoneHeaderProps = {
  title: string;
  description: string;
  icon: string;
  color: string;
  className?: string;
};

const HormoneHeader = ({
  title,
  description,
  icon,
  color,
  className,
}: HormoneHeaderProps) => {
  // 色彩映射表，支持暗黑模式
  const colorMap: Record<string, { bg: string; text: string; iconBg: string }> = {
    dopamine: {
      bg: 'bg-pink-50/70 dark:bg-pink-950/20',
      text: 'text-pink-600 dark:text-pink-400',
      iconBg: 'bg-pink-100/80 dark:bg-pink-900/30'
    },
    endorphin: {
      bg: 'bg-purple-50/70 dark:bg-purple-950/20',
      text: 'text-purple-600 dark:text-purple-400',
      iconBg: 'bg-purple-100/80 dark:bg-purple-900/30'
    },
    serotonin: {
      bg: 'bg-amber-50/70 dark:bg-amber-950/20',
      text: 'text-amber-600 dark:text-amber-500',
      iconBg: 'bg-amber-100/80 dark:bg-amber-900/30'
    },
    oxytocin: {
      bg: 'bg-orange-50/70 dark:bg-orange-950/20',
      text: 'text-orange-600 dark:text-orange-400',
      iconBg: 'bg-orange-100/80 dark:bg-orange-900/30'
    },
    cortisol: {
      bg: 'bg-emerald-50/70 dark:bg-emerald-950/20',
      text: 'text-emerald-600 dark:text-emerald-400',
      iconBg: 'bg-emerald-100/80 dark:bg-emerald-900/30'
    },
  };

  const colorScheme = colorMap[color] || {
    bg: 'bg-blue-50/70 dark:bg-blue-950/20',
    text: 'text-blue-600 dark:text-blue-400',
    iconBg: 'bg-blue-100/80 dark:bg-blue-900/30'
  };

  return (
    <section className={cn('py-12 transition-colors', colorScheme.bg, className)}>
      <div className="container mx-auto px-4">
        <div className={cn('p-4 rounded-full inline-flex mb-4 transition-colors', colorScheme.iconBg)}>
          <Image 
            src={icon} 
            alt={title} 
            width={48} 
            height={48}
            className="w-12 h-12"
          />
        </div>
        <h1 className={cn('text-3xl md:text-4xl font-bold mb-4 transition-colors', colorScheme.text)}>
          {title}
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          {description}
        </p>
      </div>
    </section>
  );
};

export default HormoneHeader; 