export type Card = {
  number: string
  icon: string
  title: string
  className: string
}

export const baseCardsPartners: Array<Card> = [
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

export const baseCardsAbout: Array<Card> = [
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
