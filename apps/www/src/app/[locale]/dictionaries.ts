import 'server-only'


const dictionaries = {
  en: () => import('../../dictionaries/en.json').then((module) => module.default)
}
export type locales = keyof typeof dictionaries
 
export const getDictionary = async(l?: string) => {
  const locale = (l && Object.keys(dictionaries).includes(l) ? l : 'en') as locales
  return dictionaries[locale]()
}
