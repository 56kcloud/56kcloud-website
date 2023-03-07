import useTranslation from 'next-translate/useTranslation'
import { CardPropsImpl } from '../models/Card.model'
import Nav from '../components/molecules/nav'
import Hero from '../components/molecules/hero'
import SmallTitleIntro from '../components/molecules/small-title-intro'
import IllustrationCardsWrapper from '../components/organisms/illustration-cards-wrapper'
import BackgroundImage from '../components/atoms/background-image'
import Companies from '../components/molecules/companies'
import Footer from '../components/molecules/footer'

export default function HomePage () {
  const { t } = useTranslation('home')
  const darkIllustrationCards: Array<CardPropsImpl> = t('home:darkServices', { count: 3 }, { returnObjects: true })
  const lightIllustrationCards: Array<CardPropsImpl> = t('home:lightServices', { count: 3 }, { returnObjects: true })

  return (
    <>
      <header className='overflow-hidden'>
        <Nav />
        <Hero titleLine1={t('titleLine1')} titleLine2={t('titleLine2')} titleLine3={t('titleLine3')} />
      </header>
      <main>
        <SmallTitleIntro text={t('text')}
          title={t('title')} />
        <IllustrationCardsWrapper cards={darkIllustrationCards} theme='dark' />
        <BackgroundImage src='/images/buro-background.png' alt={t('alt')} width={1920} height={0}
          className='bg-blue-lighter' />
        <IllustrationCardsWrapper cards={lightIllustrationCards} theme='light' />
        <Companies />
      </main>
      <Footer version='illustration' />
    </>
  )
}
