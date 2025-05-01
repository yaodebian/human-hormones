import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { LanguageProvider } from "@/lib/i18n/language-context";
import { supportedLocales, defaultLocale } from "@/middleware";
import { headers } from 'next/headers'

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "人体激素科普 | Human Hormones Guide | ヒトホルモンガイド | 인체 호르몬 가이드",
  description: "探索人体激素如何影响身体和心理健康，了解多巴胺、内啡肽、血清素、催产素、皮质醇的作用机制及如何优化激素平衡。",
};

export function generateStaticParams() {
  return supportedLocales.map(locale => ({ locale }));
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers()
  const cookies = headersList.get('cookie')
  const savedLocale = cookies?.split('; ')
    .find((row: string) => row.startsWith('NEXT_LOCALE='))?.split('=')[1]
  
  // 使用 cookie 中保存的语言或默认语言
  const currentLocale = (savedLocale && supportedLocales.includes(savedLocale)) ? savedLocale : defaultLocale
  
  return (
    <html lang={currentLocale} suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <LanguageProvider locale={currentLocale}>{children}</LanguageProvider>
      </body>
    </html>
  );
}