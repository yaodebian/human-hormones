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
  
  // 重定向配置 - 添加HTTP到HTTPS重定向
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
        destination: 'https://hormonetips.top/:path*',
        permanent: true,
      },
      // 可选：如果有www子域名的话
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.hormonetips.top',
          },
        ],
        destination: 'https://hormonetips.top/:path*',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
