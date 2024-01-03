'use client'

import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/primitives/select'
import {locales} from '../../../../../configs/shared'
import {useParams, usePathname, useRouter} from 'next/navigation'
import Button from '../../atoms/button'
import Link from 'next/link'

export default function LanguageSwitcher({mobileMenuOpen}: {mobileMenuOpen: boolean}) {
  const {locale} = useParams()
  const pathname = usePathname()
  const router = useRouter()

  function updateLanguage(lang: string, event?: React.MouseEvent<HTMLElement>) {
    if (event) event.preventDefault()
    let updatedPathname: string | string[] = pathname.split('/')
    updatedPathname.splice(1, 1, lang)
    updatedPathname = updatedPathname.join('/')
    router.push(updatedPathname)
  }

  const pathMatcher = (path: string) => {
    return pathname.includes(path)
  }

  return mobileMenuOpen ? (
    <div className='flex justify-start w-full h-auto p-0 pt-4 border-t rounded-none border-slate-800 gap-x-8'>
      {locales.map((locale) => (
        <Button
          asChild
          key={locale}
          tone='secondary'
          variant='link'
          className='p-0 text-base text-gray-400 uppercase data-[state=active]:text-white hover:text-white'
          data-active={pathMatcher(locale)}
        >
          <Link href={locale} onClick={(e) => updateLanguage(locale, e)}>
            {locale}
          </Link>
        </Button>
      ))}
    </div>
  ) : (
    <Select defaultValue={locale.toString()} onValueChange={updateLanguage}>
      <SelectTrigger
        className={
          'uppercase w-[72px] border-0 bg-slate-900 text-white font-normal focus:ring-2 focus:ring-inset \
      focus:ring-primary-500 sm:text-base sm:leading-6 px-3 py-1'
        }
      >
        <SelectValue />
      </SelectTrigger>
      <SelectContent className='min-w-0 border-0 bg-slate-800 text-slate-400'>
        {locales?.map((locale) => (
          <SelectItem className='w-[72px] uppercase focus:text-slate-900 focus:bg-sky-400' key={locale} value={locale}>
            {locale}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
