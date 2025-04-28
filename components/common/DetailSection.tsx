import React from 'react';
import { cn } from '@/lib/utils';

type DetailSectionProps = {
  title: string;
  children: React.ReactNode;
  className?: string;
  description?: string;
};

const DetailSection = ({
  title,
  children,
  className,
  description,
}: DetailSectionProps) => {
  return (
    <section className={cn('py-12', className)}>
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
        {description && <p className="text-gray-700 mb-6">{description}</p>}
        {children}
      </div>
    </section>
  );
};

export default DetailSection; 