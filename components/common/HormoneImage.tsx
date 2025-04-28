import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

type HormoneImageProps = {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
};

const HormoneImage = ({
  src,
  alt,
  className,
  width = 500,
  height = 300,
}: HormoneImageProps) => {
  return (
    <div className={cn('relative rounded-lg overflow-hidden shadow-md', className)}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-auto object-cover"
      />
    </div>
  );
};

export default HormoneImage; 