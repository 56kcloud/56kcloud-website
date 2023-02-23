import Head from 'next/head'

import Layout from '../components/organisms/layout'
import BackgroundImage from '../components/atoms/background-image'
import Intro from '../components/molecules/intro'
import Description from '../components/molecules/description'
import { services } from '../data/services'
import CardsList from '../components/organisms/cards-list'
import Contact from '../components/atoms/contact'
import Footer from '../components/molecules/footer'

export default function ServicesPage () {
  return (
    <Layout>
      <Head>
        <title>56K.Cloud | Services</title>
      </Head>
      <section className='px-8 pb-12 xl:px-36'>
        <div className='max-w-6xl mx-auto mt-12 sm:mt-0'>
          <div className='max-w-5xl mx-auto'>
            <BackgroundImage
              src='/images/people-group.png'
              alt='Group of people background'
            />
          </div>
          <Intro
            surtitle='About our programs in:'
            title='Assessment, Migration & Acceleration'
            text='Over the years, we have accumulated a huge amount of knowledge on how to migrate on to the public
            cloud and operate workload in a secure and scalable way. We have seen many commonalities in all the
            projects and across different industries. We have packaged this knowledge to help our customers move
            faster and make use of the 1000s of hours we have spent in the cloud.'
          />
        </div>
      </section>
      <Description
        surtitle='What do our services programs include:'
        text='We have learned that a lot of our customers have the same needs and requirements. Therefore, we build
        services that bring more value for less money to our customers. These provide ready-to-use components, while
        still allowing the adaption to each specific customer and team. These services include:'
        services={services}
      />
      <BackgroundImage src='/images/mountain-background.png' alt='People standing in front of the mountain'
        className='-mt-[10rem] sm:-mt-[15rem] md:-mt-[17rem] lg:-mt-[30rem] xl:-mt-[40rem] 2xl:-mt-[50rem]' />
      <CardsList />
      <BackgroundImage src='/images/division.png' alt='Plants divider' className='-mt-40 xl:-mt-64' />
      <Contact />
      <Footer />
    </Layout>
  )
}
