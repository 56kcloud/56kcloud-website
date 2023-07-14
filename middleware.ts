import {NextResponse} from 'next/server'
import type {NextRequest} from 'next/server'

// /es/page-name -> rewrites to -> /es/page-name?lang=es
export function middleware(request: NextRequest) {
  const locale = request.nextUrl.locale
  request.nextUrl.searchParams.set('lang', locale)
  return NextResponse.rewrite(request.nextUrl)
}
