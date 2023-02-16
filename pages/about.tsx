import Head from 'next/head'
import Nav from '../components/nav'
// import Hero from '../components/hero'
// import Team from '../components/team'
// import Contact from '../components/contact'
// import Map from '../components/map'

// import { team } from '../data/team'

export default function About () {
  return (
    <>
      <header>
        <Head>
          <title>Edeltech | About</title>
        </Head>
        <Nav />
        {/* <Hero
          title='About Edeltech'
          tagline='We are located in Sion, the capital of the canton of Valais at
          the heart of the Swiss alps. Our office is at walking distance from the
          train station and the Valais campus of EPFL.'
          image='/images/sion.jpg'
        /> */}
      </header>
      <main>
        {/* <Team people={team} />
        <Map />
        <Contact /> */}
      </main>
    </>
  )
}
