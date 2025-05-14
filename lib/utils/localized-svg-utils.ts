import { Locale } from "@/lib/i18n/locales/home";

/**
 * 获取基于当前语言的本地化SVG文件路径
 */
export const getLocalizedSvgPath = (basePath: string, locale: Locale): string => {
  // 从basePath中提取基本路径和文件名
  const pathParts = basePath.split("/");
  const fileName = pathParts.pop() || "";
  const filePath = pathParts.join("/");
  
  // 移除扩展名
  const fileNameWithoutExt = fileName.replace(/\.[^/.]+$/, "");
  
  // 构建本地化文件路径
  return filePath 
    ? `${filePath}/${fileNameWithoutExt}.${locale}.svg`
    : `/${fileNameWithoutExt}.${locale}.svg`;
}; 