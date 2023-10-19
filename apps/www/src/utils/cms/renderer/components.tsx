import {
  ComponentBlueprint,
  articleContentBlueprint,
  articleListBlueprint,
  backgroundImageBlueprint,
  blogSectionThreeColumnBlueprint,
  blogThreeColumnBlueprint,
  companyListBlueprint,
  contactSplitWithPatternBlueprint,
  featureThreeColumnWithLargeIconsBlueprint,
  footerBlueprint,
  headerBlueprint,
  heroSimpleCenterWithBackground,
  illustrationCardListBlueprint,
  largeTitleSectionBlueprint,
  logoCloudsSimpleWithTitleBlueprint,
  markdownViewerBlueprint,
  mediumTitleSectionBlueprint,
  partnerListBlueprint,
  rectangleCardListBlueprint,
  relatedArticleListBlueprint,
  relatedPartnersBlueprint,
  relatedServicesBlueprint,
  relatedSolutionsBlueprint,
  serviceListBlueprint,
  servicesThreeColumnWithLargeIconsBlueprint,
  smallTitleSectionBlueprint,
  solutionListBlueprint,
  solutionThreeColumnWithLargeIconsBlueprint,
  tagsFilterBlueprint,
  teamListBlueprint,
  teamMemberCardBlueprint,
  titleSectionBlueprint
} from './blueprints'
import {PageOpenGraph} from '@/models/page.mode'
import CenteredLayout from '@/components/ui/organisms/layouts/7xl'
import Head from 'next/head'

export type ComponentBlueprints = {
  [key: string]: ComponentBlueprint
}

export const componentBlueprints: ComponentBlueprints = {
  //old blueprints
  'header': headerBlueprint,
  'company-list': companyListBlueprint,
  'partner-list': partnerListBlueprint,
  'small-title-section': smallTitleSectionBlueprint,
  'title-section': titleSectionBlueprint,
  'medium-title-section': mediumTitleSectionBlueprint,
  'large-title-section': largeTitleSectionBlueprint,
  'illustration-card-list': illustrationCardListBlueprint,
  'article-author': teamMemberCardBlueprint,
  'team-member-card': teamMemberCardBlueprint,
  'tags-filter': tagsFilterBlueprint,
  'article-list': articleListBlueprint,
  'solution-list': solutionListBlueprint,
  'service-list': serviceListBlueprint,
  'team-list': teamListBlueprint,
  'related-articles': relatedArticleListBlueprint,
  'related-solutions': relatedSolutionsBlueprint,
  'related-services': relatedServicesBlueprint,
  'related-partners': relatedPartnersBlueprint,
  'article-content': articleContentBlueprint,
  'background-image': backgroundImageBlueprint,
  'markdown': markdownViewerBlueprint,
  'rectangle-card-list': rectangleCardListBlueprint,
  //new blueprints
  'footer': footerBlueprint,
  'hero-simple-center-with-background': heroSimpleCenterWithBackground,
  'blog-three-column': blogThreeColumnBlueprint,
  'contact-split-with-pattern': contactSplitWithPatternBlueprint,
  'service-three-column-with-large-icons': servicesThreeColumnWithLargeIconsBlueprint,
  'solution-three-column-with-large-icons': solutionThreeColumnWithLargeIconsBlueprint,
  'partner-logo-simple-with-title': logoCloudsSimpleWithTitleBlueprint('partners'),
  'customer-logo-simple-with-title': logoCloudsSimpleWithTitleBlueprint('customers')
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

export function pageRenderer(
  components: Array<ComponentBlueprint>,
  openGraph: PageOpenGraph,
  layout: string|null,
  headerDark?: boolean
) {
  const Layout = layouts[layout as keyof typeof layouts]?.component
  if (components?.length > 0) {
    components[0].props['isFloating'] = layout ? false : true
    components[0].props['darkTheme'] = headerDark
  }
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


