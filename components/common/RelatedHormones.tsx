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
  // 色彩映射表 - 根据链接路径确定颜色
  const getHormoneColor = (link: string): string => {
    const colorMap: Record<string, string> = {
      '/dopamine': 'hover:border-pink-500',
      '/endorphin': 'hover:border-purple-500',
      '/serotonin': 'hover:border-amber-500',
      '/oxytocin': 'hover:border-orange-500',
      '/cortisol': 'hover:border-emerald-500',
    };
    return colorMap[link] || 'hover:border-blue-500';
  };

  return (
    <div className={className}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((hormone, index) => (
          <Link 
            key={index}
            href={hormone.link}
            className={cn(
              'block p-6 bg-white rounded-lg shadow-sm border-2 border-transparent transition duration-300 ease-in-out hover:shadow-md',
              getHormoneColor(hormone.link)
            )}
          >
            <h3 className="text-xl font-semibold mb-3">{hormone.name}</h3>
            <p className="text-gray-700">{hormone.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedHormones; 