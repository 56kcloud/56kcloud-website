import Head from 'next/head'
import CardsSmall from '../components/organisms/cards-small'

import Layout from '../components/organisms/layout'

export default function PartnersPage () {
  return (
    <Layout>
      <Head>
        <title>56K.Cloud | Partners</title>
      </Head>
      <section className="bg-[url('/images/cloud-background.png')] pt-56 bg-no-repeat bg-[length:100%] px-36 bg-bottom bg-white">
        <div className='max-w-6xl mx-auto'>
          <h2 className='mb-16 title sm-responsive-title'>On a Journey together</h2>
          <p className='w-5/12 xl:text-lg'>We partner to enabled effective and successful projects together for customers.</p>
        </div>
      </section>
      <section className='section-padding'>
        <div className='mx-auto max-w-7xl'>
          <p></p>
          <CardsSmall />
        </div>
      </section>
    </Layout>
  )
}