'use client'

import * as React from 'react'
import {NavigationItem} from '@/models/navigation-item.model'
import {
  NavigationMenu as NavigationMenuContainer,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from '@/components/primitives/navigation-menu'
import {cn} from '@/utils/toolbox'
import Button from '@/components/ui/atoms/button'
import Link from 'next/link'

export type NavigationMenuProps = {
  navigationItems: Array<NavigationItem>
  onLinkClick?: () => void
  orientation?: 'horizontal' | 'vertical'
}

export function NavigationMenu({navigationItems, orientation = 'horizontal', onLinkClick}: NavigationMenuProps) {
  console.log(navigationItems)
  return orientation === 'horizontal' ? (
    <NavigationMenuContainer className='gap-x-12'>
      {navigationItems.map((navigationItem, index) =>
        navigationItem.links && navigationItem.links.length > 1 ? (
          <NavigationMenuList key={index}>
            <NavigationMenuItem>
              <Button
                asChild
                tone='primary'
                variant='link'
                className='text-slate-50 !px-0 !py-0 text-sm font-medium'
              >
                <NavigationMenuTrigger className='gap-1'>{navigationItem.title}</NavigationMenuTrigger>
              </Button>
              <NavigationMenuContent
                className='px-6 py-5 bg-gradient-to-t from-slate-800 to-slate-900 border \
                border-slate-800'
              >
                <ul className='space-y-3 w-52'>
                  {navigationItem.links &&
                    navigationItem.links.map((link, index) => (
                      <ListItem
                        key={index}
                        href={link.link}
                        className='text-slate-400 text-sm leading-[18px] font-medium hover:text-slate-50'
                      >
                        {link.title}
                      </ListItem>
                    ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        ) : (
          <Button
            key={index}
            asChild
            tone='primary'
            variant='link'
            className='text-slate-50 !px-0 !py-0 text-sm font-semibold'
          >
            <Link href={navigationItem.link || ''}>{navigationItem.title}</Link>
          </Button>
        )
      )}
    </NavigationMenuContainer>
  ) : (
    <>
      <div className='flex-col space-y-6'>
        {navigationItems.map((navigationItem, index) => (
          <div key={index}>
            <p className='text-sm font-medium text-slate-50'>{navigationItem.title}</p>
            <ul
              className={cn(
                !navigationItem.links || navigationItem.links.length === 0 ? 'mt-0' : 'mt-4',
                'space-y-4 w-80 flex flex-col'
              )}
            >
              {navigationItem.links &&
                navigationItem.links.map((link, index) => (
                  <Button
                    key={index}
                    asChild
                    tone='primary'
                    variant='link'
                    className='text-sm font-medium text-slate-400 hover:text-slate-50'
                  >
                    <Link
                      href={link.link}
                      onClick={onLinkClick}
                    >
                      {link.title}
                    </Link>
                  </Button>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  )
}

export const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(
  ({className, title, children, href}, ref) => {
    return (
      <li>
        <NavigationMenuLink
          asChild
          ref={ref}
        >
          <Button
            asChild
            tone='primary'
            variant='link'
            align='start'
            className={className}
          >
            <Link href={href || ''}>
              {title}
              {children}
            </Link>
          </Button>
        </NavigationMenuLink>
      </li>
    )
  }
)
ListItem.displayName = 'ListItem'
