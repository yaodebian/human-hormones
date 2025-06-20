'use client'

import React from 'react';
import { ResourceCard } from './resource-card';
import { Resource, HormoneType } from '@/lib/types/resources';

interface ResourceListProps {
  resources: Resource[];
  hormoneFilter?: string;
  searchQuery?: string;
  className?: string;
}

export function ResourceList({ 
  resources, 
  hormoneFilter = 'all', 
  searchQuery = '',
  className 
}: ResourceListProps) {
  
  // 过滤资源
  const filteredResources = resources.filter(resource => {
    // 激素标签过滤
    const hormoneMatch = hormoneFilter === 'all' || 
      (resource.tags && resource.tags.includes(hormoneFilter as HormoneType));
    
    // 搜索查询过滤（搜索标题和描述）
    const searchMatch = !searchQuery || 
      Object.values(resource.title).some(title => 
        title.toLowerCase().includes(searchQuery.toLowerCase())
      ) ||
      Object.values(resource.description).some(desc => 
        desc.toLowerCase().includes(searchQuery.toLowerCase())
      );
    
    return hormoneMatch && searchMatch;
  });

  if (filteredResources.length === 0) {
    return null; // 返回null，让父组件显示空状态
  }

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className || ''}`}>
      {filteredResources.map((resource) => (
        <ResourceCard 
          key={resource.id} 
          resource={resource}
        />
      ))}
    </div>
  );
} 