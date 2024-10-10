import {Partner} from '@/models/partner.model'
import LogoCloudsSimpleWithTitle from '../../logo-clouds/logo-clouds-simple-with-title'

export type PartnerLogosSimpleWithTitleProps = {
  surtitle: string
  title: string
  partners: Array<Partner>
}

export default function PartnerLogosSimpleWithTitle(props: PartnerLogosSimpleWithTitleProps) {
  return (
    <LogoCloudsSimpleWithTitle
      surtitle={props.surtitle}
      title={props.title}
      logos={props.partners.map((partner) => partner.image)}
    />
  )
}
