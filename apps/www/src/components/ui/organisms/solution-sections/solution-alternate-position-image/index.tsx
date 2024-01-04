import {Solution} from '@/models/solution.model'
import FeatureAlternatePositionImage from '@/components/ui/organisms/feature-sections/feature-alternate-position-image'

export type SolutionAlternatePositionImageProps = {
  title: string
  subtitle: string
  solutions: Array<Solution>
}

export default function SolutionAlternatePositionImage(props: SolutionAlternatePositionImageProps) {
  const features = props.solutions.map((solution) => {
    return {
      icon: solution.icon,
      title: solution.title,
      description: solution.description,
      link: `/solutions/${solution.slug}`
    }
  })

  return (
    <FeatureAlternatePositionImage
      title={props.title}
      subtitle={props.subtitle}
      features={features}
    />
  )
}
