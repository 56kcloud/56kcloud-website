import {Article} from '@/models/article.model'
import ArticleList from '@/components/ui/organisms/lists/article'
import RelatedList from './base'

export type RelatedArticlesProps = {
  articles: Array<Article>
}

export default function RelatedArticles({articles}: RelatedArticlesProps) {
  return (<RelatedList
    title={'Related Articles'}
    subtitle={'Articles that may be of interest to you'}
  >
    <ArticleList articles={articles}/>
  </RelatedList>)
}
