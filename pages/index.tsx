import Hero from '../components/hero'
import Feature from '../components/feature'
import Contact from '../components/contact'
import useTranslation from 'next-translate/useTranslation'
import Layout from '../components/layout'

export default function Home () {
  const { t } = useTranslation('home')
  const featureImages = ['app.png', 'cloud.png', 'ai.png']

  return (
    <Layout header={
      <Hero
        title={t('title')}
        tagline={t('tagline')}
        image='/images/matterhorn-by-night.jpg'
      />}
    >
      {featureImages.map((imageUrl, index) => {
        const featureIndex = index + 1
        return (
          <Feature
            key={index}
            title={t(`feature${featureIndex}Title`)}
            body={t(`feature${featureIndex}Body`)}
            reverse={featureIndex % 2 === 0}
            imageUrl={`/images/${imageUrl}`}
          />
        )
      })}
      <Contact />
    </Layout>
  )
}
