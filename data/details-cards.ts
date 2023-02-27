export type Card = {
  icon: string
  title: string
  list: Array<string>
}

export const detailsCardsServices: Array<Card> = [
  {
    icon: '/images/cloud-white.svg',
    title: 'Cloud Readiness Assessment',
    list: [
      'Cloud-Native Introduction',
      'Understanding your application landscape',
      'Learning about your process',
      'Getting to know the team and their capabilities',
      'Summarizing the status quo',
      'Recommendations for the next steps'
    ]
  },
  {
    icon: '/images/infinity.svg',
    title: 'ISV to SaaS - Enablement Program',
    list: [
      'Structured Cloud Journey program outlining the benefits of ISV Modernisation on AWS Cloud',
      '2-Day Discovery Workshop',
      'Develop an actionable go-to Cloud Roadmap',
      'Regularly check-ins to support the team (vi Slack and Teams/Zoom calls)',
      'Shared slack and/or teams channel for accelerated collaboration',
      'Checkout our one-pager here for the program: (Link)'
    ]
  },
  {
    icon: '/images/cloud-white.svg',
    title: 'Cloud Reference Architecture',
    list: [
      'Onboarding to Public Cloud best practices and automation',
      'Implementation of a Secure Cloud Reference Architecture using AWS',
      'Managed deployment to rapidly get started across development and production',
      'A maintainable codebase of infrastructure automation deployed on AWS Cloud',
      'Build on Hashicorp Terraform or AWS CDK (Cloud Development Kit)',
      '56K Cloud Slack access* for onboarding and support*',
      'Technology Stack: Terraform, Terragrunt, AWS, Gitlab/Github Actions, CDK*',
      'Optional: Support for up to three+ accounts /w codebase access*',
      'Optional: Compliance and Security packages to reach CIS and HIPPA'
    ]
  },
  {
    icon: '/images/cloud-white.svg',
    title: 'Simple Web Application',
    list: [
      'Getting started with AWS Public Cloud services within hours not weeks!',
      'Ready-to-go setup that can be expanded and scaled with your application over time',
      'Fundamental building blocks to support a small development team',
      'Onboarding support across a one-week program',
      'Limited investment is required to get started, giving you more time to focus on product development!',
      'Technology Stack: Docker Containers, ECS, ALB'
    ]
  }
]

export const detailsCardsTraining: Array<Card> = [
  {
    icon: '/images/wheel.svg',
    title: 'Kubernetes Training',
    list: [
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
    list: [
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
    list: [
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
    list: [
      'Cloud-Native Tooling',
      'CI/CD Pipelines',
      'Infrastructure Automation',
      'Cloud Platform Services',
      'Best Practices'
    ]
  }
]
