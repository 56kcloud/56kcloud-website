export const defaultLocale = 'en'
export const locales = [defaultLocale, 'fr'] as const
export type Locale = (typeof locales)[number]
export const localesMap: Record<Locale, Array<string>> = {
  en: ['en'],
  fr: ['fr', 'fr-ch', 'fr-ca', 'fr-fr']
}
