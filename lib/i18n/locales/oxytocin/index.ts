import { enUS } from './en-US'
import { jaJP } from './ja-JP'
import { koKR } from './ko-KR'
import { zhCN } from './zh-CN'

export const locales = {
  'en-US': enUS,
  'ja-JP': jaJP,
  'ko-KR': koKR,
  'zh-CN': zhCN,
}

export type Locale = keyof typeof locales
export type LocaleText = typeof zhCN 