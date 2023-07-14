import {NextResponse} from 'next/server'
import {defaultLocale, locales} from '../locale'
 
export function middleware(request) {
  const pathname = request.nextUrl.pathname
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  if (pathnameIsMissingLocale) {
    return NextResponse.redirect(
      new URL(`/${defaultLocale}/${pathname}`, request.url)
    )
  }
}
 
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|fonts|images).*)']
}
