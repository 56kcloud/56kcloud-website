import Head from 'next/head'
import Nav from '../components/nav'
import Hero from '../components/hero'
import Team from '../components/team'
import Contact from '../components/contact'
import Map from '../components/map'
import { team } from '../data/team'
import useTranslation from 'next-translate/useTranslation'

export default function About () {
  const { t } = useTranslation('about')
  return (
    <>
      <header>
        <Head>
          <title>Edeltech | About</title>
        </Head>
        <Nav />
        <Hero
          title={t('title')}
          tagline={t('tagline')}
          image='/images/sion.jpg'
        />
      </header>
      <main>
        <Team people={team} />
        <Map />
        <Contact />
      </main>
    </>
  )
}
