import {Solution} from '@/models/solution.model'
import FeatureOneColumn from '@/components/ui/organisms/feature-sections/feature-one-column'

export type SolutionOneColumnProps = {
  title: string
  subtitle: string
  solutions: Array<Solution>
}

export default function SolutionOneColumn(props: SolutionOneColumnProps) {
  const features = props.solutions.map((solution) => {
    return {
      icon: solution.icon,
      title: solution.title,
      description: solution.description,
      link: `/solutions/${solution.slug}`
    }
  })

  return <FeatureOneColumn title={props.title} subtitle={props.subtitle} features={features} />
}
