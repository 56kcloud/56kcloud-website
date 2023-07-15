import {NextResponse} from 'next/server'
import {revalidateTag} from 'next/cache'

export async function GET(request, {params}) {
  try {
    const tag = params.tag
    revalidateTag(tag)
    return NextResponse.json({revalidated: true, now: Date.now()})
  } catch (error) {
    return NextResponse.json({error: error.toString()})
  }
}
