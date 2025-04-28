import React from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

type RelatedHormone = {
  id: string;
  name: string;
  relation: string;
  link: string;
};

type RelatedHormonesProps = {
  items: RelatedHormone[];
  className?: string;
  title?: string;
};

const RelatedHormones = ({
  items,
  className,
  title = '与其他激素的关系',
}: RelatedHormonesProps) => {
  // 色彩映射表
  const colorMap: Record<string, string> = {
    dopamine: 'hover:border-pink-500',
    endorphin: 'hover:border-purple-500',
    serotonin: 'hover:border-amber-500',
    oxytocin: 'hover:border-orange-500',
    cortisol: 'hover:border-emerald-500',
  };

  return (
    <div className={className}>
      <h2 className="text-2xl md:text-3xl font-bold mb-6">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((hormone, index) => (
          <Link 
            key={index}
            href={hormone.link}
            className={cn(
              'block p-6 bg-white rounded-lg shadow-sm border-2 border-transparent transition duration-300 ease-in-out hover:shadow-md',
              colorMap[hormone.id] || 'hover:border-blue-500'
            )}
          >
            <h3 className="text-xl font-semibold mb-3">{hormone.name}</h3>
            <p className="text-gray-700">{hormone.relation}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedHormones; 