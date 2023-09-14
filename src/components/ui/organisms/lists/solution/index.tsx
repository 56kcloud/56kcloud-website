import {Solution} from '@/models/solution.model'
import MasonryLayout from '../masonry'
import SolutionCard from '@/components/ui/molecules/cards/solution'

export type SolutionListProps = {
  solutions: Array<Solution>
}

export default function SolutionList({solutions}: SolutionListProps) {
  return (
    <MasonryLayout>
      {solutions.map((solution, index) => (
        <SolutionCard
          key={index}
          solution={solution}
        />
      ))}
    </MasonryLayout>
  )
}
