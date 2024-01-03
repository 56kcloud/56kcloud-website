import {NextRequest} from 'next/server'
import {defaultLocale} from '../../../../configs/shared'
import {draftMode} from 'next/headers'
import {redirect} from 'next/navigation'

export async function GET(request: NextRequest) {
  const params = new URL(request.url).searchParams
  let url = params.get('url')
  const splitUrl = url?.split('/')
  if (splitUrl && splitUrl[1] === '') {
    splitUrl.splice(1, 1, defaultLocale)
    url = splitUrl?.join('/')
  }
  console.log(url)
  draftMode().enable()
  return redirect(url || '/')
}
