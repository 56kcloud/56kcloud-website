import Layout from '../../components/layout'
import Contact from '../../components/contact'
import { getSortedPostsData } from '../../lib/posts'
import { GetStaticProps } from 'next'
import useTranslation from 'next-translate/useTranslation'
import Post from '../../components/post'
import EmptyPost from '../../components/empty-post'

export default function Blog ({
  allPostsData
}: {
  allPostsData: {
    id: string;
    title: string;
    excerpt: string;
    author: string;
    authorAvatar: string;
    date: string;
    image: string;
  }[];
}) {
  const { t } = useTranslation('blog')
  return (
    <Layout title={`Edeltech | ${t('common:blog')}`}>
      <section className='min-h-screen mx-auto py-28 max-w-7xl'>
        <div className='text-center'>
          <h2 className='text-3xl font-extrabold tracking-tight text-white sm:text-4xl'>
            {t('title')}
          </h2>
          <p className='max-w-2xl mx-auto mt-3 text-xl text-blue-300 sm:mt-4'>
            {t('subtitle')}
          </p>
        </div>
        <div className='grid max-w-lg gap-5 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none'>
          {allPostsData.length > 0
            ? allPostsData.map((postData) => (
              <Post data={postData} />
            ))
            : <EmptyPost />}
        </div>
      </section>
      <Contact />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const allPostsData = getSortedPostsData(context.locale)
  return {
    props: {
      allPostsData
    }
  }
}
