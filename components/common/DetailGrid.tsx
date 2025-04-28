import React from 'react';
import { cn } from '@/lib/utils';

type DetailGridProps = {
  children: React.ReactNode;
  className?: string;
  cols?: 1 | 2 | 3;
};

const DetailGrid = ({
  children,
  className,
  cols = 2,
}: DetailGridProps) => {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  };

  return (
    <div className={cn('grid gap-8', gridCols[cols], className)}>
      {children}
    </div>
  );
};

export default DetailGrid; 