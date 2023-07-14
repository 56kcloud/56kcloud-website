import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/primitives/select'
import {locales} from '../../../../locale'
import {usePathname, useRouter} from 'next/navigation'

export default function LanguageSwitcher() {
  const router = useRouter()
  const pathName = usePathname()
  const currentLocale = pathName.split('/')[1]

  function updateLanguage(lang) {
    router.push(pathName.replace(currentLocale, lang))
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
      {locales.map((locale) => (
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
