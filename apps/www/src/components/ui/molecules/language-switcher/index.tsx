'use client'

import {ListItem} from '../navigation-menu'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger
} from '@/components/primitives/navigation-menu'
import {defaultLocale, locales} from '../../../../../configs/shared'
import {useParams, usePathname, useRouter} from 'next/navigation'
import Button from '../../atoms/button'
import Link from 'next/link'

export type LanguageSwitcherProps = {
  mobileMenuOpen: boolean
}

export default function LanguageSwitcher({mobileMenuOpen}: LanguageSwitcherProps) {
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
    <div className='w-full h-auto flex justify-start gap-x-8 mt-8 p-0 pt-4 border-t rounded-none border-slate-800'>
      {locales.map((locale) => (
        <Button
          asChild
          key={locale}
          tone='secondary'
          variant='link'
          className='p-0 text-base text-slate-400 uppercase data-[state=active]:text-slate-50 hover:text-slate-50'
          data-active={pathMatcher(locale)}
        >
          <Link
            href={locale}
            onClick={(e) => updateLanguage(locale, e)}
          >
            {locale}
          </Link>
        </Button>
      ))}
    </div>
  ) : (
    <NavigationMenu
      defaultValue={locale?.toString() || defaultLocale}
      aria-label='Language Switcher'
    >
      <NavigationMenuList>
        <NavigationMenuItem>
          <Button
            asChild
            tone='primary'
            variant='default'
            className='px-5 text-slate-50 text-sm font-medium bg-transparent hover:text-slate-50 \
            hover:bg-slate-800'
          >
            <NavigationMenuTrigger className='uppercase gap-1'>{locale}</NavigationMenuTrigger>
          </Button>
          <NavigationMenuContent
            className='!w-24 px-6 py-5 bg-gradient-to-t from-slate-800 to-slate-900 border \
            border-slate-800'
          >
            <ul className='space-y-3 w-52'>
              {locales.map((localeItem) => (
                <ListItem key={localeItem}>
                  <Button
                    asChild
                    tone='secondary'
                    variant='link'
                    className='p-0 text-sm text-gray-400 uppercase data-[state=active]:text-slate-50 \
                    hover:text-slate-50'
                    data-active={pathMatcher(localeItem)}
                  >
                    <Link
                      href={`/${locale}`}
                      onClick={(e) => updateLanguage(localeItem, e)}
                    >
                      {localeItem}
                    </Link>
                  </Button>
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
