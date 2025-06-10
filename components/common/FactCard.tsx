"use client";

import React from 'react';
import { cn } from '@/lib/utils';

type FactCardProps = {
  title: string;
  children: React.ReactNode;
  className?: string;
  color?: string;
};

const FactCard = ({ 
  title, 
  children, 
  className,
  color,
}: FactCardProps) => {
  return (
    <div className={cn('bg-card border border-border/50 rounded-lg shadow-sm p-6 transition-colors', className)}>
      <h3 className="text-xl font-semibold mb-3 text-card-foreground">{title}</h3>
      <div className="hormone-accent-text text-card-foreground" data-accent-color={color}>
        {children}
      </div>
      
      {/* 添加全局样式，用于处理文本中的强调部分 */}
      <style jsx global>{`
        .hormone-accent-text span.hormone-accent {
          color: var(--${color || 'primary'});
          font-weight: 500;
        }
        
        /* 优化暗黑模式下的颜色对比度 */
        [data-accent-color="dopamine"] span.hormone-accent {
          color: rgb(236, 72, 153);
        }
        
        .dark [data-accent-color="dopamine"] span.hormone-accent {
          color: rgb(244, 114, 182);
        }
        
        [data-accent-color="endorphin"] span.hormone-accent {
          color: rgb(139, 92, 246);
        }
        
        .dark [data-accent-color="endorphin"] span.hormone-accent {
          color: rgb(168, 85, 247);
        }
        
        [data-accent-color="serotonin"] span.hormone-accent {
          color: rgb(251, 191, 36);
        }
        
        .dark [data-accent-color="serotonin"] span.hormone-accent {
          color: rgb(253, 224, 71);
        }
        
        [data-accent-color="oxytocin"] span.hormone-accent {
          color: rgb(249, 115, 22);
        }
        
        .dark [data-accent-color="oxytocin"] span.hormone-accent {
          color: rgb(251, 146, 60);
        }
        
        [data-accent-color="cortisol"] span.hormone-accent {
          color: rgb(16, 185, 129);
        }
        
        .dark [data-accent-color="cortisol"] span.hormone-accent {
          color: rgb(52, 211, 153);
        }
      `}</style>
    </div>
  );
};

export default FactCard; 