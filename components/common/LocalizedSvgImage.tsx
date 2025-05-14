import Image from "next/image";
import { cn } from '@/lib/utils';
import { useLanguage } from "@/lib/i18n/language-context";
import { getLocalizedSvgPath } from "@/lib/utils/localized-svg-utils";

type LocalizedSvgImageProps = {
  basePath: string;
  altText?: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
};

/**
 * 根据当前语言加载正确的SVG图片
 * 文件命名格式： basePath.locale.svg
 * 例如：/brain.zh-CN.svg, /brain.en-US.svg
 */
const LocalizedSvgImage = ({
  basePath,
  altText = "",
  width,
  height,
  className = "",
  priority = false,
}: LocalizedSvgImageProps) => {
  const { locale } = useLanguage();
  
  // 获取本地化文件路径
  const localizedPath = getLocalizedSvgPath(basePath, locale);
  
  // 确保提供了宽度和高度，或者使用fill
  if (width && height) {
    return (
      <Image
        src={localizedPath}
        alt={altText}
        width={width}
        height={height}
        className={className}
        onError={(e) => {
          e.currentTarget.src = basePath;
        }}
        priority={priority}
      />
    );
  }
  
  // 使用fill模式
  return (
    <div className={cn('relative w-full h-full', className)}>
      <Image
        src={localizedPath}
        alt={altText}
        fill
        className="object-contain"
        onError={(e) => {
          e.currentTarget.src = basePath;
        }}
        priority={priority}
      />
    </div>
  );
};

export default LocalizedSvgImage; 