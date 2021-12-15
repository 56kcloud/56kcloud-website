import Hero from '../components/hero'
import Team from '../components/team'
import Contact from '../components/contact'
import Map from '../components/map'
import { team } from '../data/team'
import useTranslation from 'next-translate/useTranslation'
import Layout from '../components/layout'

export default function About () {
  const { t } = useTranslation('about')
  return (
    <Layout
      title={`Edeltech | ${t('common:about')}`}
      header={
        <Hero
          title={t('title')}
          tagline={t('tagline')}
          image='/images/sion.jpg'
        />}
    >
      <Team people={team} />
      <Map />
      <Contact />
    </Layout>
  )
}
