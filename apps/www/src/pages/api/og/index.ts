import {NextApiRequest, NextApiResponse} from 'next'
import ogs from 'open-graph-scraper'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const url = Array.isArray(req.query['url']) ? req.query['url'][0] : req.query['url']
  if (!url) {
    res.status(400).json({message: 'Missing url parameter'})
    return
  }
  const response = await ogs({url: decodeURI(url)})
  if (response.result) {
    res.status(200).json(JSON.stringify(response.result))
  } else {
    res.status(404).json({message: 'Not found'})
  }
}
