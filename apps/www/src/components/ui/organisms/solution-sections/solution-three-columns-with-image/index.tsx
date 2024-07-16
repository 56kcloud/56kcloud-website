import {Solution} from '@/models/solution.model'
import FeatureThreeColumnsWithImage from '../../feature-sections/feature-three-columns-with-image'

export type SolutionThreeColumnsWithImageProps = {
  title: string
  subtitle: string
  solutions: Array<Solution>
}

export default function SolutionThreeColumnsWithImage(props: SolutionThreeColumnsWithImageProps) {
  const features = props.solutions.map((solution) => {
    return {
      image: solution.image,
      title: solution.title,
      description: solution.description,
      link: `/solutions/${solution.slug}`,
      cta: solution.cta
    }
  })

  return (
    <FeatureThreeColumnsWithImage
      title={props.title}
      subtitle={props.subtitle}
      features={features}
    />
  )
}
