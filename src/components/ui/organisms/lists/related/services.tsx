import {Service} from '@/models/service.model'
import RelatedList from './base'
import ServiceList from '../service'

export type RelatedServicesProps = {
  services: Array<Service>
}

export default function RelatedServices({services}: RelatedServicesProps) {
  return (<RelatedList
    title={'Related Services'}
    subtitle={'Services that may be of interest to you'}
  >
    <ServiceList services={services}/>
  </RelatedList>)
}
