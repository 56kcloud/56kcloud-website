import useTranslation from 'next-translate/useTranslation'
import Layout from '../components/organisms/layout'
import Head from 'next/head'
import MediumTitleIntro from '../components/molecules/medium-title-intro'
import Gallery from '../components/molecules/gallery'
import BaseCardsWrapper from '../components/organisms/base-cards-wrapper'
import { getBaseCardsAbout, getTeamCardsAbout } from '../data/about'
import BackgroundImage from '../components/atoms/background-image'
import TeamCardsWrapper from '../components/organisms/team-cards-wrapper'
import Footer from '../components/molecules/footer'

export default function AboutPage () {
  const { t } = useTranslation('about')

  return (
    <>
      <Layout>
        <Head>
          <title>56K.Cloud | {t('tab')}</title>
        </Head>
        <MediumTitleIntro title={t('introTitle')}
          textColLeft={t('introTextColLeft')}
          textColRight={t('introTextColRight')} />
        <Gallery />
        <BaseCardsWrapper cards={getBaseCardsAbout(t)} text={t('cardsWrapperSurtitle')} className='after:w-64' />
        <BackgroundImage src='/images/divider-dark.png' alt='Plants divider' width={1920} height={0}
          className='-mt-[7rem] sm:-mt-36 md:-mt-44 lg:-mt-56 xl:-mt-72 2xl:-mt-96' />
        <TeamCardsWrapper cards={getTeamCardsAbout(t)} />
      </Layout>
      <footer>
        <Footer backgroundStyle='blue' />
      </footer>
    </>
  )
}
