import useTranslation from 'next-translate/useTranslation'
import { CardPropsImpl } from '../models/Card.model'
import Head from 'next/head'
import Layout from '../components/organisms/layout'
import MediumTitleIntro from '../components/molecules/medium-title-intro'
import BaseCardsWrapper from '../components/organisms/base-cards-wrapper'
import { baseCardsPartners } from '../data/base-cards'
import BackgroundImage from '../components/atoms/background-image'
import IllustrationCardWrapper from '../components/organisms/illustration-cards-wrapper'

export default function PartnersPage () {
  const { t } = useTranslation('partners')
  const illustrationCards: Array<CardPropsImpl> = t('partners:partners', { count: 3 }, { returnObjects: true })

  return (
    <Layout>
      <Head>
        <title>56K.Cloud | {t('tab')}</title>
      </Head>
      <MediumTitleIntro title={t('introTitle')}
        textColLeft={t('introText')} />
      <BaseCardsWrapper cards={baseCardsPartners} text={t('cardsWrapperSurtitle')} className='after:w-64' />
      <BackgroundImage src='/images/divider-dark.png' alt={t('altDivider')} width={1920} height={0}
        className='-mt-[7rem] mb-16 md:mb-28 sm:-mt-36 md:-mt-44 lg:-mt-56 xl:-mt-72 2xl:-mt-96' />
      <IllustrationCardWrapper title='Services' theme='light' cards={illustrationCards} />
    </Layout>
  )
}
