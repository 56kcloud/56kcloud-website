import {
  ComponentBlueprint,
  articleContentBlueprint,
  articleListBlueprint,
  backgroundImageBlueprint,
  companyListBlueprint,
  featureListBlueprint,
  footerBlueprint,
  headerBlueprint,
  homeHeroBlueprint,
  illustrationCardListBlueprint,
  mediumTitleSectionBlueprint,
  partnerListBlueprint,
  smallTitleSectionBlueprint,
  solutionListBlueprint,
  tagsFilterBlueprint,
  teamMemberCardBlueprint
} from './blueprints'
import {PageOpenGraph} from '@/models/page.mode'
import CenteredLayout from '@/components/ui/organisms/layouts/7xl'
import Head from 'next/head'

export type ComponentBlueprints = {
  [key: string]: ComponentBlueprint
}

export const componentBlueprints: ComponentBlueprints = {
  'header': headerBlueprint,
  'footer': footerBlueprint,
  'company-list': companyListBlueprint,
  'partner-list': partnerListBlueprint,
  'small-title-section': smallTitleSectionBlueprint,
  'medium-title-section': mediumTitleSectionBlueprint,
  'illustration-card-list': illustrationCardListBlueprint,
  'article-author': teamMemberCardBlueprint,
  'team-member-card': teamMemberCardBlueprint,
  'tags-filter': tagsFilterBlueprint,
  'feature-list': featureListBlueprint,
  'article-list': articleListBlueprint,
  'related-articles': articleListBlueprint,
  'solution-list': solutionListBlueprint,
  'related-solutions': solutionListBlueprint,
  'article-content': articleContentBlueprint,
  'background-image': backgroundImageBlueprint,
  'home-hero': homeHeroBlueprint
}

export function renderComponents(components: Array<ComponentBlueprint>) {
  return components?.map((item, index) => {
    const Component = componentBlueprints[item.component]?.component
    return Component && (
      <Component
        {...item.props}
        key={index}
      />
    )
  })
}

export const layouts = {
  'CenteredLayout': {
    component: CenteredLayout
  }
}

export function pageRenderer(components: Array<ComponentBlueprint>, openGraph: PageOpenGraph, layout: string|null) {
  const Layout = layouts[layout as keyof typeof layouts]?.component
  const children = renderComponents(components)
  return (<>
    <Head>
      {openGraph && Object.keys(openGraph).map((key) => {
        const value = openGraph[key as keyof PageOpenGraph]
        return value && (
          <meta
            property={`og:${key}`}
            content={value}
            key={key}
          />
        )
      })}
    </Head>
    {children && (Layout ? <Layout>{children}</Layout> : children)}
  </>
  )
}


