import {NextResponse} from 'next/server'
import {revalidatePath} from 'next/cache'

export async function GET(request, {params}) {
  try {
    const tag = params.tag
    console.log('REVALIDATE TAG', tag)
    revalidatePath('/[lang]')
    return NextResponse.json({revalidated: true, now: Date.now()})
  } catch (error) {
    return NextResponse.json({error: error.toString()})
  }
}
