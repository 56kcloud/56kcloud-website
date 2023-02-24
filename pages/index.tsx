import Nav from '../components/molecules/nav'
import Hero from '../components/molecules/hero'
import SmallTitleIntro from '../components/molecules/small-title-intro'
import IllustrationCardsWrapper from '../components/organisms/illustration-cards-wrapper'
import { darkIllustrationCardsHome, lightIllustrationCardsHome } from '../data/illustration-cards'
import BackgroundImage from '../components/atoms/background-image'
import Companies from '../components/molecules/companies'
import Footer from '../components/molecules/footer'

export default function HomePage () {
  return (
    <>
      <header className='overflow-hidden'>
        <Nav />
        <Hero titleLine1="Let's Start" titleLine2='your Cloud' titleLine3='Journey' />
      </header>
      <main>
        <SmallTitleIntro text="It's important to get the entire team on board and headed in the right direction on the
          same cloud journey. We align customers in their cloud-native story."
        title='56K.Cloud was founded to share our vision of the cloud with our partners and customers.' />
        <IllustrationCardsWrapper cards={darkIllustrationCardsHome} />
        <BackgroundImage src='/images/buro-background.png' alt='Buro background' width={1920} height={0}
          className='bg-blue-lighter' />
        <IllustrationCardsWrapper cards={lightIllustrationCardsHome} theme='light' />
        <Companies />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
