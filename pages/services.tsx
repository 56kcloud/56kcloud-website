import {PageProps} from '../models/page.model'
import {getDetailsCardsServices, getListDetailsServices} from '../data/services'
import BackgroundImage from '../components/atoms/background-image'
import Contact from '../components/atoms/contact'
import Description from '../components/molecules/description'
import DetailsCardsWrapper from '../components/organisms/details-cards-wrapper'
import Head from 'next/head'
import LargeTitleIntro from '../components/molecules/large-title-intro'
import Layout from '../components/organisms/layout'

export default function ServicesPage ({t}: PageProps) {
  return (
    <Layout>
      {({toggleIsOpen}) => (
        <>
          <Head>
            <title>56K.Cloud | Services</title>
          </Head>
          <LargeTitleIntro
            surtitle={t('services:introSurtitle')}
            title={t('services:introTitle')}
            text={t('services:introText')} />
          <Description
            surtitle={t('services:descriptionSurtitle')}
            text={t('services:descriptionText')}
            details={getListDetailsServices(t)} />
          <BackgroundImage src='/images/mountain-background.png' alt={t('services:altMainIllustration')}
            className='-mt-[10rem] sm:-mt-[15rem] md:-mt-[17rem] lg:-mt-[30rem] xl:-mt-[40rem] 2xl:-mt-[50rem]' />
          <DetailsCardsWrapper title={t('services:verticalTitle')} cards={getDetailsCardsServices(t)}
            titleClassnames='text-white' />
          <BackgroundImage src='/images/divider-light.png' alt={t('services:altDivider')}
            className='-mt-12 sm:-mt-24 md:-mt-28 lg:-mt-36 xl:-mt-44 2xl:-mt-56' />
          <Contact toggleContactModal={toggleIsOpen} />
        </>
      )}
    </Layout>
  )
}
