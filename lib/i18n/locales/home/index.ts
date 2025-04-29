import { zhCN } from './zh-CN'
import { enUS } from './en-US'
import { jaJP } from './ja-JP'
import { koKR } from './ko-KR'

export const locales = {
  'en-US': enUS,
  'zh-CN': zhCN,
  'ja-JP': jaJP,
  'ko-KR': koKR
}

export type Locale = keyof typeof locales
export type LocaleText = typeof zhCN 