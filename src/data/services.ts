import {CloudWhite} from '@/components/svgs/icons/cloud-white'
import {DetailCardProps} from '@/components/molecules/card/detail'
import {Infinity} from '@/components/svgs/icons/infinity'
import {Translate} from 'next-translate'
export function getListDetailsServices(t: Translate) {
  const listDetails: Array<string> = [
    t('services:listDetail1'),
    t('services:listDetail2'),
    t('services:listDetail3'),
    t('services:listDetail4'),
    t('services:listDetail5')
  ]
  return listDetails
}

export function getDetailsCardsServices(t: Translate) {
  const detailsCards: Array<DetailCardProps> = [
    {
      Icon: CloudWhite,
      title: t('services:titleCard1'),
      items: [
        t('services:detail1Card1'),
        t('services:detail2Card1'),
        t('services:detail3Card1'),
        t('services:detail4Card1'),
        t('services:detail5Card1'),
        t('services:detail6Card1')
      ]
    },
    {
      Icon: Infinity,
      title: t('services:titleCard2'),
      items: [
        t('services:detail1Card2'),
        t('services:detail2Card2'),
        t('services:detail3Card2'),
        t('services:detail4Card2'),
        t('services:detail5Card2'),
        t('services:detail6Card2')
      ]
    },
    {
      Icon: CloudWhite,
      title: t('services:titleCard3'),
      items: [
        t('services:detail1Card3'),
        t('services:detail2Card3'),
        t('services:detail3Card3'),
        t('services:detail4Card3'),
        t('services:detail5Card3'),
        t('services:detail6Card3'),
        t('services:detail7Card3'),
        t('services:detail8Card3'),
        t('services:detail9Card3')
      ]
    },
    {
      Icon: CloudWhite,
      title: t('services:titleCard4'),
      items: [
        t('services:detail1Card4'),
        t('services:detail2Card4'),
        t('services:detail3Card4'),
        t('services:detail4Card4'),
        t('services:detail5Card4'),
        t('services:detail6Card4')
      ]
    }
  ]
  return detailsCards
}
