import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // SEO 优化配置
  trailingSlash: false, // 避免重复内容问题
  
  // 头部配置
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          // 强制HTTPS
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
        ],
      },
    ]
  },
  
  // 重定向配置 - 只保留HTTP到HTTPS重定向
  async redirects() {
    return [
      // HTTP到HTTPS重定向
      {
        source: '/:path*',
        has: [
          {
            type: 'header',
            key: 'x-forwarded-proto',
            value: 'http',
          },
        ],
        destination: 'https://www.hormonetips.top/:path*', // 使用www版本，与你的域名设置一致
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
