import {PageProps} from '../models/page.model'
import {getDetailsCardsTraining, getListDetailsTraining} from '../data/training'
import BackgroundImage from '../components/atoms/background-image'
import Contact from '../components/atoms/contact'
import Description from '../components/molecules/description'
import DetailsCardsWrapper from '../components/organisms/details-cards-wrapper'
import Head from 'next/head'
import LargeTitleIntro from '../components/molecules/large-title-intro'
import Layout from '../components/organisms/layout'

export default function TrainingPage ({t}: PageProps) {
  return (
    <Layout>
      {({toggleIsOpen}) => (
        <>
          <Head>
            <title>56K.Cloud | {t('training:tab')}</title>
          </Head>
          <LargeTitleIntro
            surtitle={t('training:introSurtitle')}
            title={t('training:introTitle')}
            text={t('training:introText')} />
          <Description
            surtitle={t('training:descriptionSurtitle')}
            text={t('training:descriptionText')}
            details={getListDetailsTraining(t)} />
          <BackgroundImage src='/images/mountain-background.png' alt={t('training:altMainIllustration')}
            className='-mt-[10rem] sm:-mt-[15rem] md:-mt-[17rem] lg:-mt-[30rem] xl:-mt-[40rem] 2xl:-mt-[50rem]'
            width={1920} height={0} />
          <DetailsCardsWrapper title={t('training:verticalTitle')} cards={getDetailsCardsTraining(t)}
            titleClassnames='text-white' />
          <BackgroundImage src='/images/divider-light.png' alt={t('training:altDivider')}
            className='-mt-12 sm:-mt-24 md:-mt-28 lg:-mt-36 xl:-mt-44 2xl:-mt-56'
            width={1920} height={0} />
          <Contact toggleContactModal={toggleIsOpen} />
        </>
      )}
    </Layout>
  )
}
