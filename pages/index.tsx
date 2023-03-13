import Hero from '../components/molecules/hero'
import SmallTitleIntro from '../components/molecules/small-title-intro'
import IllustrationCardsWrapper from '../components/organisms/illustration-cards-wrapper'
import { getDarkIllustrationCardsHome, getLightIllustrationCardsHome } from '../data/illustration-cards'
import BackgroundImage from '../components/atoms/background-image'
import Companies from '../components/molecules/companies'
import Layout from '../components/organisms/layout'
import { PageProps } from '../models/page.model'

export default function HomePage ({ t }: PageProps) {
  return (
    <Layout>
      <Hero titleLine1={t('home:titleLine1')} titleLine2={t('home:titleLine2')} titleLine3={t('home:titleLine3')} />
      <SmallTitleIntro text={t('home:textIntro')} title={t('home:titleIntro')} />
      <IllustrationCardsWrapper title='Services' cards={getDarkIllustrationCardsHome(t)} />
      <BackgroundImage src='/images/buro-background.png' alt={t('home:alt')} width={1920} height={0}
        className='bg-blue-lighter' />
      <IllustrationCardsWrapper theme='light' title='Services' cards={getLightIllustrationCardsHome(t)} />
      <Companies />
    </Layout>
  )
}
