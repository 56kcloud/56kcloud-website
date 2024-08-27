import {addAbsoluteURLsInObject} from '@/utils/toolbox'
import ogs from 'open-graph-scraper'

export async function GET(request: Request) {
  const urlParam = new URL(request.url).searchParams.get('url')
  let url: string | undefined | URL = Array.isArray(urlParam) ? urlParam[0] : urlParam

  if (!url) {
    return new Response('Missing url parameter', {
      status: 400
    })
  }

  try {
    url = new URL(url)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return new Response('Invalid url parameter', {
      status: 400
    })
  }

  const response = await ogs({url: decodeURI(url.toString())})
  if (response.result) {
    addAbsoluteURLsInObject(response.result, ['favicon', 'ogImage', 'ogUrl'], url.host)
    return new Response(JSON.stringify(response.result), {
      status: 200
    })
  } else {
    return new Response('Not found', {
      status: 404
    })
  }
}
