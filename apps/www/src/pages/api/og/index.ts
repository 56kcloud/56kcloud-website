import {NextApiRequest, NextApiResponse} from 'next'
import {addAbsoluteURLsInObject} from '@/utils/toolbox'
import ogs from 'open-graph-scraper'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  let url: string | undefined | URL = Array.isArray(req.query['url']) ? req.query['url'][0] : req.query['url']
  
  if (!url) {
    res.status(400).json({message: 'Missing url parameter'})
    return
  }
  url = new URL(url)
  const response = await ogs({url: decodeURI(url.toString())})
  if (response.result) {
    addAbsoluteURLsInObject(response.result, ['favicon', 'ogImage', 'ogUrl'], url.host)
    res.status(200).json(JSON.stringify(response.result))
  } else {
    res.status(404).json({message: 'Not found'})
  }
}
