import Head from 'next/head'
import Layout from '../components/organisms/layout'
import BackgroundImage from '../components/atoms/background-image'
import LargeTitleIntro from '../components/molecules/large-title-intro'
import Description from '../components/molecules/description'
import { detailsTraining } from '../data/details'
import { detailsCardsTraining } from '../data/details-cards'
import DetailsCardsWrapper from '../components/organisms/details-cards-wrapper'
import Contact from '../components/atoms/contact'
import Footer from '../components/molecules/footer'

export default function TrainingPage () {
  return (
    <Layout>
      <Head>
        <title>56K.Cloud | Training</title>
      </Head>
      <LargeTitleIntro
        surtitle='About our'
        title='Training'
        text='Our training concept is simple. Hands-on, real-world examples, customized to your specific environment
        (Cloud, application, and business cases). 56K.Cloud works very closely with our partners to deliver the best
        solutions. The 56K.Cloud team brings years of experience to the training presenting both the best practices
        as well as how it works in production.' />
      <Description
        surtitle='What does our training include'
        text='Not only do we provide training but we also offer pre-training calls and after-training support. We host
        special training events in the Swiss Alps where we can take advantage of the great outdoors, while immersed in
        the different training topics.'
        details={detailsTraining} />
      <BackgroundImage src='/images/mountain-background.png' alt='People standing in front of the mountain'
        className='-mt-[10rem] sm:-mt-[15rem] md:-mt-[17rem] lg:-mt-[30rem] xl:-mt-[40rem] 2xl:-mt-[50rem]'
        width={1920} height={0} />
      <DetailsCardsWrapper cards={detailsCardsTraining} />
      <BackgroundImage src='/images/division.png' alt='Plants divider' className='-mt-40 xl:-mt-64'
        width={1920} height={0} />
      <Contact />
      <Footer version='illustration' />
    </Layout>
  )
}
