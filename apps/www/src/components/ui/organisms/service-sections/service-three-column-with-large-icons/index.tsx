import {Service} from '@/models/service.model'
import FeatureAlternatePositionIcon from '@/components/ui/organisms/feature-sections/feature-alternate-position-icon'

export type ServiceThreeColumnWithLargeIcons = {
  title: string
  subtitle: string
  services: Array<Service>
}

export default function ServiceThreeColumnWithLargeIcons(props: ServiceThreeColumnWithLargeIcons) { 
  const features = props.services.map((service) => {
    return {
      icon: service.icon,
      title: service.title,
      description: service.description,
      link: `/services/${service.slug}`
    }
  })

  return (
    <FeatureAlternatePositionIcon
      title={props.title}
      subtitle={props.subtitle}
      features={features}/>
  )
}
