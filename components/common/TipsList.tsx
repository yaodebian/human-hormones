import React from 'react';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

type TipsListProps = {
  items: Array<{
    title: string;
    description?: string | React.ReactNode;
    items?: string[];
  }>;
  className?: string;
  color?: string;
};

const TipsList = ({
  items,
  className,
  color = 'primary',
}: TipsListProps) => {
  // 色彩映射表
  const colorMap: Record<string, string> = {
    primary: 'text-blue-500',
    dopamine: 'text-pink-500',
    endorphin: 'text-purple-500',
    serotonin: 'text-amber-500',
    oxytocin: 'text-orange-500',
    cortisol: 'text-emerald-500',
  };

  const checkColor = colorMap[color] || colorMap.primary;

  return (
    <ul className={cn('space-y-4', className)}>
      {items.map((item, index) => (
        <li key={index} className="relative pl-8">
          <div className={cn('absolute left-0 top-1', checkColor)}>
            <Check size={18} />
          </div>
          <div>
            <strong>{item.title}</strong>
            {item.description && (
              <div className="mt-1 text-gray-700">
                {item.description}
              </div>
            )}
            {item.items && (
              <ul className="mt-2 pl-4 space-y-1">
                {item.items.map((subItem, subIndex) => (
                  <li key={subIndex} className="text-gray-700 list-disc">
                    {subItem}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TipsList; 