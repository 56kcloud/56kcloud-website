import {NextResponse} from 'next/server'
// import {revalidateTag} from 'next/cache'
import {faker} from '@faker-js/faker'
export const dynamic = 'force-dynamic'

export async function GET() {
  
  // try {
  //   const tag = params.tag
  //   revalidateTag(tag)
  //   return NextResponse.json({revalidated: true, now: Date.now()})
  // } catch (error) {
  //   return NextResponse.json({error: error.toString()})
  // }
  return NextResponse.json({now: faker.date.anytime()})
}
