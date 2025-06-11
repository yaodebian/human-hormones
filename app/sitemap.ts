import { MetadataRoute } from 'next'
import { supportedLocales } from '@/middleware'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.hormonetips.top'
  
  // 基础页面路径
  const routes = [
    '',
    '/dopamine',
    '/serotonin',
    '/endorphin',
    '/oxytocin',
    '/cortisol',
    '/resources'
  ]
  
  const sitemap: MetadataRoute.Sitemap = []
  
  // 为每种语言和每个路由生成sitemap条目
  supportedLocales.forEach(locale => {
    routes.forEach(route => {
      const url = locale === 'en-US' 
        ? `${baseUrl}${route}` 
        : `${baseUrl}/${locale}${route}`
      
      sitemap.push({
        url,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
        alternates: {
          languages: Object.fromEntries(
            supportedLocales.map(lang => [
              lang === 'en-US' ? 'x-default' : lang,
              lang === 'en-US' 
                ? `${baseUrl}${route}` 
                : `${baseUrl}/${lang}${route}`
            ])
          )
        }
      })
    })
  })
  
  return sitemap
} 