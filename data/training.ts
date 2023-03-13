import { Translate } from 'next-translate'
import { DetailsCardProps } from '../components/molecules/details-card'

export function getListDetailsTraining (t: Translate) {
  const listDetails: Array<string> = [
    t('training:listDetail1'),
    t('training:listDetail2'),
    t('training:listDetail3'),
    t('training:listDetail4'),
    t('training:listDetail5')
  ]
  return listDetails
}

export function getDetailsCardsTraining (t) {
  const detailsCards: Array<DetailsCardProps> = [
    {
      icon: '/images/wheel.svg',
      title: t('titleCard1'),
      items: [
        t('training:detail1Card1'),
        t('training:detail2Card1'),
        t('training:detail3Card1'),
        t('training:detail4Card1'),
        t('training:detail5Card1'),
        t('training:detail6Card1'),
        t('training:detail7Card1')
      ]
    },
    {
      icon: '/images/whale.svg',
      title: t('training:titleCard2'),
      items: [
        t('training:detail1Card2'),
        t('training:detail2Card2'),
        t('training:detail3Card2'),
        t('training:detail4Card2'),
        t('training:detail5Card2'),
        t('training:detail6Card2'),
        t('training:detail7Card2'),
        t('training:detail8Card2'),
        t('training:detail9Card2'),
        t('training:detail10Card2')
      ]
    },
    {
      icon: '/images/cloud-white.svg',
      title: t('training:titleCard3'),
      items: [
        t('training:detail1Card3'),
        t('training:detail2Card3'),
        t('training:detail3Card3'),
        t('training:detail4Card3'),
        t('training:detail5Card3')
      ]
    },
    {
      icon: '/images/infinity.svg',
      title: t('training:titleCard4'),
      items: [
        t('training:detail1Card4'),
        t('training:detail2Card4'),
        t('training:detail3Card4'),
        t('training:detail4Card4'),
        t('training:detail5Card4')
      ]
    }
  ]
  return detailsCards
}
