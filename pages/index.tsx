import Nav from '../components/nav'
import Hero from '../components/hero'
import IntroHome from '../components/intro-home'
import DarkCardsImage from '../components/dark-cards-image'
import BackgroundImage from '../components/background-image'
import LightCardsImage from '../components/light-cards-image'
import Companies from '../components/companies'
import Footer from '../components/footer'

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
        <DarkCardsImage />
        <BackgroundImage
          image='/images/buro-background.png'
          title='Buro background'
          className='bg-blue-lighter'
        />
        <LightCardsImage />
        <Companies />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
