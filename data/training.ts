import { DetailsCardProps } from '../components/molecules/details-card'

export function getListDetailsTraining (t) {
  const listDetails: Array<string> = [
    t('listDetail1'),
    t('listDetail2'),
    t('listDetail3'),
    t('listDetail4'),
    t('listDetail5')
  ]
  return listDetails
}

export function getDetailsCardsTraining (t) {
  const detailsCards: Array<DetailsCardProps> = [
    {
      icon: '/images/wheel.svg',
      title: t('titleCard1'),
      items: [
        t('detail1Card1'),
        t('detail2Card1'),
        t('detail3Card1'),
        t('detail4Card1'),
        t('detail5Card1'),
        t('detail6Card1'),
        t('detail7Card1')
      ]
    },
    {
      icon: '/images/whale.svg',
      title: t('titleCard2'),
      items: [
        t('detail1Card2'),
        t('detail2Card2'),
        t('detail3Card2'),
        t('detail4Card2'),
        t('detail5Card2'),
        t('detail6Card2'),
        t('detail7Card2'),
        t('detail8Card2'),
        t('detail9Card2'),
        t('detail10Card2')
      ]
    },
    {
      icon: '/images/cloud-white.svg',
      title: t('titleCard3'),
      items: [
        t('detail1Card3'),
        t('detail2Card3'),
        t('detail3Card3'),
        t('detail4Card3'),
        t('detail5Card3')
      ]
    },
    {
      icon: '/images/infinity.svg',
      title: t('titleCard4'),
      items: [
        t('detail1Card4'),
        t('detail2Card4'),
        t('detail3Card4'),
        t('detail4Card4'),
        t('detail5Card4')
      ]
    }
  ]
  return detailsCards
}
