import {BaseCardProps} from '../components/molecules/card/base'
// import {TeamCardProps} from '../components/molecules/team-card'
import {TeamCardProps} from '@/components/molecules/card/team'
import {Translate} from 'next-translate'
import automation from '../../public/images/icons/automation.webp'
import cloud from '../../public/images/icons/cloud.webp'
import darragh from '../../public/images/team/darragh.webp'
import devops from '../../public/images/icons/devops.webp'
import jochen from '../../public/images/team/jochen.webp'
import jp from '../../public/images/team/jp.webp'
import monitoring from '../../public/images/icons/monitoring.webp'


export function getBaseCardsAbout(t: Translate) {
  const baseCards: Array<BaseCardProps> = [
    {
      number: 1,
      icon: automation,
      title: t('titleCard1'),
      className: 'bg-secondary-500'
    },
    {
      number: 2,
      icon: devops,
      title: 'DevOps services',
      className: 'bg-secondary-100'
    },
    {
      number: 3,
      icon: cloud,
      title: 'Cloud',
      className: 'bg-primary-200'
    },
    {
      number: 4,
      icon: monitoring,
      title: t('titleCard4'),
      className: 'bg-secondary-500'
    }
  ]
  return baseCards
}

export function getTeamCardsAbout(t: Translate) {
  const teamCards: Array<TeamCardProps> = [
    {
      firstName: 'Darragh',
      lastName: 'Grealish',
      role: t('about:roleTeamCard1'),
      image: darragh
    },
    {
      firstName: 'Jochen',
      lastName: 'Zehnder',
      role: t('about:roleTeamCard2'),
      image: jochen
    },
    {
      firstName: 'Jean-Pierre',
      lastName: 'Gehrig',
      role: t('about:roleTeamCard3'),
      image: jp
    }
  ]
  return teamCards
}
