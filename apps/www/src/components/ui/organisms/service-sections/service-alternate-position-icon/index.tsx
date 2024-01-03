import {Service} from '@/models/service.model'
import FeatureAlternatePositionIcon from '@/components/ui/organisms/feature-sections/feature-alternate-position-icon'

export type ServiceAlternatePositionIconProps = {
  title: string
  subtitle: string
  services: Array<Service>
}

export default function ServiceAlternatePositionIcon(props: ServiceAlternatePositionIconProps) {
  const features = props.services.map((service) => {
    return {
      icon: service.icon,
      title: service.title,
      description: service.description,
      link: `/services/${service.slug}`
    }
  })

  return <FeatureAlternatePositionIcon title={props.title} subtitle={props.subtitle} features={features} />
}
