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
import {Dictionary} from '@/models/dictionary.model'
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

export function renderComponents(dictionary: Dictionary, components?: Array<ComponentBlueprint>) {
  return components?.map((item, index) => {
    const Component = componentBlueprints[item.component]?.component
    return Component && (
      <Component
        {...item.props}
        dictionary={dictionary}
        key={index}
      />
    )
  })
}

export function pageRenderer(dictionary: Dictionary, components?: Array<ComponentBlueprint>) {
  const children = renderComponents(dictionary, components)
  return (<>
    <Header dictionary={dictionary}/>
    {children}
  </>
  )
}


