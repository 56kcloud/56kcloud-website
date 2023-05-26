import ogs from 'open-graph-scraper'

export default async function handler(req, res) {
  const response = await ogs({url: decodeURI(req.query.url)})
  if (response.result) {
    res.status(200).json(JSON.stringify(response.result))
  } else {
    res.status(404).json({message: 'Not found'})
  }
}
