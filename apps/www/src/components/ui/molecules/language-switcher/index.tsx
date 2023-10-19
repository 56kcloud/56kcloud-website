import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/primitives/select'
import {useRouter} from 'next/router'

export default function LanguageSwitcher() {
  const router = useRouter()
  const currentLocale = router.locale
  
  function updateLanguage(lang: string) {
    router.push(`${router.pathname}`, `${router.pathname}`, {locale: lang.toLowerCase()})
  }
  
  return <Select
    defaultValue={currentLocale}
    onValueChange={updateLanguage}
  >
    <SelectTrigger
      className={`w-auto font-medium uppercase border-transparent bg-transparent hover:bg-primary-100/30
    [&>svg]:text-primary-800 [&>svg]:opacity-100 px-4 2xl:px-6 text-base h-auto`}>
      <SelectValue/>
    </SelectTrigger>
    <SelectContent>
      {router.locales?.map((locale) => (
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
