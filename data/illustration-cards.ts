import { Translate } from 'next-translate'
import { CardPropsImpl } from '../models/Card.model'

export function getDarkIllustrationCardsHome (t: Translate) {
  const darkIllustrationCardsHome: Array<CardPropsImpl> = [
    {
      number: '01',
      image: '/images/automation.png',
      icon: '/images/automation-icon.png',
      title: t('titleCard1'),
      description: t('descriptionCard1')
    },
    {
      number: '02',
      image: '/images/cloud.png',
      icon: '/images/cloud-icon.png',
      title: 'Cloud',
      description: t('descriptionCard2'),
      alignment: 'right'
    },
    {
      number: '03',
      image: '/images/dockers.png',
      icon: '/images/automation-icon.png',
      title: t('titleCard3'),
      description: t('descriptionCard3')
    }
  ]
  return darkIllustrationCardsHome
}

export function getLightIllustrationCardsHome (t: Translate) {
  const lightIllustrationCardsHome: Array<CardPropsImpl> = [
    {
      number: '04',
      image: '/images/devops.png',
      icon: '/images/devops-icon.png',
      title: 'DevOps services',
      description: t('descriptionCard4'),
      theme: 'light'
    },
    {
      number: '05',
      image: '/images/monitoring.png',
      icon: '/images/monitoring-icon.png',
      title: t('titleCard5'),
      description: t('descriptionCard5'),
      alignment: 'right',
      theme: 'light'
    },
    {
      number: '06',
      image: '/images/training.png',
      icon: '/images/training-icon.png',
      title: t('titleCard6'),
      description: t('descriptionCard6'),
      theme: 'light'
    }
  ]
  return lightIllustrationCardsHome
}

export function getLightIllustrationsCardsPartners (t: Translate) {
  const lightIllustrationCardsPartners: Array<CardPropsImpl> = [
    {
      number: '01',
      image: '/images/automation.png',
      icon: '/images/cloud-icon.png',
      title: 'AWS - Amazon Web Services',
      description: t('descriptionCard1'),
      theme: 'light'
    },
    {
      number: '02',
      image: '/images/automation.png',
      icon: '/images/docker-icon.png',
      title: 'Docker',
      description: t('descriptionCard2'),
      alignment: 'right',
      theme: 'light'
    },
    {
      number: '03',
      image: '/images/automation.png',
      icon: '/images/devops-icon.png',
      title: 'ARM',
      description: t('descriptionCard3'),
      theme: 'light'
    }
  ]
  return lightIllustrationCardsPartners
}
