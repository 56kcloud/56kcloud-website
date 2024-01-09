import {Partner} from '@/models/partner.model'
import LogoCloudsSimpleWithTitle from '../../logo-clouds/logo-clouds-simple-with-title'

export type PartnerLogosSimpleWithTitleProps = {
  title: string
  partners: Array<Partner>
}

export default function PartnerLogosSimpleWithTitle(props: PartnerLogosSimpleWithTitleProps) {
  return (
    <LogoCloudsSimpleWithTitle
      title={props.title}
      images={props.partners.map((partner) => partner.image)}
    />
  )
}
