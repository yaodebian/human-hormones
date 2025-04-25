'use client'

import { Locale } from '@/lib/i18n/locales'
import { useLanguage } from '@/lib/i18n/language-context'
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { cn } from '@/lib/utils'

interface LanguageSwitcherProps {
  className?: string
  fullWidth?: boolean
}

export function LanguageSwitcher({ className, fullWidth = false }: LanguageSwitcherProps) {
  const { locale, text, changeLocale } = useLanguage()
  
  const handleChange = (value: string) => {
    changeLocale(value as Locale)
  }
  
  return (
    <Select
      value={locale}
      onValueChange={handleChange}
    >
      <SelectTrigger 
        className={cn(
          "w-auto min-w-[100px]",
          fullWidth && "w-full",
          className
        )}
      >
        <SelectValue placeholder={text.languages[locale]} />
      </SelectTrigger>
      <SelectContent>
        {Object.keys(text.languages).map((lang) => (
          <SelectItem key={lang} value={lang}>
            {text.languages[lang as Locale]}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
} 