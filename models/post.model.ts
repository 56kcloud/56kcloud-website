export type PostPropsImpl = {
  id: string
  badge: string
  postImage: string
  title: string
  description: string
  authorImage: string
  authorName: string
  createdAt: string
  readTime: string
}

export class PostProps {
  id: string
  badge: string
  postImage: string
  title: string
  description: string
  authorImage: string
  authorName: string
  createdAt: string
  readTime: string

  constructor (props: PostPropsImpl) {
    this.id = props.id
    this.badge = props.badge
    this.postImage = props.postImage
    this.title = props.title
    this.description = props.description
    this.authorImage = props.authorImage
    this.authorName = props.authorName
    this.createdAt = props.createdAt
    this.readTime = props.readTime
  }
}
