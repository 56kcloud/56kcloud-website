import Head from 'next/head'
import Layout from '../components/organisms/layout'
import MediumTitleIntro from '../components/molecules/medium-title-intro'
import BaseCardsWrapper from '../components/organisms/base-cards-wrapper'
import { baseCards } from '../data/base-cards'

export default function AboutPage () {
  return (
    <Layout>
      <Head>
        <title>Edeltech | About</title>
      </Head>
      <MediumTitleIntro title='56K.Cloud was founded to share our vision of the cloud with our partners and customers'
        textColLeft="56K.Cloud was founded after realizing that the customer's journey to the cloud was not been
          fully addressed."
        textColRight='We pride ourselves on being Technology Native and not being locked into vendor technologies,
          but instead providing the best cloud solution for our customers.' />
      <BaseCardsWrapper cards={baseCards} text='Our focus' className='after:w-64' />
    </Layout>
  )
}
