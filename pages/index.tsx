import Nav from '../components/molecules/nav'
import Hero from '../components/molecules/hero'
import IntroHome from '../components/molecules/intro-home'
import DarkCardsImage from '../components/organisms/dark-cards-image'
import BackgroundImage from '../components/atoms/background-image'
import LightCardsImage from '../components/organisms/light-cards-image'
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
