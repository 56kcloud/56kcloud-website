import Head from 'next/head'
import Layout from '../../components/layout'
import Contact from '../../components/contact'
import { getSortedPostsData } from '../../lib/posts'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import useTranslation from 'next-translate/useTranslation'

export default function Blog ({
  allPostsData
}: {
  allPostsData: {
    id: string;
    title: string;
    excerpt: string;
    author: string;
    date: string;
    image: string;
  }[];
}) {
  const { t } = useTranslation('blog')
  return (
    <Layout>
      <Head>
        <title>Edeltech | Blog</title>
      </Head>
      <section className='pt-8 mx-auto max-w-7xl'>
        <div className='text-center'>
          <h2 className='text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
            {t('title')}
          </h2>
          <p className='max-w-2xl mx-auto mt-3 text-xl text-gray-500 sm:mt-4'>
            {t('subtitle')}
          </p>
        </div>
        {allPostsData.map(({ id, title, excerpt, author, date, image }) => (
          <Link href={`/blog/${encodeURIComponent(id)}`} key={id}>
            <a>
              <div className='grid max-w-lg gap-5 mx-auto my-12 lg:grid-cols-1 lg:max-w-2xl'>
                <div className='flex flex-col overflow-hidden rounded-lg shadow-lg'>
                  <div className='flex-shrink-0'>
                    <img
                      className='object-cover w-full h-96'
                      src={image}
                      alt=''
                    />
                  </div>
                  <div className='flex flex-col justify-between flex-1 p-6 bg-white'>
                    <div className='flex-1'>
                      <p className='text-sm font-medium text-blue-600'>
                        Article
                      </p>
                      <div className='block mt-2'>
                        <p className='text-xl font-semibold text-gray-900'>
                          {title}
                        </p>
                        <p className='mt-3 text-base text-gray-500'>
                          {excerpt}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        ))}
      </section>
      <Contact />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
