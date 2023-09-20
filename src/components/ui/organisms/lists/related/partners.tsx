import {Partner} from '@/models/partner'
import PartnerList from '../partner'
import RelatedList from './base'
import useTranslation from 'next-translate/useTranslation'

export type RelatedPartnersProps = {
  partners: Array<Partner>
}

export default function RelatedPartners({partners}: RelatedPartnersProps) {
  const {t} = useTranslation('common')
  return (<RelatedList
    title={t('relatedPartnersTitle')}
    subtitle={t('relatedPartnersSubtitle')}
  >
    <PartnerList partners={partners}/>
  </RelatedList>)
}
