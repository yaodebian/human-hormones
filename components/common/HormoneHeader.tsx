import React from 'react';
import { cn } from '@/lib/utils';

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
  // 色彩映射表，对应各个激素的主题色
  const colorMap: Record<string, string> = {
    dopamine: 'bg-pink-50 text-pink-500',     // 多巴胺 - 粉色
    endorphin: 'bg-purple-50 text-purple-500', // 内啡肽 - 紫色
    serotonin: 'bg-amber-50 text-amber-500',   // 血清素 - 黄色
    oxytocin: 'bg-orange-50 text-orange-500',  // 催产素 - 橙色
    cortisol: 'bg-emerald-50 text-emerald-500', // 皮质醇 - 绿色
  };

  const colorClasses = colorMap[color] || 'bg-blue-50 text-blue-500';
  const iconBgClass = `${colorClasses.split(' ')[0]} p-4 rounded-full inline-flex mb-4`;

  return (
    <section className={cn('py-12', colorClasses.split(' ')[0], className)}>
      <div className="container mx-auto px-4">
        <div className={iconBgClass}>
          <img src={icon} alt={title} className="w-12 h-12" />
        </div>
        <h1 className={cn('text-3xl md:text-4xl font-bold mb-4', colorClasses.split(' ')[1])}>
          {title}
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl">
          {description}
        </p>
      </div>
    </section>
  );
};

export default HormoneHeader; 