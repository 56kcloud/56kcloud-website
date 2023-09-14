import {Article} from '@/models/article.model'
import ArticleList from '@/components/ui/organisms/lists/article'

export type RelatedArticlesProps = {
  title: string
  articles: Array<Article>
}

export default function RelatedArticles({title, articles}: RelatedArticlesProps) {
  return (<div className='flex flex-col w-full'>
    <h1 className='mb-4 text-4xl text-center line-clamp-2 text-grey-dark title'>
      {title}
    </h1>
    <ArticleList articles={articles}/>
  </div>)
}
