import Link from 'next/link'

export default function Filter() {
  return (
    <div>
      <Link href={'/blog?tag=aws'}>AWS</Link>
      <Link href={'/blog?tag=company-news'}>Company News</Link>
      <Link href={'/blog?tag=5g'}>5G</Link>
      <Link href={'/blog?tag=how-to'}>How To</Link>
      <Link href={'/blog?tag=iot'}>IoT</Link>
      <Link href={'/blog?tag=cloud'}>Cloud</Link>
      <Link href={'/blog?tag=docker'}>Docker</Link>
      <Link href={'/blog?tag=arm'}>ARM</Link>
      <Link href={'/blog?tag=gitlab'}>GitLab</Link>
      <Link href={'/blog?tag=aws-graviton'}>AWS Graviton</Link>
      <Link href={'/blog?tag=devops'}>DevOps</Link>
      <Link href={'/blog?tag=agile'}>Agile</Link>
      <Link href={'/blog?tag=digital-transformation'}>Digital Transformation</Link>
      <Link href={'/blog?tag=devsecops'}>DevSecOps</Link>
      <Link href={'/blog?tag=gruntworks'}>Gruntworks</Link>
      <Link href={'/blog?tag=github'}>GitHub</Link>
      <Link href={'/blog?tag=terraform'}>Terraform</Link>
      <Link href={'/blog?tag=edge'}>Edge</Link>
      <Link href={'/blog?tag=monitoring'}>Monitoring</Link>
      <Link href={'/blog?tag=community'}>Community</Link>
      <Link href={'/blog?tag=cdk'}>CDK</Link>
      <Link href={'/blog?tag=iac'}>IaC</Link>
      <Link href={'/blog?tag=azure'}>Azure</Link>
      <Link href={'/blog?tag=partners'}>Partners</Link>
    </div>
  )
}
