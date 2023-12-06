import {NextRequest, NextResponse} from 'next/server'
import {defaultLocale, locales} from '../configs/shared'

function getLocale(request: NextRequest) {
  const acceptLanguages = request.headers.get('Accept-Language')?.split(',')
  const locale = acceptLanguages?.find((locale) => locales.includes(locale))
  if (locale) return locale
  return defaultLocale
}
 
export function middleware(request: NextRequest) {
  const {pathname} = request.nextUrl
  let locale = locales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )
  
  if (locale) {
    const response = NextResponse.next()
    response.cookies.set('NEXT_LOCALE', locale)
    return response
  } else {
    const localeFromCookie = request.cookies.get('NEXT_LOCALE')?.value
    localeFromCookie && locales.includes(localeFromCookie) && (locale = localeFromCookie)
    !locale && (locale = getLocale(request))
    request.nextUrl.pathname = `/${locale}${pathname}`
    request.cookies.set('NEXT_LOCALE', locale)
    const response = Response.redirect(request.nextUrl)
    return response
  }
}
 
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap|apple-icon.png).*)'
  ]
}
