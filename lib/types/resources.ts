export type HormoneType = 'dopamine' | 'endorphin' | 'serotonin' | 'oxytocin' | 'cortisol';

export type ResourceType = 'articles' | 'videos' | 'research' | 'books';

export interface BaseResource {
  id: string;
  title: Record<string, string>; // 多语言标题
  description: Record<string, string>; // 多语言描述
  publishedAt: string; // ISO date string
  url: string;
  tags?: HormoneType[]; // 激素标签
  type: ResourceType;
}

export interface ArticleResource extends BaseResource {
  type: 'articles';
  author?: Record<string, string>; // 多语言作者名
  readTime?: number; // 阅读时间（分钟）
}

export interface VideoResource extends BaseResource {
  type: 'videos';
  duration?: number; // 视频时长（秒）
  platform?: string; // 视频平台（YouTube, Bilibili等）
}

export interface ResearchResource extends BaseResource {
  type: 'research';
  authors?: Record<string, string>; // 多语言作者名
  journal?: Record<string, string>; // 多语言期刊名
  doi?: string;
}

export interface BookResource extends BaseResource {
  type: 'books';
  author?: Record<string, string>; // 多语言作者名
  isbn?: string;
  publisher?: Record<string, string>; // 多语言出版社名
}

export type Resource = ArticleResource | VideoResource | ResearchResource | BookResource; 