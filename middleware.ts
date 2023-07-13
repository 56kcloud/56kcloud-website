import {NextResponse} from 'next/server'
import i18n from './i18n'
import type {NextRequest} from 'next/server'

// /es/page-name -> rewrites to -> /es/page-name?lang=es
export function middleware(request: NextRequest) {
  const locale = request.nextUrl.locale || i18n.defaultLocale
  request.nextUrl.searchParams.set('lang', locale)
  return NextResponse.rewrite(request.nextUrl)
}
