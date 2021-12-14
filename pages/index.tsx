import Nav from '../components/nav'
import Hero from '../components/hero'
import Feature from '../components/feature'
import Contact from '../components/contact'
import useTranslation from 'next-translate/useTranslation'

export default function Home () {
  const { t } = useTranslation('home')
  const featureImages = ['app.png', 'cloud.png', 'ai.png']

  return (
    <>
      <header>
        <Nav />
        <Hero
          title={t('title')}
          tagline={t('tagline')}
          image='/images/matterhorn-by-night.jpg'
        />
      </header>
      <main>
        {featureImages.map((imageUrl, index) => {
          const featureIndex = index + 1
          return (
            <Feature
              title={t(`feature${featureIndex}Title`)}
              body={t(`feature${featureIndex}Body`)}
              reverse={featureIndex % 2 === 0}
              imageUrl={`/images/${imageUrl}`}
            />
          )
        })}
        <Contact />
      </main>
    </>
  )
}
