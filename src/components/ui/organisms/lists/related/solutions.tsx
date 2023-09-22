import {Solution} from '@/models/solution.model'
import SolutionList from '../solution'

export type RelatedSolutionsProps = {
  solutions: Array<Solution>
}

export default function RelatedSolutions({solutions}: RelatedSolutionsProps) {
  return (
    <SolutionList
      solutions={solutions}
    />
  )
}
