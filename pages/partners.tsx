import useTranslation from 'next-translate/useTranslation'
import Layout from '../components/organisms/layout'
import Head from 'next/head'
import MediumTitleIntro from '../components/molecules/medium-title-intro'
import BaseCardsWrapper from '../components/organisms/base-cards-wrapper'
import { getBaseCardsPartners } from '../data/partners'
import BackgroundImage from '../components/atoms/background-image'
import IllustrationCardWrapper from '../components/organisms/illustration-cards-wrapper'
import Footer from '../components/molecules/footer'
import { getLightIllustrationsCardsPartners } from '../data/illustration-cards'

export default function PartnersPage () {
  const { t } = useTranslation('partners')

  return (
    <>
      <Layout>
        <Head>
          <title>56K.Cloud | {t('tab')}</title>
        </Head>
        <MediumTitleIntro title={t('introTitle')}
          textColLeft={t('introText')} />
        <BaseCardsWrapper cards={getBaseCardsPartners(t)} text={t('cardsWrapperSurtitle')} className='after:w-64' />
        <BackgroundImage src='/images/divider-dark.png' alt={t('altDivider')} width={1920} height={0}
          className='-mt-[7rem] mb-16 md:mb-28 sm:-mt-36 md:-mt-44 lg:-mt-56 xl:-mt-72 2xl:-mt-96' />
        <IllustrationCardWrapper cards={getLightIllustrationsCardsPartners(t)} theme='light' />
      </Layout>
      <footer>
        <Footer version='illustration' />
      </footer>
    </>
  )
}
