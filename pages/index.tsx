import useTranslation from 'next-translate/useTranslation'
import Nav from '../components/molecules/nav'
import Hero from '../components/molecules/hero'
import SmallTitleIntro from '../components/molecules/small-title-intro'
import IllustrationCardsWrapper from '../components/organisms/illustration-cards-wrapper'
import { getDarkIllustrationCardsHome, lightIllustrationCardsHome } from '../data/illustration-cards'
import BackgroundImage from '../components/atoms/background-image'
import Companies from '../components/molecules/companies'
import Footer from '../components/molecules/footer'

export default function HomePage () {
  const { t } = useTranslation('home')

  return (
    <>
      <header className='overflow-hidden'>
        <Nav />
        <Hero titleLine1={t('titleLine1')} titleLine2={t('titleLine2')} titleLine3={t('titleLine3')} />
      </header>
      <main>
        <SmallTitleIntro text={t('textIntro')}
          title={t('titleIntro')} />
        <IllustrationCardsWrapper cards={getDarkIllustrationCardsHome(t)} />
        <BackgroundImage src='/images/buro-background.png' alt={t('altImageBackground')} width={1920} height={0}
          className='bg-blue-lighter' />
        {/* <IllustrationCardsWrapper cards={lightIllustrationCardsHome} theme='light' /> */}
        <Companies />
      </main>
      <Footer backgroundStyle='illustration' />
    </>
  )
}
