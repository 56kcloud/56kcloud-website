import { BaseCardProps } from '../components/molecules/base-card'
import { TeamCardProps } from '../components/molecules/team-card'

export function getBaseCardsAbout (t) {
  const baseCards: Array<BaseCardProps> = [
    {
      number: '01',
      icon: '/images/automation-icon.png',
      title: 'Automation both Infrastructure & Applications',
      className: 'bg-orange-medium'
    },
    {
      number: '02',
      icon: '/images/devops-icon.png',
      title: 'DevOps Services',
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
      title: 'Monitoring & Security',
      className: 'bg-orange-medium'
    }
  ]
  return baseCards
}

export function getTeamCardsAbout (t) {
  const teamCards: Array<TeamCardProps> = [
    {
      firstName: 'Darragh',
      lastName: 'Grealish',
      role: 'Site Reliability Engineer & Managing Partner',
      image: '/images/darragh.jpeg'
    },
    {
      firstName: 'Jochen',
      lastName: 'Zehnder',
      role: 'Site Reliability Engineer & Managing Partner',
      image: '/images/jochen.jpeg'
    },
    {
      firstName: 'Jean-Pierre',
      lastName: 'Gehrig',
      role: 'Principal Programmer & Managing Partner',
      image: '/images/jean-pierre.jpeg'
    }
  ]
  return teamCards
}
