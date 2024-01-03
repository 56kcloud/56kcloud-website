import {Solution} from '@/models/solution.model'
import FeatureThreeColumnWithLargeIcons from '@/components/ui/organisms/feature-sections/feature-three-column-with-large-icons'

export type SolutionThreeColumnWithLargeIconsProps = {
  title: string
  subtitle: string
  solutions: Array<Solution>
}

export default function SolutionThreeColumnWithLargeIcons(props: SolutionThreeColumnWithLargeIconsProps) {
  const features = props.solutions.map((solution) => {
    return {
      icon: solution.icon,
      title: solution.title,
      description: solution.description,
      link: `/solutions/${solution.slug}`
    }
  })

  return <FeatureThreeColumnWithLargeIcons title={props.title} subtitle={props.subtitle} features={features} />
}
