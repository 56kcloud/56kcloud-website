import {Service} from '@/models/service.model'
import IllustrationCardList from '../illustration'

export type ServiceListProps = {
  services: Array<Service>
  title?: string
}

export default function ServiceList({services, title}: ServiceListProps) {
  const cards =  services.map((service, index) => ({
    title: service.title,
    description: service.description,
    illustration: service.image,
    number: index+1,
    href: `/services/${service.slug}`
  }))

  return (
    <IllustrationCardList
      title={title || 'Services'}
      illustrationCards={cards}
    />
  )
}
