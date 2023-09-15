import {Partner} from '@/models/partner'
import PartnerList from '../partner'
import RelatedList from './base'

export type RelatedPartnersProps = {
  partners: Array<Partner>
}

export default function RelatedPartners({partners}: RelatedPartnersProps) {
  return (<RelatedList
    title='Related partners'
    subtitle='partners that may be of interest to you'
  >
    <PartnerList partners={partners}/>
  </RelatedList>)
}
