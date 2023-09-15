import {Solution} from '@/models/solution.model'
import RelatedList from './base'
import SolutionList from '../solution'

export type RelatedSolutionsProps = {
  solutions: Array<Solution>
}

export default function RelatedSolutions({solutions}: RelatedSolutionsProps) {
  return (<RelatedList
    title={'Related Solutions'}
    subtitle={'Solutions that may be of interest to you'}
  >
    <SolutionList solutions={solutions}/>
  </RelatedList>)
}
