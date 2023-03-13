import Layout from '../components/organisms/layout'
import Head from 'next/head'
import MediumTitleIntro from '../components/molecules/medium-title-intro'
import BaseCardsWrapper from '../components/organisms/base-cards-wrapper'
import { getBaseCardsPartners } from '../data/partners'
import BackgroundImage from '../components/atoms/background-image'
import IllustrationCardWrapper from '../components/organisms/illustration-cards-wrapper'
import { getLightIllustrationsCardsPartners } from '../data/illustration-cards'
import { PageProps } from '../models/page.model'

export default function PartnersPage ({ t }: PageProps) {
  return (
    <Layout>
      <Head>
        <title>56K.Cloud | {t('partners:tab')}</title>
      </Head>
      <MediumTitleIntro title={t('partners:introTitle')} textColLeft={t('partners:introText')} />
      <BaseCardsWrapper cards={getBaseCardsPartners(t)} text={t('partners:cardsWrapperSurtitle')}
        className='after:w-64' />
      <BackgroundImage src='/images/divider-dark.png' alt={t('partners:altDivider')} width={1920} height={0}
        className='-mt-[7rem] mb-16 md:mb-28 sm:-mt-36 md:-mt-44 lg:-mt-56 xl:-mt-72 2xl:-mt-96' />
      <IllustrationCardWrapper title='Services' theme='light' cards={getLightIllustrationsCardsPartners(t)} />
    </Layout>
  )
}
