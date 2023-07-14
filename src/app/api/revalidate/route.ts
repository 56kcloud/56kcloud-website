import {NextResponse} from 'next/server'
import {revalidateTag} from 'next/cache'
 
export const dynamic = 'force-dynamic'

export async function GET(request) {
  try {
    const tag = request.nextUrl.searchParams.get('tag')
    revalidateTag(tag)
    return NextResponse.json({revalidated: true, now: Date.now()})
  } catch (error) {
    return NextResponse.json({error: error.toString()})
  }
}
