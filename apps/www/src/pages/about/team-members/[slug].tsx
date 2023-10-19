import {GetStaticPropsContext} from 'next'
import {PageProps} from '@/models/page.mode'
import {TeamMember} from '@/models/team-member'
import {getPageProps} from '@/utils/cms/endpoints'
import {pageRenderer} from '@/utils/cms/renderer/components'
import {strapiFetcher} from '../../../../configs/server'

export default function BlogPage({components, openGraph}: PageProps) {
  return pageRenderer(components, openGraph, 'CenteredLayout')
}

export async function getStaticPaths() {
  const teamMembers = await strapiFetcher.call({
    path: '/api/team-members-slugs'
  })
  const paths = teamMembers.map((teamMember: Partial<TeamMember>) => ({
    params: {slug: teamMember.slug}
  }))
  return {
    paths,
    fallback: true
  }
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const slug = context.params?.slug || ''
  const props = await getPageProps(`team-members/${slug}`, context.locale)
  return {props}
}
