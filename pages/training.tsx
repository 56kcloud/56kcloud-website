import useTranslation from 'next-translate/useTranslation'
import { DetailsCardProps } from '../components/molecules/details-card'
import Head from 'next/head'
import Layout from '../components/organisms/layout'
import BackgroundImage from '../components/atoms/background-image'
import LargeTitleIntro from '../components/molecules/large-title-intro'
import Description from '../components/molecules/description'
import DetailsCardsWrapper from '../components/organisms/details-cards-wrapper'
import Contact from '../components/atoms/contact'
import Footer from '../components/molecules/footer'

export default function TrainingPage () {
  const { t } = useTranslation('training')
  const cardsDetails: Array<DetailsCardProps> = t('training:features', { count: 4 }, { returnObjects: true })
  const details: Array<string> = t('training:details', { count: 5 }, { returnObjects: true })

  return (
    <Layout>
      <Head>
        <title>56K.Cloud | {t('tab')}</title>
      </Head>
      <LargeTitleIntro
        surtitle={t('introSurtitle')}
        title={t('introTitle')}
        text={t('introText')} />
      <Description
        surtitle={t('descriptionSurtitle')}
        text={t('descriptionText')}
        details={details} />
      <BackgroundImage src='/images/mountain-background.png' alt={t('altMainIllustration')}
        className='-mt-[10rem] sm:-mt-[15rem] md:-mt-[17rem] lg:-mt-[30rem] xl:-mt-[40rem] 2xl:-mt-[50rem]'
        width={1920} height={0} />
      <DetailsCardsWrapper title='Our courses' cards={cardsDetails} styleTitle='text-white' />
      <BackgroundImage src='/images/divider-light.png' alt={t('altDivider')} className='-mt-40 xl:-mt-64'
        width={1920} height={0} />
      <Contact />
      <Footer version='illustration' />
    </Layout>
  )
}
