import BlogPostList from '@/components/ui/organisms/lists/blog-post'

export default function RelatedBlogPostsSection({title, blogPosts}) {
  return (<div className='flex flex-col w-full'>
    <h1 className='mb-4 text-4xl text-center line-clamp-2 text-grey-dark title'>
      {title}
    </h1>
    <BlogPostList posts={blogPosts}/>
  </div>)
}
