import {
  ComponentBlueprint,
  blogThreeColumnBlueprint,
  contactSplitWithPatternBlueprint,
  footerBlueprint,
  heroSimpleCenterWithBackground,
  logoCloudsSimpleWithTitleBlueprint,
  servicesThreeColumnWithLargeIconsBlueprint,
  solutionThreeColumnWithLargeIconsBlueprint
} from './blueprints'
import {PageOpenGraph} from '@/models/page.mode'
import Head from 'next/head'
import Header from '@/components/ui/organisms/header'

export type ComponentBlueprints = {
  [key: string]: ComponentBlueprint
}

export const componentBlueprints: ComponentBlueprints = {
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

export function pageRenderer(
  components: Array<ComponentBlueprint>,
  openGraph: PageOpenGraph
) {
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
    <Header/>
    {children}
  </>
  )
}


