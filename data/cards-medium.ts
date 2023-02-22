<<<<<<<< HEAD:data/details-cards.ts
export type Card = {
  icon: string
  title: string
  list: Array<string>
}

export const detailsCards: Array<Card> = [
========
export const cardsMedium = [
>>>>>>>> 98c2327 ([app] Create small cards wrapper):data/cards-medium.ts
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
