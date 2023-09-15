import {Service} from '@/models/service.model'
import MasonryLayout from '../masonry'
import ServiceCard from '@/components/ui/molecules/cards/service'

export type ServiceListProps = {
  services: Array<Service>
}

export default function ServiceList({services}: ServiceListProps) {
  return (
    <MasonryLayout>
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          service={service}
        />
      ))}
    </MasonryLayout>
  )
}
