import {Partner} from '@/models/partner'
import PartnerCard from '@/components/ui/molecules/cards/partner'

export default function PartnerList({partners}: {partners: Array<Partner>}) {
  return (
    <ul className='flex flex-wrap justify-center'>
      {partners?.map((partner) => (
        <PartnerCard
          partner={partner}
          key={partner.name}
        />
      ))}
    </ul>
  )
}
