import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/primitives/select'
import {useRouter} from 'next/router'

export default function LanguageSwitcher() {
  const router = useRouter()
  const currentLocale = router.locale
  
  function updateLanguage(lang) {
    router.push(`${router.pathname}`, `${router.pathname}`, {locale: lang.toLowerCase()})
  }
  
  return <Select
    defaultValue={currentLocale}
    onValueChange={updateLanguage}
  >
    <SelectTrigger
      className={`w-16 font-medium uppercase bg-transparent border-primary-800 hover:bg-primary-100/30
    [&>svg]:text-primary-800 [&>svg]:opacity-100`}>
      <SelectValue/>
    </SelectTrigger>
    <SelectContent>
      {router.locales.map((locale) => (
        <SelectItem
          className='uppercase'
          key={locale}
          value={locale}>
          {locale}
        </SelectItem>
      ))}
    </SelectContent>
  </Select>
}
