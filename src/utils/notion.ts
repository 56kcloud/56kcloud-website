import {Abortable} from 'events'
import {Client} from '@notionhq/client'
import {Mode, ObjectEncodingOptions, OpenMode, promises as fs} from 'fs'
import {authorsDbId, notionKey, postsDbId} from '../../config'
import {retrieveBlocksChildren} from 'notion-to-tailwind'
import imageSize from 'buffer-image-size'
import path from 'path'

const notion = new Client({auth: notionKey})

const notionS3Regex = /https:\/\/s3\.us-west-2\.amazonaws\.com\/secure\.notion-static\.com\/[^\"]+"/g
const publicPostsPath = 'public/blog/posts'

export function getFileName(url, split=false) {
  const fileName = decodeURI(url.split('/').pop().split('?')[0])
  const extensionIndex = fileName.lastIndexOf('.')
  return split ? [fileName.slice(0, extensionIndex), fileName.slice(extensionIndex)] : fileName
}

export async function downloadAndReplaceNotionImages(object, publicPath) {
  const completePath = path.join(process.cwd(), 'public', publicPath)
  fs.mkdir(completePath, {recursive: true})
  const matches = JSON.stringify(object).match(notionS3Regex)
  for (let url of matches) {
    url = url.replaceAll('"', '')
    const res = await fetch(url)
    const buffer = Buffer.from(await res.arrayBuffer())
    const dimensions = imageSize(buffer)
    const [name, ext] = getFileName(url, true)
    const fileName = `${name}-${dimensions.width}x${dimensions.height}${ext}`
    object = JSON.parse(JSON.stringify(object).replaceAll(url, path.join(publicPath, fileName)))
    fs.writeFile(path.join(completePath, fileName), buffer)
  }
  return object
}

export async function replaceNotionImagesInPostList(list) {
  const posts = []
  for (const post of list) {
    const postSlug = post.properties.slug.rich_text[0].plain_text
    const matches = JSON.stringify(post).match(notionS3Regex)
    let stringifiedPost = JSON.stringify(post)
    for (let url of matches) {
      url = url.replaceAll('"', '')
      const base = getFileName(url, true)[0].toString()
      const fileName = (await fs.readdir(path.join(process.cwd(), `${publicPostsPath}/${postSlug}/`)))
        .filter(image => image.includes(base))[0]
      stringifiedPost = stringifiedPost.replaceAll(url, `${publicPostsPath}/${postSlug}/${fileName}`)
    }
    posts.push(JSON.parse(stringifiedPost))
  }
  return posts
}

export async function createPostData(data) {
  const slug = data.post.properties.slug.rich_text[0].plain_text
  const options: (ObjectEncodingOptions & { mode?: Mode; flag?: OpenMode; }
   & Abortable) = {encoding:'utf8', flag:'w'}
  fs.mkdir(path.join(process.cwd(), publicPostsPath), {recursive: true})
  fs.mkdir(path.join(process.cwd(), `${publicPostsPath}/${slug}`), {recursive: true})
  data = await downloadAndReplaceNotionImages(data, `${publicPostsPath}/${slug}`)
  fs.writeFile(path.join(process.cwd(), `${publicPostsPath}/${slug}.json`), JSON.stringify(data), options)
}

export async function getAuthors() {
  return (await notion.databases.query({database_id: authorsDbId})).results || []
}

export async function getPublishedPosts() {
  let authors = await getAuthors()
  authors = await downloadAndReplaceNotionImages(authors, '/public/blog/authors')
  const postsQuery = (await notion.databases.query({database_id: postsDbId,
    sorts: [
      {
        property: 'publishedOn',
        direction: 'descending'
      }
    ]
  })).results || []

  return postsQuery.map(post => {
    if (post['properties'].author.relation.length > 0) {
      post['properties'].author = authors[
        authors.map(author => author.id).indexOf(post['properties'].author.relation[0].id)
      ]
    }
    return post
  }).filter(post => post['properties'].status.select.name === 'published')
}

export async function getPost(postId) {
  const [post, children] = await Promise.all([
    notion.pages.retrieve({page_id: postId}),
    notion.blocks.children.list({block_id: postId})
  ])
  const blocks = children.results
  await retrieveBlocksChildren(notion, blocks)
  return {post, blocks}
}

export async function getPostsTags(withAll=false) {
  const tags = (await notion.databases.retrieve({database_id: postsDbId})).properties.tags['multi_select'].options
  withAll && tags.unshift({
    name: 'all',
    color: 'gray'
  })
  return tags
}
