import {Service} from '@/models/service.model'
import RelatedList from './base'
import ServiceList from '../service'
import useTranslation from 'next-translate/useTranslation'

export type RelatedServicesProps = {
  services: Array<Service>
}

export default function RelatedServices({services}: RelatedServicesProps) {
  const {t} = useTranslation('common')
  return (<RelatedList
    title={t('relatedServicesTitle')}
    subtitle={t('relatedServicesSubtitle')}
  >
    <ServiceList services={services}/>
  </RelatedList>)
}
