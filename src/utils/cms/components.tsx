import BackgroundImage from '@/components/atoms/background-image'
import CompanyList from '@/components/organisms/company-list'
import Footer from '@/components/organisms/footer'
import Header from '@/components/organisms/header/header'
import HomeHero from '@/components/organisms/home-hero'
import IllustrationCardList from '@/components/organisms/card-list/illustration'
import MediumTitleSection from '@/components/molecules/title-section/medium'
import PostCardList from '@/components/organisms/card-list/post'
import PostDetail from '@/components/molecules/post'
import SmallTitleSection from '@/components/molecules/title-section/small'
import TagsFilter from '@/components/molecules/tags-filter'

export const components = {
  'header': {
    component: Header,
    type: 'singleType',
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
  'medium-title-section': {
    component: MediumTitleSection,
    props: {
      title: 'title',
      subtitle: 'subtitle'
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
  'tags-filter': {
    component: TagsFilter,
    props: {
      tags: [
        {
          name: 'name'
        }
      ]
    }
  },
  'blog-list': {
    component: PostCardList,
    props: {
      posts: [
        {
          title: 'title',
          description: 'description',
          slug: 'slug',
          readTime: 'readTime',
          tags: [
            {
              name: 'name'
            }
          ],
          publishedOn: 'publishedOn',
          cover: {
            name: 'cover.name',
            alt: 'cover.alternativeText',
            src: 'cover.url',
            blurDataURL: 'cover.formats.thumbnail.url',
            width: 'cover.width',
            height: 'cover.height'
          },
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
  },
  'blog-post': {
    component: PostDetail,
    props: {
      title: 'title',
      content: 'content',
      description: 'description',
      slug: 'slug',
      readTime: 'readTime',
      tags: [
        {
          name: 'name'
        }
      ],
      publishedOn: 'publishedOn',
      cover: {
        name: 'cover.name',
        alt: 'cover.alternativeText',
        src: 'cover.url',
        blurDataURL: 'cover.formats.thumbnail.url',
        width: 'cover.width',
        height: 'cover.height'
      },
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

export function getPageComponents(comps) {
  return comps?.map((item, index) => {
    const Comp = components[item.component].component
    return <Comp
      {...item.props}
      key={index}
    />
  })
}
