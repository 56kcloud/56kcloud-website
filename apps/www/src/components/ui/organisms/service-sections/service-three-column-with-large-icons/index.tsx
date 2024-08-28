import {Service} from '@/models/service.model'
import FeatureThreeColumnWithLargeIcons from '@/components/ui/organisms/feature-sections/feature-three-column-with-large-icons'

export type ServiceThreeColumnWithLargeIconsProps = {
  title: string
  subtitle: string
  services: Array<Service>
}

export default function ServiceThreeColumnWithLargeIcons(props: ServiceThreeColumnWithLargeIconsProps) {
  const features = props.services.map((service) => {
    return {
      icon: service.icon,
      title: service.title,
      description: service.description,
      link: `/services/${service.slug}`,
      cta: service.cta
    }
  })

  return (
    <FeatureThreeColumnWithLargeIcons
      title={props.title}
      subtitle={props.subtitle}
      features={features}
    />
  )
}
