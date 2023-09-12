import BackgroundImage from '@/components/ui/atoms/background-image'
import BlogContentSection from '@/components/ui/molecules/blog/content-section'
import CenteredLayout from '@/components/ui/organisms/layouts/7xl'
import CompanyList from '@/components/ui/organisms/lists/company'
import Footer from '@/components/ui/organisms/footer'
import Head from 'next/head'
import Header from '@/components/ui/organisms/header/header'
import HomeHero from '@/components/ui/organisms/heros/home'
import IllustrationCardList from '@/components/ui/organisms/lists/illustration'
import MediumTitleSection from '@/components/ui/molecules/title-sections/medium'
import PostCardList from '@/components/ui/organisms/lists/blog-post'
import RelatedBlogPostsSection from '@/components/ui/molecules/blog/related-blog-posts-section'
import SmallTitleSection from '@/components/ui/molecules/title-sections/small'
import TagsFilter from '@/components/ui/molecules/tag-filter'
import TeamMemberCard from '@/components/ui/molecules/cards/team-member'

export const components = {
  'header': {
    component: Header,
    type: 'singleType',
    props: {
      isFloating: 'isFloating',
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
          href: 'externalLink || page.path'
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
          href: 'externalLink || page.path'
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
  'team-member-card': {
    component: TeamMemberCard,
    props: {
      teamMember: 'teamMember'
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
  'related-blog-posts-section': {
    component: RelatedBlogPostsSection,
    props: {
      title: 'title',
      blogPosts: [
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
  'blog-content-section': {
    component: BlogContentSection,
    props: {
      title: 'title',
      content: 'content',
      tags: [
        {
          name: 'name'
        }
      ],
      cover: {
        name: 'cover.name',
        alt: 'cover.alternativeText',
        src: 'cover.url',
        blurDataURL: 'cover.formats.thumbnail.url',
        width: 'cover.width',
        height: 'cover.height'
      }
      // author: {
      //   name: 'blog_post.author.name',
      //   avatar: {
      //     name: 'blog_post.author.avatar.name',
      //     alt: 'blog_post.author.avatar.alternativeText',
      //     src: 'blog_post.author.avatar.url',
      //     blurDataURL: 'blog_post.author.avatar.formats.thumbnail.url',
      //     width: 'blog_post.author.avatar.width',
      //     height: 'blog_post.author.avatar.height'
      //   },
      //   bio: 'blog_post.author.bio',
      //   twitter: 'blog_post.author.twitter',
      //   website: 'blog_post.author.website'
      // }
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

export const layouts = {
  'CenteredLayout': {
    component: CenteredLayout
  }
}

export function createPage(layout, children, openGraph) {
  const Layout = layouts[layout]?.component
  return (<>
    <Head>
      {openGraph && Object.keys(openGraph).map((key) => <meta
        property={`og:${key}`}
        content={openGraph[key]}
        key={key}
      />
      )}
    </Head>
    {Layout ? <Layout>{children}</Layout> : children}
  </>
  )
}

export function getPageComponents(comps) {
  return comps?.map((item, index) => {
    const Comp = components[item.component]?.component
    return Comp ? <Comp
      {...item.props}
      key={index}
    /> : null
  })
}
