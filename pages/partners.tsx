import Head from 'next/head'
import Layout from '../components/organisms/layout'
import MediumTitleIntro from '../components/molecules/medium-title-intro'
import Surtitle from '../components/atoms/surtitle'
import BaseCardsWrapper from '../components/organisms/base-cards-wrapper'
import { baseCards } from '../data/base-cards'
import BackgroundImage from '../components/atoms/background-image'
import IllustrationCardWrapper from '../components/organisms/illustration-cards-wrapper'
import { lightIllustrationCardsPartners } from '../data/illustration-cards'

export default function PartnersPage () {
  return (
    <Layout>
      <Head>
        <title>56K.Cloud | Partners</title>
      </Head>
      <section className=
        "bg-[url('/images/cloud-background.png')] px-8 pt-56 bg-no-repeat bg-[length:100%] xl:px-36 bg-bottom bg-white">
        <MediumTitleIntro title='On a Journey together'
          textColLeft='We partner to enabled effective and successful projects together for customers.' />
      </section>
      <section className='section-padding'>
        <div className='mx-auto max-w-7xl'>
          <div className='mb-10 md:mb-12 lg:mb-16 xl:px-36'>
            <Surtitle text='Key Partners' className='after:w-64' />
          </div>
          <BaseCardsWrapper cards={baseCards} />
        </div>
      </section>
      <BackgroundImage src='/images/divider-dark.png' alt='Plants divider' width={1920} height={0}
        className='-mt-[7rem] mb-16 md:mb-28 sm:-mt-36 md:-mt-44 lg:-mt-56 xl:-mt-72 2xl:-mt-96' />
      <section>
        <IllustrationCardWrapper cards={lightIllustrationCardsPartners} theme='light' />
      </section>
    </Layout>
  )
}
