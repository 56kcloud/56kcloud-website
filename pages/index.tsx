import Nav from '../components/nav'
import Hero from '../components/hero'
import Intro from '../components/intro'
import DarkServices from '../components/dark-services'
import BackgroundImage from '../components/background-image'
import LightServices from '../components/light-services'
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
        <Intro />
        <DarkServices />
        <BackgroundImage
          image='/images/buro-background.png'
          title='Buro background'
        />
        <LightServices />
        <Companies />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
