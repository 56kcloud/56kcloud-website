import {Solution} from '@/models/solution.model'
import RelatedList from './base'
import SolutionList from '../solution'
import useTranslation from 'next-translate/useTranslation'

export type RelatedSolutionsProps = {
  solutions: Array<Solution>
}

export default function RelatedSolutions({solutions}: RelatedSolutionsProps) {
  const {t} = useTranslation('common')
  return (<RelatedList
    title={t('relatedSolutionsTitle')}
    subtitle={t('relatedSolutionsSubtitle')}
  >
    <SolutionList solutions={solutions}/>
  </RelatedList>)
}
