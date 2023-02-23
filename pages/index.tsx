import Nav from '../components/molecules/nav'
import Hero from '../components/molecules/hero'
import IntroHome from '../components/molecules/intro-home'
import CardsImage from '../components/organisms/cards-image'
import { darkCardsImage, lightCardsImage } from '../data/cards-image'
import BackgroundImage from '../components/atoms/background-image'
import Companies from '../components/molecules/companies'
import Footer from '../components/molecules/footer'

export default function Home () {
  return (
    <>
      <header className='overflow-hidden'>
        <Nav />
        <Hero
          titleLine1="Let's Start"
          titleLine2='your Cloud'
          titleLine3='Journey'
          image='/images/hero-background.png'
        />
      </header>
      <main>
        <IntroHome />
        <CardsImage cards={darkCardsImage} theme='dark' />
        <BackgroundImage
          src='/images/buro-background.png'
          alt='Buro background'
          className='bg-blue-lighter'
        />
        <CardsImage cards={lightCardsImage} />
        <Companies />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
