import BackgroundImage from '@/components/atoms/background-image'
import CompanyList from '@/components/organisms/company-list'
import Footer from '@/components/organisms/footer'
import HomeHero from '@/components/organisms/home-hero'
import IllustrationCardList from '@/components/organisms/card-list/illustration'
import SmallTitleSection from '@/components/molecules/title-section/small'

export const components = {
  'header': {
    props: {
      logo: {
        name: 'logo.name',
        alt: 'logo.alternativeText',
        src: 'logo.url',
        width: 'logo.width',
        height: 'logo.height'
      },
      links: [
        {
          title: 'title',
          href: 'href'
        }
      ]
    }
  },
  'footer': {
    component: Footer,
    type: 'singleType',
    props: {
      background: 'background',
      logo: {
        name: 'logo.name',
        alt: 'logo.alternativeText',
        src: 'logo.url',
        width: 'logo.width',
        height: 'logo.height'
      },
      links: [
        {
          title: 'title',
          href: 'href'
        }
      ],
      gMapAddress: 'gMapAddress',
      address: 'address',
      title: 'title'
    }
  },
  'company-list': {
    component: CompanyList,
    props: {
      title: 'title',
      companies: [
        {
          name: 'name',
          url: 'url',
          logo: {
            name: 'logo.name',
            alt: 'logo.alternativeText',
            src: 'logo.url',
            width: 'logo.width',
            height: 'logo.height'
          }
        }
      ]
    }
  },
  'small-title-section': {
    component: SmallTitleSection,
    props: {
      text: 'text',
      title: 'title'
    }
  },
  'illustration-card-list': {
    component: IllustrationCardList,
    props: {
      title: 'title',
      theme: 'theme',
      illustrationCards: [
        {
          number: 'number',
          title: 'title',
          description: 'description',
          icon: {
            name: 'icon.name',
            alt: 'icon.alternativeText',
            src: 'icon.url',
            width: 'icon.width',
            height: 'icon.height'
          },
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
  },
  'background-image': {
    component: BackgroundImage,
    props: {
      background: {
        name: 'background.name',
        alt: 'background.alternativeText',
        src: 'background.url',
        blurDataURL: 'background.formats.thumbnail.url',
        width: 'background.width',
        height: 'background.height'
      }
    }
  },
  'home-hero': {
    component: HomeHero,
    props: {
      titleLine1: 'titleLine1',
      titleLine2: 'titleLine2',
      titleLine3: 'titleLine3',
      background: {
        name: 'background.name',
        alt: 'background.alternativeText',
        blurDataURL: 'background.formats.thumbnail.url',
        src: 'background.url',
        width: 'background.width',
        height: 'background.height'
      }
    }
  }
}
