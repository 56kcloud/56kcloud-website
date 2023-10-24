import {
  ComponentBlueprint,
  articleContentBlueprint,
  blogThreeColumnBlueprint,
  contactSplitWithPatternBlueprint,
  contentMarkdownBlueprint,
  contentTwoColumnBlueprint,
  footerBlueprint,
  headerWithCardsBlueprint,
  heroSimpleCenterBlueprint,
  heroSimpleCenterWithBackgroundBlueprint,
  imageSimpleBlueprint,
  joinOurTeamBlueprint,
  logoCloudsSimpleWithTitleBlueprint,
  servicesThreeColumnWithLargeIconsBlueprint,
  solutionThreeColumnWithLargeIconsBlueprint,
  tagFilterBlueprint,
  teamMemberCardBlueprint,
  teamThreeColumnBlueprint,
  valueTwoColumnBlueprint
} from './blueprints'
import {PageOpenGraph} from '@/models/page.mode'
import Head from 'next/head'
import Header from '@/components/ui/organisms/header'

export type ComponentBlueprints = {
  [key: string]: ComponentBlueprint
}

export const componentBlueprints: ComponentBlueprints = {
  'footer': footerBlueprint,
  'hero-simple-center': heroSimpleCenterBlueprint,
  'hero-simple-center-with-background': heroSimpleCenterWithBackgroundBlueprint,
  'blog-three-column': blogThreeColumnBlueprint,
  'contact-split-with-pattern': contactSplitWithPatternBlueprint,
  'service-three-column-with-large-icons': servicesThreeColumnWithLargeIconsBlueprint,
  'solution-three-column-with-large-icons': solutionThreeColumnWithLargeIconsBlueprint,
  'partner-logo-simple-with-title': logoCloudsSimpleWithTitleBlueprint('partners'),
  'customer-logo-simple-with-title': logoCloudsSimpleWithTitleBlueprint('customers'),
  'article-content': articleContentBlueprint,
  'content-two-column': contentTwoColumnBlueprint,
  'image-simple': imageSimpleBlueprint,
  'value-two-column': valueTwoColumnBlueprint,
  'team-three-column': teamThreeColumnBlueprint,
  'join-our-team': joinOurTeamBlueprint,
  'tag-filter': tagFilterBlueprint,
  'article-author': teamMemberCardBlueprint,
  'header-with-cards': headerWithCardsBlueprint,
  'content-markdown': contentMarkdownBlueprint
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

export function pageRenderer(
  components: Array<ComponentBlueprint>,
  openGraph: PageOpenGraph
) {
  const children = renderComponents(components)
  return (<>
    <Head>
      {openGraph && Object.keys(openGraph).map((key) => {
        const value = key === 'image'
          ? openGraph.image.src
          : openGraph[key as keyof PageOpenGraph]
        return value && (
          <meta
            property={`og:${key}`}
            content={value.toString()}
            key={key}
          />
        )
      })}
    </Head>
    <Header/>
    {children}
  </>
  )
}


