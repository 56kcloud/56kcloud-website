import useTranslation from 'next-translate/useTranslation'
import Head from 'next/head'
import Layout from '../components/organisms/layout'
import MediumTitleIntro from '../components/molecules/medium-title-intro'
import Gallery from '../components/molecules/gallery'
import BaseCardsWrapper from '../components/organisms/base-cards-wrapper'
import { baseCardsAbout } from '../data/base-cards'
import BackgroundImage from '../components/atoms/background-image'
import TeamCardsWrapper from '../components/organisms/team-cards-wrapper'
import { teamCards } from '../data/team-cards'
import Footer from '../components/molecules/footer'

export default function AboutPage () {
  const { t } = useTranslation('about')

  return (
    <>
      <Layout>
        <Head>
          <title>Edeltech | {t('tab')}</title>
        </Head>
        <MediumTitleIntro title={t('introTitle')}
          textColLeft={t('introTextColLeft')}
          textColRight={t('introTextColRight')} />
        <Gallery />
        <BaseCardsWrapper cards={baseCardsAbout} text={t('cardsWrapperSurtitle')} className='after:w-64' />
        <BackgroundImage src='/images/divider-dark.png' alt='Plants divider' width={1920} height={0}
          className='-mt-[7rem] sm:-mt-36 md:-mt-44 lg:-mt-56 xl:-mt-72 2xl:-mt-96' />
        <TeamCardsWrapper cards={teamCards} />
      </Layout>
      <footer>
        <Footer version='blue' />
      </footer>
    </>
  )
}
