import {MarkdownViewer} from '@/components/ui/molecules/mardown'
import {z} from 'zod'
import BlogThreeColumn from '@/components/ui/organisms/blog-sections/blog-three-column'
import ContactSplitWithPattern from '@/components/ui/organisms/contact-sections/contact-split-with-pattern'
import Footer from '@/components/ui/organisms/footer'
import HeroSimpleCenterWithBackground 
  from '@/components/ui/organisms/hero-sections/hero-simple-center-with-background'
import LogoCloudsSimpleWithTitle from '@/components/ui/organisms/logo-clouds/logo-clouds-simple-with-title'
import ServiceThreeColumnWithLargeIcons
  from '@/components/ui/organisms/service-sections/service-three-column-with-large-icons'
import SolutionThreeColumnWithLargeIcons 
  from '@/components/ui/organisms/solutions-sections/solution-three-column-with-large-icons'

export const componentBlueprintSchema = z.object({
  component: z.any(),
  props: z.record(z.string(), z.unknown())
})
export type ComponentBlueprint = z.infer<typeof componentBlueprintSchema>

function imageBlueprint(name='image') {
  return {
    name: `${name}.name`,
    alt: `${name}.alternativeText`,
    src: `${name}.url`,
    blurDataURL: `${name}.formats.thumbnail.url`,
    width: `${name}.width`,
    height: `${name}.height`
  }
}

function ctaBlueprint(name: string) {
  return {
    [name]: {
      text: `${name}.text`,
      link: `${name}.link`,
      tone: `${name}.tone`
    }
  }
}

const tagBlueprint = {
  name: 'name'
}

export const footerBlueprint: ComponentBlueprint = {
  component: Footer,
  props: {
    text: 'text',
    solutions: [
      {
        text: 'title',
        link: 'slug'
      }
    ],
    services: [
      {
        text: 'title',
        link: 'slug'
      }
    ]
  }
}

export const contactSplitWithPatternBlueprint: ComponentBlueprint = {
  component: ContactSplitWithPattern,
  props: {
    title: 'title',
    subtitle: 'subtitle'
  }
}

export const blogThreeColumnBlueprint: ComponentBlueprint = {
  component: BlogThreeColumn,
  props: {
    title: 'title',
    subtitle: 'subtitle',
    articles: [
      {
        title: 'title',
        description: 'description',
        slug: 'slug',
        readTime: 'readTime',
        tags: [tagBlueprint],
        publishedOn: 'publishedOn',
        image: imageBlueprint(),
        author: {
          name: 'author.name',
          avatar: {
            name: 'author.avatar.name',
            alt: 'author.avatar.alternativeText',
            src: 'author.avatar.url',
            blurDataURL: 'author.avatar.formats.thumbnail.url',
            width: 'author.avatar.width',
            height: 'author.avatar.height'
          }
        }
      }
    ]
  }
}

export const solutionThreeColumnWithLargeIconsBlueprint: ComponentBlueprint = {
  component: SolutionThreeColumnWithLargeIcons,
  props: {
    title: 'title',
    subtitle: 'subtitle',
    solutions: [
      {
        title: 'title',
        description: 'description',
        slug: 'slug',
        icon: imageBlueprint('icon')
      }
    ]
  }
}

export const servicesThreeColumnWithLargeIconsBlueprint: ComponentBlueprint = {
  component: ServiceThreeColumnWithLargeIcons,
  props: {
    title: 'title',
    subtitle: 'subtitle',
    services: [
      {
        title: 'title',
        description: 'description',
        slug: 'slug',
        icon: imageBlueprint('icon')
      }
    ]
  }
}

export function logoCloudsSimpleWithTitleBlueprint(companyType: string): ComponentBlueprint{
  return  {
    component: LogoCloudsSimpleWithTitle,
    props: {
      title: 'title',
      [`${companyType}->companies`]: [
        {
          name: 'name',
          image: imageBlueprint()
        }
      ]
    }
  }
}

export const heroSimpleCenterWithBackground: ComponentBlueprint = {
  component: HeroSimpleCenterWithBackground,
  props: {
    title: 'title',
    subtitle: 'subtitle',
    image: imageBlueprint(),
    ...ctaBlueprint('primaryCTA'),
    ...ctaBlueprint('secondaryCTA')
  }
}

export const markdownViewerBlueprint: ComponentBlueprint = {
  component: MarkdownViewer,
  props: {
    content: 'content'
  }
}
