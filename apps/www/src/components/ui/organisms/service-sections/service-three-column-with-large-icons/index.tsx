import {Service} from '@/models/service.model'
// eslint-disable-next-line max-len
import FeatureThreeColumnWithLargeIcons from '@/components/ui/organisms/feature-sections/feature-three-column-with-large-icons'

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
    <FeatureThreeColumnWithLargeIcons
      title={props.title}
      subtitle={props.subtitle}
      features={features}
      titleAlignment='center'
    />
  )
}
