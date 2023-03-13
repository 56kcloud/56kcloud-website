import useTranslation from 'next-translate/useTranslation'
import Hero from '../components/molecules/hero'
import SmallTitleIntro from '../components/molecules/small-title-intro'
import IllustrationCardsWrapper from '../components/organisms/illustration-cards-wrapper'
import { getDarkIllustrationCardsHome, getLightIllustrationCardsHome } from '../data/illustration-cards'
import BackgroundImage from '../components/atoms/background-image'
import Companies from '../components/molecules/companies'
import Layout from '../components/organisms/layout'

export default function HomePage () {
  const { t } = useTranslation('home')

  return (
    <Layout>
      <Hero titleLine1={t('titleLine1')} titleLine2={t('titleLine2')} titleLine3={t('titleLine3')} />
      <SmallTitleIntro text={t('textIntro')} title={t('titleIntro')} />
      <IllustrationCardsWrapper title='Services' cards={getDarkIllustrationCardsHome(t)} />
      <BackgroundImage src='/images/buro-background.png' alt={t('alt')} width={1920} height={0}
        className='bg-blue-lighter' />
      <IllustrationCardsWrapper theme='light' title='Services' cards={getLightIllustrationCardsHome(t)} />
      <Companies />
    </Layout>
  )
}
