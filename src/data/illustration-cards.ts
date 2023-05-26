import {IllustrationCardPropsImpl} from '../components/molecules/card/illustration/card.model'
import {Translate} from 'next-translate'
import automation from '../../public/images/illustrations/automation.webp'
import automationIcon from '../../public/images/icons/automation.webp'
import cloud from '../../public/images/illustrations/cloud.webp'
import cloudIcon from '../../public/images/icons/cloud.webp'
import devops from '../../public/images/illustrations/devops.webp'
import devopsIcon from '../../public/images/icons/devops.webp'
import dockerIcon from '../../public/images/icons/docker.webp'
import dockers from '../../public/images/illustrations/dockers.webp'
import monitoring from '../../public/images/illustrations/monitoring.webp'
import monitoringIcon from '../../public/images/icons/monitoring.webp'
import training from '../../public/images/illustrations/training.webp'
import trainingIcon from '../../public/images/icons/training.webp'

export function getDarkIllustrationCardsHome(t: Translate) {
  const darkIllustrationCardsHome: Array<IllustrationCardPropsImpl> = [
    {
      number: 1,
      image: automation,
      icon: automationIcon,
      title: t('home:titleCard1'),
      description: t('home:descriptionCard1')
    },
    {
      number: 2,
      image: cloud,
      icon: cloudIcon,
      title: 'Cloud',
      description: t('home:descriptionCard2'),
      alignment: 'right'
    },
    {
      number: 3,
      image: dockers,
      icon: automationIcon,
      title: t('home:titleCard3'),
      description: t('home:descriptionCard3')
    }
  ]
  return darkIllustrationCardsHome
}

export function getLightIllustrationCardsHome(t: Translate) {
  const lightIllustrationCardsHome: Array<IllustrationCardPropsImpl> = [
    {
      number: 4,
      image: devops,
      icon: devopsIcon,
      title: 'DevOps services',
      description: t('home:descriptionCard4'),
      theme: 'light'
    },
    {
      number: 5,
      image: monitoring,
      icon: monitoringIcon,
      title: t('home:titleCard5'),
      description: t('home:descriptionCard5'),
      alignment: 'right',
      theme: 'light'
    },
    {
      number: 6,
      image: training,
      icon: trainingIcon,
      title: t('home:titleCard6'),
      description: t('home:descriptionCard6'),
      theme: 'light'
    }
  ]
  return lightIllustrationCardsHome
}

export function getLightIllustrationsCardsPartners(t: Translate) {
  const lightIllustrationCardsPartners: Array<IllustrationCardPropsImpl> = [
    {
      number: 1,
      image: automation,
      icon: cloudIcon,
      title: 'AWS - Amazon Web Services',
      description: t('partners:descriptionCard1'),
      theme: 'light'
    },
    {
      number: 2,
      image: automation,
      icon: dockerIcon,
      title: 'Docker',
      description: t('partners:descriptionCard2'),
      alignment: 'right',
      theme: 'light'
    },
    {
      number: 3,
      image: automation,
      icon: devopsIcon,
      title: 'ARM',
      description: t('partners:descriptionCard3'),
      theme: 'light'
    }
  ]
  return lightIllustrationCardsPartners
}
