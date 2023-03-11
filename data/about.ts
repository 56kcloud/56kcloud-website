import { Translate } from 'next-translate'
import { BaseCardProps } from '../components/molecules/base-card'
import { TeamCardProps } from '../components/molecules/team-card'

export function getBaseCardsAbout (t: Translate) {
  const baseCards: Array<BaseCardProps> = [
    {
      number: '01',
      icon: '/images/automation-icon.png',
      title: t('titleCard1'),
      className: 'bg-orange-medium'
    },
    {
      number: '02',
      icon: '/images/devops-icon.png',
      title: 'DevOps services',
      className: 'bg-orange-lighter'
    },
    {
      number: '03',
      icon: '/images/cloud-icon.png',
      title: 'Cloud',
      className: 'bg-blue-light'
    },
    {
      number: '04',
      icon: '/images/monitoring-icon.png',
      title: t('titleCard4'),
      className: 'bg-orange-medium'
    }
  ]
  return baseCards
}

export function getTeamCardsAbout (t: Translate) {
  const teamCards: Array<TeamCardProps> = [
    {
      firstName: 'Darragh',
      lastName: 'Grealish',
      role: t('roleTeamCard1'),
      image: '/images/darragh.jpeg'
    },
    {
      firstName: 'Jochen',
      lastName: 'Zehnder',
      role: t('roleTeamCard2'),
      image: '/images/jochen.jpeg'
    },
    {
      firstName: 'Jean-Pierre',
      lastName: 'Gehrig',
      role: t('roleTeamCard3'),
      image: '/images/jean-pierre.jpeg'
    }
  ]
  return teamCards
}
