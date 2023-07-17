import {NextResponse} from 'next/server'
// import {revalidateTag} from 'next/cache'
import {faker} from '@faker-js/faker'

export const dynamic = 'force-dynamic'

export function GET() {
  
  // try {
  //   const tag = params.tag
  //   revalidateTag(tag)
  //   return NextResponse.json({revalidated: true, now: Date.now()})
  // } catch (error) {
  //   return NextResponse.json({error: error.toString()})
  // }
  const date = faker.date.anytime()
  console.log('GET DATE', date)
  return NextResponse.json({now: date})
}
