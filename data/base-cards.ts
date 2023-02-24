export type Card = {
  number: string
  icon: string
  title: string
  className: string
}

export const baseCards: Array<Card> = [
  {
    number: '01',
    icon: '/images/cloud-icon.png',
    title: 'AWS',
    className: 'bg-blue-light'
  },
  {
    number: '02',
    icon: '/images/monitoring-icon.png',
    title: 'Docker',
    className: 'bg-orange-medium'
  },
  {
    number: '03',
    icon: '/images/automation-icon.png',
    title: 'ARM',
    className: 'bg-orange-medium'
  },
  {
    number: '04',
    icon: '/images/devops-icon.png',
    title: 'Hashicorp',
    className: 'bg-orange-lighter'
  }
]
