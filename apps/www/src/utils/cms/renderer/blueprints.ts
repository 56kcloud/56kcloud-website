import {MarkdownViewer} from '@/components/ui/molecules/mardown'
import {z} from 'zod'
import ArticleContentSection from '@/components/ui/molecules/article/content-section'
import ArticleList from '@/components/ui/organisms/lists/article'
import BackgroundImage from '@/components/ui/atoms/background-image'
import BlogThreeColumn from '@/components/ui/organisms/blog-sections/blog-three-column'
import CompanyList from '@/components/ui/organisms/lists/company'
import ContactSplitWithPattern from '@/components/ui/organisms/contact-sections/contact-split-with-pattern'
import Footer from '@/components/ui/organisms/footer'
import Header from '@/components/ui/organisms/header'
import HeroSimpleCenterWithBackground 
  from '@/components/ui/organisms/hero-sections/hero-simple-center-with-background'
import IllustrationCardList from '@/components/ui/organisms/lists/illustration'
import LargeTitleSection from '@/components/ui/molecules/title-sections/large'
import LogoCloudsSimpleWithTitle from '@/components/ui/organisms/logo-clouds/logo-clouds-simple-with-title'
import MediumTitleSection from '@/components/ui/molecules/title-sections/medium'
import PartnerList from '@/components/ui/organisms/lists/partner'
import RectangleCardList from '@/components/ui/organisms/lists/rectangle'
import RelatedArticles from '@/components/ui/organisms/lists/related/articles'
import RelatedPartners from '@/components/ui/organisms/lists/related/partners'
import RelatedServices from '@/components/ui/organisms/lists/related/services'
import RelatedSolutions from '@/components/ui/organisms/lists/related/solutions'
import ServiceList from '@/components/ui/organisms/lists/service'
import ServiceThreeColumnWithLargeIcons from '@/components/ui/organisms/service-sections/service-three-column-with-large-icons'
import SmallTitleSection from '@/components/ui/molecules/title-sections/small'
import SolutionList from '@/components/ui/organisms/lists/solution'
import SolutionThreeColumnWithLargeIcons from '@/components/ui/organisms/solutions-sections/solution-three-column-with-large-icons'
import TagsFilter from '@/components/ui/molecules/tag-filter'
import TeamList from '@/components/ui/organisms/lists/team'
import TeamMemberCard from '@/components/ui/molecules/cards/team-member'
import TitleSection from '@/components/ui/molecules/title-sections/normal'


export const componentBlueprintSchema = z.object({
  component: z.any(),
  props: z.record(z.string(), z.unknown())
})
export type ComponentBlueprint = z.infer<typeof componentBlueprintSchema>

const imageBlueprint = {
  name: 'image.name',
  alt: 'image.alternativeText',
  src: 'image.url',
  blurDataURL: 'image.formats.thumbnail.url',
  width: 'image.width',
  height: 'image.height'
}

const iconBlueprint = {
  name: 'icon.name',
  alt: 'icon.alternativeText',
  src: 'icon.url',
  width: 'icon.width',
  height: 'icon.height'
}

