import {promises as fs} from 'fs'
import path from 'path'
export default async function handler(req, res) {
  const file = await fs.readFile(path.join(process.cwd(), '/blog/posts', `${req.query.slug}`, 'post.json'), 'utf8')
  res.status(200).json(JSON.parse(file))
}
