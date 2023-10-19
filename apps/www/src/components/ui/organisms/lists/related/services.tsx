import {Service} from '@/models/service.model'
import ServiceList from '../service'

export type RelatedServicesProps = {
  services: Array<Service>
}

export default function RelatedServices({services}: RelatedServicesProps) {
  return (
    <ServiceList
      services={services}
    />
  )
}
