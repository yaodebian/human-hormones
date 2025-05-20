import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// 支持的语言列表
export const supportedLocales = ['en-US', 'zh-CN', 'ja-JP', 'ko-KR']
export const defaultLocale = 'en-US'

// 获取用户首选语言
function getLocale(request: NextRequest) {
  // 优先从 Cookie 中获取语言设置
  const savedLocale = request.cookies.get('NEXT_LOCALE')?.value
  if (savedLocale && supportedLocales.includes(savedLocale)) {
    return savedLocale
  }
  
  // 从请求头获取Accept-Language
  const acceptLanguage = request.headers.get('accept-language') || ''
  
  // 使用简单的语言匹配逻辑
  const userLocales = acceptLanguage.split(',')
    .map(lang => lang.split(';')[0].trim())
  
  // 查找匹配的语言
  for (const locale of userLocales) {
    const normalizedLocale = locale.startsWith('zh') ? 'zh-CN' : 
                            locale.startsWith('ja') ? 'ja-JP' : 
                            locale.startsWith('ko') ? 'ko-KR' : 
                            locale.startsWith('en') ? 'en-US' : null
    
    if (normalizedLocale && supportedLocales.includes(normalizedLocale)) {
      return normalizedLocale
    }
  }
  
  return defaultLocale
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  // 跳过静态资源和API路由的处理
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/images') ||
    pathname.startsWith('/public') ||
    pathname.includes('/static/') ||
    pathname.match(/\.(jpg|jpeg|png|gif|svg|ico|webp|css|js)$/)
  ) {
    return NextResponse.next()
  }

  // 检查当前路径的第一段
  const segments = pathname.split('/').filter(Boolean)
  const firstSegment = segments[0] || ''

  // 如果第一段是支持的语言代码，直接通过
  if (supportedLocales.includes(firstSegment)) {
    const response = NextResponse.next()
    
    // 确保 cookie 与 URL 中的语言一致
    if (request.cookies.get('NEXT_LOCALE')?.value !== firstSegment) {
      response.cookies.set('NEXT_LOCALE', firstSegment, {
        path: '/',
        maxAge: 31536000 // 一年有效期
      })
    }
    
    return response
  }

  // 获取用户首选语言
  const locale = getLocale(request)
  
  // 如果是默认语言（英文），不添加前缀
  if (locale === defaultLocale) {
    const newUrl = new URL(`/${locale}${pathname}`, request.url)
    newUrl.search = request.nextUrl.search
    
    const response = NextResponse.rewrite(newUrl)
    
    // 设置默认语言的 cookie，确保客户端一致性
    if (request.cookies.get('NEXT_LOCALE')?.value !== defaultLocale) {
      response.cookies.set('NEXT_LOCALE', defaultLocale, {
        path: '/',
        maxAge: 31536000 // 一年有效期
      })
    }
    
    return response
  }
  
  // 为其他语言添加路径前缀（对非根路径的请求使用redirect）
  const newUrl = new URL(`/${locale}${pathname}`, request.url)
  newUrl.search = request.nextUrl.search
  return NextResponse.redirect(newUrl)
}

// 更新 matcher 配置，使用更简单的模式
export const config = {
  matcher: [
    // 排除所有内部路径和静态文件
    '/((?!api|_next|images|public|static).*)',
  ]
}