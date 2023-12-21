import {NextResponse} from 'next/server'
import {revalidateTag} from 'next/cache'

export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': 'https://cms.56k.cloud',
        'Access-Control-Allow-Methods': 'OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization'
      }
    }
  )
}

export async function GET() {
  revalidateTag('strapi')
  return new Response(
    'Strapi tag revalidated',
    {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': 'https://cms.56k.cloud',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization'
      }
    }
  )
}
