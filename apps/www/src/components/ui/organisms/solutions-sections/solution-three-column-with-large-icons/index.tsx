import {Solution} from '@/models/solution.model'
import FeatureThreeColumnWithLargeIcons from '../../feature-sections/feature-three-column-with-large-icons'

export type SolutionThreeColumnWithLargeIcons = {
  title: string
  subtitle: string
  solutions: Array<Solution>
}

export default function SolutionThreeColumnWithLargeIcons(props: SolutionThreeColumnWithLargeIcons) { 
  const features = props.solutions.map((solution) => {
    return {
      icon: solution.icon,
      title: solution.title,
      description: solution.description,
      link: `/solutions/${solution.slug}`
    }
  })

  return (
    <FeatureThreeColumnWithLargeIcons
      title={props.title}
      subtitle={props.subtitle}
      features={features}/>
  )
}
