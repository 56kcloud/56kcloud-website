import {
  ComponentBlueprint,
  articleContentBlueprint,
  blogMasonryBlueprint,
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
import {Seo} from '@/models/page.mode'
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
  'blog-masonry': blogMasonryBlueprint,
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
  'team-member-card': teamMemberCardBlueprint,
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
  seo: Seo,
  asPath: string
) {
  const appleTouchSizes = ['57x57', '60x60', '72x72', '76x76', '114x114', '120x120', '144x144', '152x152', '180x180']
  const children = renderComponents(components)
  return (<>
    {seo
      ? <Head>
        <title>{seo.title}</title>
        <meta
          name='description'
          content={seo.description}
        />
        <meta
          property='og:image'
          content={seo.image.src}
        />
        <meta
          property='og:title'
          content={seo.title}
        />
        <meta
          property='og:description'
          content={seo.description}
        />
        <meta
          content={`https://www.56k.cloud${asPath}`}
          property='og:url'
        />
        <meta
          content='summary'
          name='twitter:card'
        />
        <meta
          content='@56kCloud'
          name='twitter:site'
        />
        {appleTouchSizes.map((size) => (
          <link
            key={size}
            fetchPriority='low'
            href={`/images/apple-touch/icon-${size}.png`}
            rel='apple-touch-icon'
            sizes={size}
          />
        ))}
      </Head>
      : null
    }
    <Header/>
    {children}
  </>
  )
}


