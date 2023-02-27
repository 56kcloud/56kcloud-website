import Head from 'next/head'
import Layout from '../components/organisms/layout'
import MediumTitleIntro from '../components/molecules/medium-title-intro'
import BaseCardsWrapper from '../components/organisms/base-cards-wrapper'
import { baseCardsPartners } from '../data/base-cards'
import BackgroundImage from '../components/atoms/background-image'
import IllustrationCardWrapper from '../components/organisms/illustration-cards-wrapper'
import { lightIllustrationCardsPartners } from '../data/illustration-cards'

export default function PartnersPage () {
  return (
    <Layout>
      <Head>
        <title>56K.Cloud | Partners</title>
      </Head>
      <MediumTitleIntro title='On a Journey together'
        textColLeft='We partner to enabled effective and successful projects together for customers.' />
      <BaseCardsWrapper cards={baseCardsPartners} text='Key Partners' className='after:w-64' />
      <BackgroundImage src='/images/divider-dark.png' alt='Plants divider' width={1920} height={0}
        className='-mt-[7rem] mb-16 md:mb-28 sm:-mt-36 md:-mt-44 lg:-mt-56 xl:-mt-72 2xl:-mt-96' />
      <IllustrationCardWrapper cards={lightIllustrationCardsPartners} theme='light' />
    </Layout>
  )
}
