import React from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

type RelatedHormone = {
  name: string;
  description: string;
  link: string;
};

type RelatedHormonesProps = {
  items: RelatedHormone[];
  className?: string;
  title?: string;
};

const RelatedHormones = ({
  items,
  className
}: RelatedHormonesProps) => {
  // 色彩映射表 - 根据链接路径确定颜色，支持暗黑模式
  const getHormoneColor = (link: string): string => {
    const colorMap: Record<string, string> = {
      '/dopamine': 'hover:border-pink-500 dark:hover:border-pink-400',
      '/endorphin': 'hover:border-purple-500 dark:hover:border-purple-400',
      '/serotonin': 'hover:border-amber-500 dark:hover:border-amber-400',
      '/oxytocin': 'hover:border-orange-500 dark:hover:border-orange-400',
      '/cortisol': 'hover:border-emerald-500 dark:hover:border-emerald-400',
    };
    return colorMap[link] || 'hover:border-blue-500 dark:hover:border-blue-400';
  };

  return (
    <div className={className}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((hormone, index) => (
          <Link 
            key={index}
            href={hormone.link}
            className={cn(
              'block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border-2 border-transparent transition duration-300 ease-in-out hover:shadow-md dark:hover:shadow-lg',
              getHormoneColor(hormone.link)
            )}
          >
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{hormone.name}</h3>
            <p className="text-gray-700 dark:text-gray-300">{hormone.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedHormones; 