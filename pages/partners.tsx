import Head from 'next/head'

import Layout from '../components/organisms/layout'
import Surtitle from '../components/atoms/surtitle'
import CardsSmall from '../components/organisms/cards-small'
import BackgroundImage from '../components/atoms/background-image'

export default function PartnersPage () {
  return (
    <Layout>
      <Head>
        <title>56K.Cloud | Partners</title>
      </Head>
      <section className="bg-[url('/images/cloud-background.png')] pt-56 bg-no-repeat bg-[length:100%] px-36 bg-bottom bg-white">
        <div className='max-w-6xl mx-auto'>
          <h2 className='mb-16 font-semibold title sm-responsive-title'>On a Journey together</h2>
          <p className='w-5/12 xl:text-lg'>We partner to enabled effective and successful projects together for customers.</p>
        </div>
      </section>
      <section className='section-padding'>
        <div className='mx-auto max-w-7xl'>
          <div className='mb-16 px-36'>
            <Surtitle text='Key Partners' className='after:w-64' />
          </div>
          <CardsSmall />
        </div>
      </section>
      <BackgroundImage src='/images/divider-dark.png' alt='Plants divider' className='mb-28 -mt-96' />
    </Layout>
  )
}
