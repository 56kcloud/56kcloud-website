import {PageProps} from '@/models/page.model'
import {getBaseCardsPartners} from '@/data/partners'
import {getLightIllustrationsCardsPartners} from '@/data/illustration-cards'
import BaseCardList from '@/components/organisms/card-list/base'
import Head from 'next/head'
import IllustrationCardList from '@/components/organisms/card-list/illustration'
import Image from 'next/image'
import Layout from '../components/organisms/layout'
import MediumTitleSection from '@/components/molecules/title-section/medium'
import divider from '../../public/images/dividers/dark.webp'

export default function Partners({t}: PageProps) {
  return (
    <Layout
      t={t}
      fullHeightHero>
      <Head>
        <title>56K.Cloud | Partners</title>
      </Head>
      <MediumTitleSection
        title={t('partners:introTitle')}
        textColLeft={t('partners:introText')}/>
      <BaseCardList
        text={t('partners:cardsWrapperSurtitle')}
        cards={getBaseCardsPartners()}
        className='after:w-64'/>
      <Image
        src={divider}
        alt={t('partners:altDivider')}
        className='background-image -mt-[7rem] mb-16 md:mb-28 sm:-mt-36 md:-mt-44 lg:-mt-56 xl:-mt-72 2xl:-mt-96'/>
      <IllustrationCardList
        title='Services' 
        theme='light'
        cards={getLightIllustrationsCardsPartners(t)}/>
    </Layout>
  )
}
