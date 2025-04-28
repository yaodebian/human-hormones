import React from 'react';
import { cn } from '@/lib/utils';

type HormoneTextProps = {
  text: string;
  color?: string;
  className?: string;
};

const HormoneText = ({
  text,
  color = 'primary',
  className,
}: HormoneTextProps) => {
  // 将普通文本中的 <span class="hormone-accent">文本</span> 转换为强调样式
  const processText = (input: string) => {
    // 使用正则表达式匹配 <span class="hormone-accent">文本</span> 格式
    const parts = input.split(/<span class="hormone-accent">|<\/span>/);
    
    // 如果没有匹配到强调文本，直接返回原文本
    if (parts.length === 1) {
      return <p className={className}>{input}</p>;
    }
    
    // 重组文本，将强调部分用样式化的 span 替换
    const elements: React.ReactNode[] = [];
    let isAccent = false;
    
    parts.forEach((part, index) => {
      if (!part) return;
      
      if (isAccent) {
        elements.push(
          <span key={index} className={`hormone-accent ${getColorClass(color)}`}>
            {part}
          </span>
        );
      } else {
        elements.push(<React.Fragment key={index}>{part}</React.Fragment>);
      }
      
      isAccent = !isAccent;
    });
    
    return <p className={className}>{elements}</p>;
  };
  
  // 获取颜色类名
  const getColorClass = (colorKey: string): string => {
    const colorMap: Record<string, string> = {
      primary: 'text-blue-500',
      dopamine: 'text-pink-500',
      endorphin: 'text-purple-500',
      serotonin: 'text-amber-500',
      oxytocin: 'text-orange-500',
      cortisol: 'text-emerald-500',
    };
    
    return colorMap[colorKey] || colorMap.primary;
  };
  
  return processText(text);
};

export default HormoneText; 