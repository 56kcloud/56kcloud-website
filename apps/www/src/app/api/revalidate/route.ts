import {revalidateTag} from 'next/cache'

export async function GET() {
  revalidateTag('strapi')
  return new Response('Strapi tag revalidated')
}
