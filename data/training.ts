import { DetailsCardProps } from '../components/molecules/details-card'

export function getListDetailsTraining (t) {
  const listDetails: Array<string> = [
    '30 days of Slack support after the course concludes*',
    'Additional Ressources and Labs',
    'Welcome email/checklist',
    'One scheduled follow-up call',
    'Training content made available via Git'
  ]
  return listDetails
}

export function getDetailsCardsTraining (t) {
  const detailsCards: Array<DetailsCardProps> = [
    {
      icon: '/images/wheel.svg',
      title: 'Kubernetes Training',
      items: [
        'Kubernetes Overview (Architecture and concepts)',
        'Install a Local Development Environment',
        'Kubectl CLI overview',
        'Kubernetes Pods',
        'Deployment (Scaling, labeling, health checks)',
        'Kubernetes logging, monitoring, and securing containers',
        'Custom content (Typically, one “hello world” use case application) Kubernetes on AWS'
      ]
    },
    {
      icon: '/images/whale.svg',
      title: 'Docker Training',
      items: [
        'Introduction to Docker, Kubernetes, and Cloud-Native',
        'Docker Overview',
        'Docker CLI Overview',
        'Web apps and Docker',
        'Write Dockerfiles',
        'Build a monitoring stack',
        'Deploy apps to Swarm',
        'Create a Docker Build pipeline',
        'Docker Swarm & Kubernetes',
        'Sponsor Labs'
      ]
    },
    {
      icon: '/images/cloud-white.svg',
      title: 'Cloud-Native Introduction',
      items: [
        'Cloud-Native Overview',
        'Modern application Concepts',
        'CNCF Landscape',
        'Native tooling in the cloud',
        'Your Cloud-Native Journey'
      ]
    },
    {
      icon: '/images/infinity.svg',
      title: 'DevOps Training',
      items: [
        'Cloud-Native Tooling',
        'CI/CD Pipelines',
        'Infrastructure Automation',
        'Cloud Platform Services',
        'Best Practices'
      ]
    }
  ]
  return detailsCards
}
