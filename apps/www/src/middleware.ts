import {NextRequest, NextResponse} from 'next/server'
 
const PUBLIC_FILE = /\.(.*)$/
 
export async function middleware(req: NextRequest) {
  if (
    req.nextUrl.pathname.startsWith('/_next') ||
    req.nextUrl.pathname.includes('/api/') ||
    PUBLIC_FILE.test(req.nextUrl.pathname)
  ) {
    return
  }
  if (req.nextUrl.locale !== 'en') {
    req.nextUrl.locale = 'en'
    return NextResponse.redirect(req.nextUrl)
  }
}
