import {BaseCardProps} from '../components/molecules/card/base'
import automation from '../../public/images/icons/automation.webp'
import cloud from '../../public/images/icons/cloud.webp'
import devops from '../../public/images/icons/devops.webp'
import monitoring from '../../public/images/icons/monitoring.webp'

export function getBaseCardsPartners() {
  const baseCards: Array<BaseCardProps> = [
    {
      number: '01',
      icon: cloud,
      title: 'AWS',
      className: 'bg-primary-200'
    },
    {
      number: '02',
      icon: monitoring,
      title: 'Docker',
      className: 'bg-secondary-500'
    },
    {
      number: '03',
      icon: automation,
      title: 'ARM',
      className: 'bg-secondary-500'
    },
    {
      number: '04',
      icon: devops,
      title: 'Hashicorp',
      className: 'bg-orange-300'
    }
  ]
  return baseCards
}
