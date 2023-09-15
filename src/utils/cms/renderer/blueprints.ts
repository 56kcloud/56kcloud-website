import {z} from 'zod'
import ArticleContentSection from '@/components/ui/molecules/article/content-section'
import ArticleList from '@/components/ui/organisms/lists/article'
import BackgroundImage from '@/components/ui/atoms/background-image'
import CompanyList from '@/components/ui/organisms/lists/company'
import FeatureList from '@/components/ui/organisms/lists/feature'
import Footer from '@/components/ui/organisms/footer'
import Header from '@/components/ui/organisms/header/header'
import HomeHero from '@/components/ui/organisms/heros/home'
import IllustrationCardList from '@/components/ui/organisms/lists/illustration'
import MediumTitleSection from '@/components/ui/molecules/title-sections/medium'
import PartnerList from '@/components/ui/organisms/lists/partner'
import RelatedArticles from '@/components/ui/organisms/lists/related/articles'
import RelatedPartners from '@/components/ui/organisms/lists/related/partners'
import RelatedServices from '@/components/ui/organisms/lists/related/services'
import RelatedSolutions from '@/components/ui/organisms/lists/related/solutions'
import SmallTitleSection from '@/components/ui/molecules/title-sections/small'
import SolutionList from '@/components/ui/organisms/lists/solution'
import TagsFilter from '@/components/ui/molecules/tag-filter'
import TeamMemberCard from '@/components/ui/molecules/cards/team-member'


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

const linkBlueprint = {
  title: 'title',
  href: 'href'
}

const tagBlueprint = {
  name: 'name'
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
    background: 'background',
    logo: logoBlueprint,
    links: [linkBlueprint],
    gMapAddress: 'gMapAddress',
    address: 'address',
    title: 'title'
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
    text: 'text',
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

export const featureListBlueprint: ComponentBlueprint = {
  component: FeatureList,
  props: {
    title: 'title',
    subtitle: 'subtitle',
    features: [
      {
        name: 'name',
        description: 'description',
        icon: iconBlueprint
      }
    ]
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

export const homeHeroBlueprint: ComponentBlueprint = {
  component: HomeHero,
  props: {
    titleLine1: 'titleLine1',
    titleLine2: 'titleLine2',
    titleLine3: 'titleLine3',
    image: imageBlueprint
  }
}
