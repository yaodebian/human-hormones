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
  // 色彩映射表，用于强调文本颜色
  const colorMap: Record<string, string> = {
    dopamine: 'text-pink-500',     // 多巴胺 - 粉色
    endorphin: 'text-purple-500',  // 内啡肽 - 紫色
    serotonin: 'text-amber-500',   // 血清素 - 黄色
    oxytocin: 'text-orange-500',   // 催产素 - 橙色
    cortisol: 'text-emerald-500',  // 皮质醇 - 绿色
  };
  
  const accentColor = color ? colorMap[color] : '';

  return (
    <div className={cn('bg-white rounded-lg shadow-md p-6', className)}>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <div className="hormone-accent-text" data-accent-color={color}>
        {children}
      </div>
      
      {/* 添加全局样式，用于处理文本中的强调部分 */}
      <style jsx global>{`
        .hormone-accent-text span.hormone-accent {
          color: var(--${color || 'primary'});
          font-weight: 500;
        }
        
        [data-accent-color="dopamine"] span.hormone-accent {
          color: rgb(236, 72, 153);
        }
        
        [data-accent-color="endorphin"] span.hormone-accent {
          color: rgb(139, 92, 246);
        }
        
        [data-accent-color="serotonin"] span.hormone-accent {
          color: rgb(251, 191, 36);
        }
        
        [data-accent-color="oxytocin"] span.hormone-accent {
          color: rgb(249, 115, 22);
        }
        
        [data-accent-color="cortisol"] span.hormone-accent {
          color: rgb(16, 185, 129);
        }
      `}</style>
    </div>
  );
};

export default FactCard; 