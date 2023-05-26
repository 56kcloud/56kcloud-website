import {
  createPostData,
  getAuthors,
  getPost,
  getPostsTags,
  getPublishedPosts,
  replaceNotionImagesInPostList
} from './apis'
import fs from 'fs'
import path from 'path'

(async() => {
  let authors = await getAuthors()
  let posts = await getPublishedPosts(authors)
  await Promise.all(posts.map(async(post) => {
    await createPostData(await getPost(authors, post.id))
  }))
  posts = await replaceNotionImagesInPostList(posts)
  fs.writeFileSync(path.join(process.cwd(), 'public/blog/posts.json'), JSON.stringify(posts))
  const tags = await getPostsTags(true)
  fs.writeFileSync(path.join(process.cwd(), 'public/blog/tags.json'), JSON.stringify(tags))
})()

