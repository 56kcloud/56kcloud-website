export type Card = {
  number: string
  image: string
  icon: string
  title: string
  description: string
  alignment?: string
  theme?: string
}

export const darkIllustrationCardsHome: Array<Card> = [
  // {
  //   number: '01',
  //   image: '/images/automation.png',
  //   icon: '/images/automation-icon.png',
  //   title: 'Automation',
  //   description: 'End-to-End automation of your infrastructure and applications which enables reproducible \
  //   and version-controlled environments.'
  // },
  // {
  //   number: '02',
  //   image: '/images/cloud.png',
  //   icon: '/images/cloud-icon.png',
  //   title: 'Cloud',
  //   description: 'Leverage the Cloud Architecture best practice in combination with Automation to deliver \
  //     maximum performance while reducing your Cloud monthly costs.',
  //   alignment: 'right'
  // },
  // {
  //   number: '03',
  //   image: '/images/dockers.png',
  //   icon: '/images/automation-icon.png',
  //   title: 'Docker & Kubernetes',
  //   description: 'Containerize Applications or Deploy a Container Orchestrator such as Docker Swarm or Kubernetes \
  //     and integrate it into your DevOps workflow.'
  // }
]

export const lightIllustrationCardsHome: Array<Card> = [
  // {
  //   number: '04',
  //   image: '/images/devops.png',
  //   icon: '/images/devops-icon.png',
  //   title: 'DevOps services',
  //   description: 'Infrastructure as Code to building CI/CD pipelines we enable your company with the latest DevOps \
  //     tools and best practices.',
  //   theme: 'light'
  // },
  // {
  //   number: '05',
  //   image: '/images/monitoring.png',
  //   icon: '/images/monitoring-icon.png',
  //   title: 'Monitoring & security',
  //   description: 'One of our passions is monitoring. We have developed custom monitoring tools to keep you informed \
  //     about your business decisions and infrastructure.',
  //   alignment: 'right',
  //   theme: 'light'
  // },
  // {
  //   number: '06',
  //   image: '/images/training.png',
  //   icon: '/images/training-icon.png',
  //   title: 'Training',
  //   description: '56K.Cloud’s training program provides hands-on training using real-world examples and use-cases. Our \
  //     Training program covers Cloud, Containers, and DevOps.',
  //   theme: 'light'
  // }
]

export const lightIllustrationCardsPartners: Array<Card> = [
  {
    number: '01',
    image: '/images/automation.png',
    icon: '/images/cloud-icon.png',
    title: 'AWS - Amazon Web Services',
    description: 'As Advanced Partner, in Edge, IoT and Cloud Transformation.',
    theme: 'light'
  },
  {
    number: '02',
    image: '/images/automation.png',
    icon: '/images/docker-icon.png',
    title: 'Docker',
    description: 'Enabling Containerisation and Developer tooling at it\'s best.',
    alignment: 'right',
    theme: 'light'
  },
  {
    number: '03',
    image: '/images/automation.png',
    icon: '/images/devops-icon.png',
    title: 'ARM',
    description: 'Across Cloud and Embedded Systems (IoT) we work with leading CPU architecture that increase \
    performance and reduce energy requirements, Partnering with ARM enable\'s 56K.Cloud customers to access key \
    experts and industry relationships.',
    theme: 'light'
  }
]
