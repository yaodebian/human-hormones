import type { Metadata } from "next";
import "@/app/globals.css";
import { defaultLocale, supportedLocales } from "@/middleware";
import { headers } from 'next/headers'
import { LanguageProvider } from "@/lib/i18n/language-context";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "人体激素科普 | Human Hormones Guide | ヒトホルモンガイド | 인체 호르몬 가이드",
  description: "探索人体激素如何影响身体和心理健康，了解多巴胺、内啡肽、血清素、催产素、皮质醇的作用机制及如何优化激素平衡。",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export function generateStaticParams() {
  return supportedLocales.map(locale => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const headersList = await headers()
  const cookies = headersList.get('cookie')
  const cookieLocale = cookies?.split('; ')
    .find((row: string) => row.startsWith('NEXT_LOCALE='))?.split('=')[1]
  
  // 优先使用URL路径中的语言参数，其次是cookie中的语言，最后是默认语言
  const urlLocale = (await params).locale
  const currentLocale = 
    (urlLocale && supportedLocales.includes(urlLocale)) ? urlLocale : 
    (cookieLocale && supportedLocales.includes(cookieLocale)) ? cookieLocale : 
    defaultLocale
  
  return (
    <html lang={currentLocale} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <link rel="canonical" href={`https://www.hormonetips.top${currentLocale === defaultLocale ? '' : `/${currentLocale}`}`} />
      </head>
      <body className={`${inter.variable} font-sans antialiased`} suppressHydrationWarning>
        <ThemeProvider>
          <LanguageProvider locale={currentLocale}>{children}</LanguageProvider>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}