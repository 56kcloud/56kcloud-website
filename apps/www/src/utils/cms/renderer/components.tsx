import {Dictionary} from '@/models/dictionary.model'
import {Suspense} from 'react'
import {draftMode} from 'next/headers'
import ArticleContentSection from '@/components/ui/molecules/article/content-section'
import BlogMasonry from '@/components/ui/organisms/blog-sections/blog-masonry'
import BlogThreeColumn from '@/components/ui/organisms/blog-sections/blog-three-column'
import ContactSplitWithPattern from '@/components/ui/organisms/contact-sections/contact-split-with-pattern'
import ContentMarkdown from '@/components/ui/organisms/content-sections/content-markdown'
import ContentTwoColumn from '@/components/ui/organisms/content-sections/content-two-column'
import CustomerLogosSimpleWithTitle from '@/components/ui/organisms/customer-sections/customer-logos-simple-with-title'
import DiagramFullWidth from '@/components/ui/organisms/diagram-sections/diagram-full-width'
import DraftModal from '@/components/ui/organisms/draft-modal'
import Footer from '@/components/ui/organisms/footer'
import Header from '@/components/ui/organisms/header'
import HeaderWithCards from '@/components/ui/organisms/header-sections/header-with-cards'
import HeroSimpleCenter from '@/components/ui/organisms/hero-sections/hero-simple-center'
import HeroSimpleCenterWithBackground from '@/components/ui/organisms/hero-sections/hero-simple-center-with-background'
import ImageSimple from '@/components/ui/organisms/image-sections/image-simple'
import IntroductionWithLogo from '@/components/ui/organisms/content-sections/introduction-with-logo'
import JoinOurTeam from '@/components/ui/organisms/cta-sections/join-our-team'
import PartnerLogosSimpleWithTitle from '@/components/ui/organisms/partner-sections/partner-logos-simple-with-title'
import ServiceAlternatePositionIcon from '@/components/ui/organisms/service-sections/service-alternate-position-icon'
import ServiceThreeColumnWithLargeIcons from '@/components/ui/organisms/service-sections/service-three-column-with-large-icons'
import SolutionOneColumn from '@/components/ui/organisms/solution-sections/solution-one-column'
import SolutionThreeColumnWithLargeIcons from '@/components/ui/organisms/solution-sections/solution-three-column-with-large-icons'
import TagFilter from '@/components/ui/molecules/tag-filter'
import TeamMemberCard from '@/components/ui/molecules/team-member'
import TeamThreeColumn from '@/components/ui/organisms/team-sections/team-three-column'
import ValueTwoColumn from '@/components/ui/organisms/value-sections/value-two-column'

export type ComponentBlueprints = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

export const needSuspense = ['blog-masonry']
export const componentBlueprints: ComponentBlueprints = {
  footer: Footer,
  'hero-simple-center': HeroSimpleCenter,
  'hero-simple-center-with-background': HeroSimpleCenterWithBackground,
  'blog-three-column': BlogThreeColumn,
  'blog-masonry': BlogMasonry,
  'contact-split-with-pattern': ContactSplitWithPattern,
  'service-alternate-position-icon': ServiceAlternatePositionIcon,
  'service-three-column-with-large-icons': ServiceThreeColumnWithLargeIcons,
  'solution-one-column': SolutionOneColumn,
  'solution-three-column-with-large-icons': SolutionThreeColumnWithLargeIcons,
  'partner-logo-simple-with-title': PartnerLogosSimpleWithTitle,
  'customer-logo-simple-with-title': CustomerLogosSimpleWithTitle,
  'article-content': ArticleContentSection,
  'content-two-column': ContentTwoColumn,
  'image-simple': ImageSimple,
  'value-two-column': ValueTwoColumn,
  'team-three-column': TeamThreeColumn,
  'join-our-team': JoinOurTeam,
  'tag-filter': TagFilter,
  'team-member-card': TeamMemberCard,
  'header-with-cards': HeaderWithCards,
  'content-markdown': ContentMarkdown,
  'introduction-with-logo': IntroductionWithLogo,
  'diagram-full-width': DiagramFullWidth
}
export type ComponentBlueprint = {
  component: keyof ComponentBlueprints
  props: Record<string, unknown>
}

export function renderComponents(dictionary: Dictionary, components?: Array<ComponentBlueprint>) {
  return components?.map((item, index) => {
    const Component = componentBlueprints[item.component]
    if (!Component) {
      return
    }
    const render = (
      <Component
        {...item.props}
        dictionary={dictionary}
        key={index}
      />
    )
    return needSuspense.includes(item.component.toString()) ? <Suspense>{render}</Suspense> : render
  })
}

export function pageRenderer(dictionary: Dictionary, components?: Array<ComponentBlueprint>) {
  const {isEnabled} = draftMode()
  const children = renderComponents(dictionary, components)
  return (
    <>
      <Header dictionary={dictionary} />
      {isEnabled && <DraftModal />}
      {children}
    </>
  )
}
