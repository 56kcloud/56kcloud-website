import {NextRequest} from 'next/server'
import {defaultLocale, locales} from '../configs/server'

function getLocale(request: NextRequest) {
  const locale = request.headers.get('Accept-Language')
  if (locale && locales.includes(locale)) return locale
  return defaultLocale
}
 
export function middleware(request: NextRequest) {
  const {pathname} = request.nextUrl
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )
 
  if (pathnameHasLocale) return
 
  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  return Response.redirect(request.nextUrl)
}
 
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap|apple-icon.png).*)'
  ]
}
