import {Solution} from '@/models/solution.model'
import IllustrationCardList from '../illustration'

export type SolutionListProps = {
  solutions: Array<Solution>,
  title?: string
}

export default function SolutionList({solutions, title}: SolutionListProps) {
  const cards =  solutions.map((solution, index) => ({
    title: solution.title,
    description: solution.description,
    illustration: solution.image,
    number: index+1,
    href: `/solutions/${solution.slug}`
  }))

  return (
    <IllustrationCardList
      theme='light'
      title={title || 'Solutions'}
      illustrationCards={cards}
    />
  )
}
