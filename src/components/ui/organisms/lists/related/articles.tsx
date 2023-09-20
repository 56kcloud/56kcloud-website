import {Article} from '@/models/article.model'
import ArticleList from '@/components/ui/organisms/lists/article'
import RelatedList from './base'
import useTranslation from 'next-translate/useTranslation'

export type RelatedArticlesProps = {
  articles: Array<Article>
}

export default function RelatedArticles({articles}: RelatedArticlesProps) {
  const {t} = useTranslation('common')
  return (<RelatedList
    title={t('relatedArticlesTitle')}
    subtitle={t('relatedArticlesSubtitle')}
  >
    <ArticleList articles={articles}/>
  </RelatedList>)
}
