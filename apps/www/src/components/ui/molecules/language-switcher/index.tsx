'use client'

import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/primitives/select'
import {locales} from '../../../../../configs/shared'
import {useParams, usePathname, useRouter} from 'next/navigation'

export default function LanguageSwitcher() {
  const {locale} = useParams()
  const pathname = usePathname()
  const router = useRouter()

  function updateLanguage(lang: string) {
    let updatedPathname: string | string[] = pathname.split('/')
    updatedPathname.splice(1, 1, lang)
    updatedPathname = updatedPathname.join('/')
    router.push(updatedPathname)
  }
  
  return <Select
    defaultValue={locale.toString()}
    onValueChange={updateLanguage}
  >
    <SelectTrigger
      className={'uppercase w-20 rounded-md border-0 bg-slate-900 px-3.5 py-2 text-slate-400 font-light shadow-sm \
       ring-1 ring-inset ring-slate-700/60 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm \
       sm:leading-6'}>
      <SelectValue/>
    </SelectTrigger>
    <SelectContent>
      {locales?.map((locale) => (
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
