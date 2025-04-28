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
  // 颜色映射
  const colorClasses: Record<string, { bg: string, border: string }> = {
    dopamine: { bg: 'bg-pink-50', border: 'border-pink-200' },
    endorphin: { bg: 'bg-purple-50', border: 'border-purple-200' },
    serotonin: { bg: 'bg-amber-50', border: 'border-amber-200' },
    oxytocin: { bg: 'bg-orange-50', border: 'border-orange-200' },
    cortisol: { bg: 'bg-emerald-50', border: 'border-emerald-200' }
  };

  const { bg, border } = colorClasses[color];

  return (
    <div 
      className={cn(
        'rounded-xl border-2 p-6', 
        bg, 
        border,
        className
      )}
      data-highlight-color={color}
    >
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <div className="highlight-accent-content">
        {children}
      </div>

      {/* 强调内容的样式 */}
      <style jsx global>{`
        [data-highlight-color="dopamine"] .highlight-accent-content strong {
          color: rgb(236, 72, 153);
        }
        
        [data-highlight-color="endorphin"] .highlight-accent-content strong {
          color: rgb(139, 92, 246);
        }
        
        [data-highlight-color="serotonin"] .highlight-accent-content strong {
          color: rgb(251, 191, 36);
        }
        
        [data-highlight-color="oxytocin"] .highlight-accent-content strong {
          color: rgb(249, 115, 22);
        }
        
        [data-highlight-color="cortisol"] .highlight-accent-content strong {
          color: rgb(16, 185, 129);
        }
      `}</style>
    </div>
  );
};

export default HighlightBox; 