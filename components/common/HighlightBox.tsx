"use client";

import React from 'react';
import { cn } from '@/lib/utils';

type HighlightBoxProps = {
  color?: 'dopamine' | 'endorphin' | 'serotonin' | 'oxytocin' | 'cortisol';
  title: string;
  children: React.ReactNode;
  className?: string;
};

const HighlightBox = ({ color = 'dopamine', title, children, className }: HighlightBoxProps) => {
  // 颜色映射 - 支持暗黑模式
  const colorClasses: Record<string, { bg: string, border: string }> = {
    dopamine: { 
      bg: 'bg-pink-50/70 dark:bg-pink-950/20', 
      border: 'border-pink-200/50 dark:border-pink-800/30' 
    },
    endorphin: { 
      bg: 'bg-purple-50/70 dark:bg-purple-950/20', 
      border: 'border-purple-200/50 dark:border-purple-800/30' 
    },
    serotonin: { 
      bg: 'bg-amber-50/70 dark:bg-amber-950/20', 
      border: 'border-amber-200/50 dark:border-amber-800/30' 
    },
    oxytocin: { 
      bg: 'bg-orange-50/70 dark:bg-orange-950/20', 
      border: 'border-orange-200/50 dark:border-orange-800/30' 
    },
    cortisol: { 
      bg: 'bg-emerald-50/70 dark:bg-emerald-950/20', 
      border: 'border-emerald-200/50 dark:border-emerald-800/30' 
    }
  };

  const { bg, border } = colorClasses[color];

  return (
    <div 
      className={cn(
        'rounded-xl border-2 p-6 transition-colors', 
        bg, 
        border,
        className
      )}
      data-highlight-color={color}
    >
      <h3 className="text-xl font-semibold mb-3 text-foreground">{title}</h3>
      <div className="highlight-accent-content text-foreground">
        {children}
      </div>

      {/* 强调内容的样式 */}
      <style jsx global>{`
        [data-highlight-color="dopamine"] .highlight-accent-content strong {
          color: rgb(236, 72, 153);
        }
        
        .dark [data-highlight-color="dopamine"] .highlight-accent-content strong {
          color: rgb(244, 114, 182);
        }
        
        [data-highlight-color="endorphin"] .highlight-accent-content strong {
          color: rgb(139, 92, 246);
        }
        
        .dark [data-highlight-color="endorphin"] .highlight-accent-content strong {
          color: rgb(168, 85, 247);
        }
        
        [data-highlight-color="serotonin"] .highlight-accent-content strong {
          color: rgb(251, 191, 36);
        }
        
        .dark [data-highlight-color="serotonin"] .highlight-accent-content strong {
          color: rgb(253, 224, 71);
        }
        
        [data-highlight-color="oxytocin"] .highlight-accent-content strong {
          color: rgb(249, 115, 22);
        }
        
        .dark [data-highlight-color="oxytocin"] .highlight-accent-content strong {
          color: rgb(251, 146, 60);
        }
        
        [data-highlight-color="cortisol"] .highlight-accent-content strong {
          color: rgb(16, 185, 129);
        }
        
        .dark [data-highlight-color="cortisol"] .highlight-accent-content strong {
          color: rgb(52, 211, 153);
        }
      `}</style>
    </div>
  );
};

export default HighlightBox; 