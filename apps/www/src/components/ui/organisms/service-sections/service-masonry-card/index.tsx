import {Service} from '@/models/service.model'
import FeatureAlternatePositionImage from '../../feature-sections/feature-alternate-position-image'

export type ServiceMasonryCardProps = {
  title: string
  subtitle: string
  services: Array<Service>
}

export default function ServiceMasonryCard(props: ServiceMasonryCardProps) {
  const features = props.services.map((service) => {
    return {
      image: service.image,
      title: service.title,
      description: service.description,
      link: `/services/${service.slug}`,
      cta: service.cta
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