const logoBlueprint = {
  name: 'logo.name',
  alt: 'logo.alternativeText',
  src: 'logo.url',
  width: 'logo.width',
  height: 'logo.height'
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

const linkBlueprint = {
  children: 'children',
  href: 'href'
}

const buttonBlueprint = {
  children: 'button.children',
  href: 'button.href'
}

const tagBlueprint = {
  name: 'name'
}

const contactUsCTABlueprint = {
  title: 'contactUsCTA.title',
  modal: {
    title: 'contactUsCTA.modal.title',
    subtitle: 'contactUsCTA.modal.subtitle',
    submitButtonTitle: 'contactUsCTA.modal.submitButtonTitle',
    image: {
      name: 'contactUsCTA.modal.image.name',
      alt: 'contactUsCTA.modal.image.alternativeText',
      src: 'contactUsCTA.modal.image.url',
      blurDataURL: 'contactUsCTA.modal.image.formats.thumbnail.url',
      width: 'contactUsCTA.modal.image.width',
      height: 'contactUsCTA.modal.image.height'
    }
  }
}

export const headerBlueprint: ComponentBlueprint = {
  component: Header,
  props: {
    isFloating: 'isFloating',
    logo: logoBlueprint,
    links: [linkBlueprint]
  }
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

export const companyListBlueprint: ComponentBlueprint = {
  component: CompanyList,
  props: {
    title: 'title',
    companies: [
      {
        name: 'name',
        url: 'href',
        logo: logoBlueprint
      }
    ]
  }
}

export const relatedPartnersBlueprint: ComponentBlueprint = {
  component: RelatedPartners,
  props: {
    partners: [
      {
        name: 'name',
        url: 'href',
        logo: logoBlueprint
      }
    ]
  }
}

export const partnerListBlueprint: ComponentBlueprint = {
  component: PartnerList,
  props: {
    partners: [
      {
        name: 'name',
        url: 'href',
        logo: logoBlueprint
      }
    ]
  }
}

export const smallTitleSectionBlueprint: ComponentBlueprint = {
  component: SmallTitleSection,
  props: {
    subtitle: 'subtitle',
    title: 'title'
  }
}

export const titleSectionBlueprint: ComponentBlueprint = {
  component: TitleSection,
  props: {
    surtitle: 'surtitle',
    title: 'title'
  }
}

export const mediumTitleSectionBlueprint: ComponentBlueprint = {
  component: MediumTitleSection,
  props: {
    title: 'title',
    subtitle: 'subtitle'
  }
}

export const largeTitleSectionBlueprint: ComponentBlueprint = {
  component: LargeTitleSection,
  props: {
    title: 'title',
    leftSubtitle: 'leftSubtitle',
    rightSubtitle: 'rightSubtitle'
  }
}

export const illustrationCardListBlueprint: ComponentBlueprint = {
  component: IllustrationCardList,
  props: {
    title: 'title',
    theme: 'theme',
    illustrationCards: [
      {
        number: 'number',
        title: 'title',
        description: 'description',
        icon: iconBlueprint,
        illustration: {
          name: 'illustration.name',
          alt: 'illustration.alternativeText',
          blurDataURL: 'illustration.formats.thumbnail.url',
          src: 'illustration.url',
          width: 'illustration.width',
          height: 'illustration.height'
        }
      }
    ]
  }
}

export const teamMemberCardBlueprint: ComponentBlueprint = {
  component: TeamMemberCard,
  props: {
    teamMember: {
      name: 'teamMember.name',
      bio: 'teamMember.bio',
      twitter: 'teamMember.twitter',
      website: 'teamMember.website',
      slug: 'teamMember.slug',
      avatar: {
        name: 'teamMember.avatar.name',
        alt: 'teamMember.avatar.alternativeText',
        src: 'teamMember.avatar.url',
        blurDataURL: 'teamMember.avatar.formats.thumbnail.url',
        width: 'teamMember.avatar.width',
        height: 'teamMember.avatar.height'
      }
    }
  }
}

export const tagsFilterBlueprint: ComponentBlueprint = {
  component: TagsFilter,
  props: {
    tags: [tagBlueprint]
  }
}

export const articleListBlueprint: ComponentBlueprint = {
  component: ArticleList,
  props: {
    articles: [
      {
        title: 'title',
        description: 'description',
        slug: 'slug',
        readTime: 'readTime',
        tags: [tagBlueprint],
        publishedOn: 'publishedOn',
        image: imageBlueprint,
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

export const relatedArticleListBlueprint: ComponentBlueprint = {
  component: RelatedArticles,
  props: {
    articles: [
      {
        title: 'title',
        description: 'description',
        slug: 'slug',
        readTime: 'readTime',
        tags: [tagBlueprint],
        publishedOn: 'publishedOn',
        image: imageBlueprint,
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

export const solutionListBlueprint: ComponentBlueprint = {
  component: SolutionList,
  props: {
    solutions: [
      {
        title: 'title',
        description: 'description',
        slug: 'slug',
        image: imageBlueprint
      }
    ]
  }
}

export const relatedSolutionsBlueprint: ComponentBlueprint = {
  component: RelatedSolutions,
  props: {
    solutions: [
      {
        title: 'title',
        description: 'description',
        slug: 'slug',
        image: imageBlueprint
      }
    ]
  }
}

export const serviceListBlueprint: ComponentBlueprint = {
  component: ServiceList,
  props: {
    services: [
      {
        title: 'title',
        description: 'description',
        slug: 'slug',
        image: imageBlueprint
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
        image: imageBlueprint,
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
        icon: iconBlueprint
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
        icon: iconBlueprint
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
          // link: 'link',
          image: imageBlueprint
        }
      ]
    }
  }
}

export const relatedServicesBlueprint: ComponentBlueprint = {
  component: RelatedServices,
  props: {
    services: [
      {
        title: 'title',
        description: 'description',
        slug: 'slug',
        image: imageBlueprint
      }
    ]
  }
}

export const articleContentBlueprint: ComponentBlueprint = {
  component: ArticleContentSection,
  props: {
    title: 'title',
    content: 'content',
    tags: [tagBlueprint],
    image: imageBlueprint
  }
}

export const backgroundImageBlueprint: ComponentBlueprint = {
  component: BackgroundImage,
  props: {
    image: imageBlueprint
  }
}

export const heroSimpleCenterWithBackground: ComponentBlueprint = {
  component: HeroSimpleCenterWithBackground,
  props: {
    title: 'title',
    subtitle: 'subtitle',
    image: imageBlueprint,
    ...ctaBlueprint('primaryCTA'),
    ...ctaBlueprint('secondaryCTA')
  }
}

export const rectangleCardListBlueprint: ComponentBlueprint = {
  component: RectangleCardList,
  props: {
    cards: [
      {
        title: 'title',
        image: imageBlueprint
      }
    ],
    surtitle: 'surtitle'
  }
}

export const teamListBlueprint: ComponentBlueprint = {
  component: TeamList,
  props: {
    teamMembers: [
      {
        name: 'name',
        role: 'role',
        bio: 'bio',
        twitter: 'twitter',
        website: 'website',
        slug: 'slug',
        avatar: {
          name: 'avatar.name',
          alt: 'avatar.alternativeText',
          src: 'avatar.url',
          blurDataURL: 'avatar.formats.thumbnail.url',
          width: 'avatar.width',
          height: 'avatar.height'
        }
      }
    ],
    joinTeamTitle: 'joinTeamTitle',
    joinTeamTextStart: 'joinTeamTextStart',
    joinTeamTextEnd: 'joinTeamTextEnd',
    joinTeamCTATitle: 'joinTeamCTATitle'
  }
}

export const markdownViewerBlueprint: ComponentBlueprint = {
  component: MarkdownViewer,
  props: {
    content: 'content'
  }
}
