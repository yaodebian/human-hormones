import type { Metadata } from "next";
import "@/app/globals.css";
import { supportedLocales } from "@/middleware";

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
  return (
    <>
      {children}
    </>
  );
}