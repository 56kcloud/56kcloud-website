import {PageProps} from '../models/page.model'
import {getBaseCardsAbout} from '../data/about'
import BackgroundImage from '../components/atoms/background-image'
import BaseCardsWrapper from '../components/organisms/base-cards-wrapper'
import Gallery from '../components/molecules/gallery'
import Head from 'next/head'
import Layout from '../components/organisms/layout'
import MediumTitleIntro from '../components/molecules/medium-title-intro'
import TeamCardsWrapper from '../components/organisms/team-cards-wrapper'

export default function AboutPage ({t}: PageProps) {
  return (
    <Layout>
      {({toggleIsOpen}) => (
        <>
          <Head>
            <title>Edeltech | {t('about:tab')}</title>
          </Head>
          <MediumTitleIntro title={t('about:introTitle')}
            textColLeft={t('about:introTextColLeft')}
            textColRight={t('about:introTextColRight')} />
          <Gallery />
          <BaseCardsWrapper cards={getBaseCardsAbout(t)} text={t('about:cardsWrapperSurtitle')}
            className='after:w-64' />
          <BackgroundImage src='/images/divider-dark.png' alt='Plants divider' width={1920} height={0}
            className='-mt-[7rem] sm:-mt-36 md:-mt-44 lg:-mt-56 xl:-mt-72 2xl:-mt-96' />
          <TeamCardsWrapper toggleContactModal={toggleIsOpen} t={t}/>
        </>
      )}
    </Layout>
  )
}
