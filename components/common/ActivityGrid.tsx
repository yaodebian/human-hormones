import React from 'react';
import { cn } from '@/lib/utils';

type ActivityItem = {
  icon: string;
  name: string;
};

type ActivityGridProps = {
  items: ActivityItem[];
  className?: string;
};

const ActivityGrid = ({
  items,
  className,
}: ActivityGridProps) => {
  return (
    <div className={cn('grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4', className)}>
      {items.map((item, index) => (
        <div 
          key={index} 
          className="bg-white p-4 rounded-lg shadow-sm text-center transition duration-300 ease-in-out hover:shadow-md"
        >
          <div className="text-4xl mb-2">{item.icon}</div>
          <p className="text-gray-800">{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default ActivityGrid; 